import React from 'react';

import Dashboard from 'components/pages/home/dashboard';
import Notifications from 'components/pages/home/notifications';
import Sidebar from 'components/pages/home/sidebar';
import LayoutMain from 'layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <h1 className="sr-only">Novu dashboard demo page</h1>
    <div className="container main-wrapper pb-10">
      <div className="grid grid-cols-[65px_minmax(200px,1fr)_375px] gap-x-[40px] md:grid-cols-[1fr_300px]">
        <Sidebar />
        <Dashboard />
        <Notifications />
      </div>
    </div>
  </LayoutMain>
);

export default Home;
