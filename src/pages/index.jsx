import React from 'react';

import Sidebar from 'components/pages/home/sidebar';
import LayoutMain from 'layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <h1 className="sr-only">Novu dashboard demo page</h1>
    <div className="container pb-10">
      <Sidebar />
    </div>
  </LayoutMain>
);

export default Home;
