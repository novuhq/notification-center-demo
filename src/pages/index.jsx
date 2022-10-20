import React from 'react';

import Dashboard from 'components/pages/home/dashboard';
import Notifications from 'components/pages/home/notifications';
import Sidebar from 'components/pages/home/sidebar';
import LayoutMain from 'layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <h1 className="sr-only">Novu dashboard demo page</h1>
    <div className="container main-wrapper pb-10">
      <div className="grid grid-cols-[65px_1fr_375px] gap-x-10 lg:grid-cols-[65px_1fr_300px] lg:gap-x-6 md:grid-cols-[1fr_300px]">
        <Sidebar />
        <Dashboard />
        <Notifications />
      </div>
    </div>
  </LayoutMain>
);

export default Home;
