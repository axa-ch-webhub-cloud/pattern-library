const isEmptyFragment = fragment => !fragment || (typeof fragment === 'object' && fragment.childNodes.length === 0);

export default isEmptyFragment;
