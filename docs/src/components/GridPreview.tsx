import React, { ReactElement } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import columnsImage from '../images/grid/columns.png';
import grid0 from '../images/grid/grid-0-verview.png';
import grid8 from '../images/grid/grid-8-px.png';
import gutterImage from '../images/grid/gutter.png';
import marginsImage from '../images/grid/margins.png';

import smallSizeImage from '../images/grid/small-size.png';
import mediumSizeImage from '../images/grid/medium-size.png';
import largeSizeImage from '../images/grid/large-size.png';
import xLargeSizeImage from '../images/grid/x-large-size.png';
import overSizeImage from '../images/grid/over-size.png';

interface Props {}

export default function GridPreview({}: Props): ReactElement {
  return (
    <div>
      <h2 className="h2">Grid vocabulary</h2>
      <Tabs>
        <TabList>
          <Tab>Grid overview</Tab>
          <Tab>Columns</Tab>
          <Tab>Gutters</Tab>
          <Tab>Margins</Tab>
          <Tab>Grid 8px</Tab>
        </TabList>

        <TabPanel>
          <img src={grid0} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={columnsImage} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={gutterImage} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={marginsImage} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={grid8} className="Content-image" alt="" />
        </TabPanel>
      </Tabs>
      <h2 className="h2">AXA Grids</h2>
      <Tabs>
        <TabList>
          <Tab>Small size</Tab>
          <Tab>Medium size</Tab>
          <Tab>Large size</Tab>
          <Tab>Xlarge size</Tab>
          <Tab>2XLarge size</Tab>
        </TabList>

        <TabPanel>
          <img src={smallSizeImage} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={mediumSizeImage} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={largeSizeImage} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={xLargeSizeImage} className="Content-image" alt="" />
        </TabPanel>
        <TabPanel>
          <img src={overSizeImage} className="Content-image" alt="" />
        </TabPanel>
      </Tabs>
    </div>
  );
}
