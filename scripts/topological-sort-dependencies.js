// imports

const {exec} = require('child_process');
const fs = require("fs");
const path = require('path');

// helper functions

const topologicalSort = edges => {
    const nodes   = {}, 
          sorted  = [];
    const noPredecessors = new Set();

    // define node
    const newNode = id => {
        if (nodes[id]) {
            // no duplicate node creation
            return; 
        }
        // no outgoing edges, count of incoming edges is zero
        nodes[id] = {successors: [], numPredecessors: 0};
    }
  
    // 1. build node-oriented graph representation from edges (in O(|edges|) time)
    edges.forEach(edge => {
      const [from,to] = edge;
      // *speculatively* assume node 'from' will have no other nodes pointing at it
      // (could be wrong, see step 2. below for corrective measures)
      noPredecessors.add(from);
      // create both source and destination nodes
      newNode(from);
      newNode(to);
      // encode the edge between them
      nodes[from].successors.push(to);
      // because of the incoming edge, node 'to' has one more predecessor
      nodes[to].numPredecessors++;
      // we *know* that 'from' node points at 'to'
      noPredecessors.delete(to);
    });
 
    // 2. traverse graph
    for(let id,nodeId; noPredecessors.size > 0;) {
        // try to find a true no-predecessor node
        id = null;
        for(nodeId of noPredecessors) {
            // are we encountering a speculated-predecessor-free node
            // which *did* acquire predecessors in the course of building
            // the node-oriented graph representation?
            if(nodes[nodeId].numPredecessors !== 0) continue; // yes, so we skip it
            id = nodeId;
            break;
        }
        // we failed to find any no-predecessor node? 
        if (id === null) {
            // this means the graph is cyclic
            throw new Error(`graph cycle involving node ${nodeId}!`);
        }
        // output node...
        sorted.push(id);
        // ... and delete it, since it has been processed
        noPredecessors.delete(id);
        // mark all successor nodes of just-deleted node:
        nodes[id].successors.forEach( id => {
            // mark current node as having 1 less node pointing at it
            nodes[id].numPredecessors--;
            // how many other nodes are pointing at it now?
            if (nodes[id].numPredecessors === 0) {
                // none, so current node has become predecessor-free as well
                noPredecessors.add(id);
            }
        });
    }
  
    return sorted;
};

// synchronous directory-walker iterator
function *walkSync(dir, filter = /.*/, acceptable = () => true) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const pathToFile = path.join(dir, file);
        const isDirectory = fs.statSync(pathToFile).isDirectory();
        if (isDirectory) {
            yield *walkSync(pathToFile, filter, acceptable);
        } else if (filter.test(pathToFile) && acceptable(dir, file, pathToFile)) {
            yield pathToFile.split(path.sep);
        }
    }
}

// main part

const components = [];

const requireIndexJS = dir => fs.existsSync(path.join(dir, 'index.js'));

// find all importable components ...
for (const file of walkSync('src/components', /(?<!node_modules.*)package\.json$/, requireIndexJS)) {
     // ... converting each to array entry atomicDesignLevel/componentNameProper
    components.push(file.slice(2, 4).join('/'));
}

console.error(`# Found ${components.length} importable-component package.jsons:`);

// construct npm name |-> component path mapping
const npmName2componentPath = {};
components.forEach( component => {
    let [name] = component.split('/').slice(-1);
    name = name.replace(/^\d+\-/, '');
    npmName2componentPath[`@axa-ch/${name}`] = component;
})

// build dependency graph
const independentComponents = {};
const dependencyGraphEdges = [];
components.forEach( (component, i) => {
    // skip empty components
    if (!component) return;
    // derive full file name from component name
    const fileName = `src/components/${component}/package.json`;
    console.error(i + 1, fileName);
    // read file synchronously (they are small, and not too many, so it will be fast enough)
    const componentPackageJSON = fs.readFileSync(fileName);
    // extract dependencies
    const {dependencies = {}, name = ''} = JSON.parse(componentPackageJSON);
    // tentatively assume component has no dependencies (a.k.a. 'independent')
    independentComponents[component] = true;
    // for each dependency:
    Object.keys(dependencies).forEach( dependency => {
        const currentComponent = npmName2componentPath[name];
        const dependentComponent = npmName2componentPath[dependency];
        //  if valid
        if (currentComponent && dependentComponent) {
                // add a graph edge
                dependencyGraphEdges.push([dependentComponent, currentComponent]);
                // and remove wrongly assumed-independent components for both
                // source and destination node of the graph edge (if any)
                delete independentComponents[currentComponent];
                delete independentComponents[dependentComponent]
        }
    });
})
// sort the nodes (= component paths) in the dependency graph so that dependent components come before
// the components requiring them
const topologicallySortedComponents = topologicalSort(dependencyGraphEdges);
// format a sequence of imports in sorted order
const imports = Object.keys(independentComponents)
                .concat(topologicallySortedComponents)
                .map( component => `import "../src/components/${component}/index";` ).join('\n');
// write imports to stdout
console.log(imports);