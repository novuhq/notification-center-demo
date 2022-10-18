import React from 'react';

import Dashboard from 'components/pages/home/dashboard';
import Sidebar from 'components/pages/home/sidebar';
import LayoutMain from 'layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <h1 className="sr-only">Novu dashboard demo page</h1>
    <div className="container flex pb-10">
      <Sidebar />
      <Dashboard />
    </div>
  </LayoutMain>
);

export default Home;
