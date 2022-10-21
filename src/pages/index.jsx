import React from 'react';

import Dashboard from 'components/pages/home/dashboard';
import Notifications from 'components/pages/home/notifications';
import Sidebar from 'components/pages/home/sidebar';
import LayoutMain from 'layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <h1 className="sr-only">Novu dashboard demo page</h1>
    <div className="container main-wrapper pb-10 lg:overflow-x-hidden">
      <div className="relative grid grid-cols-[65px_1fr_375px] gap-x-10 xl:gap-x-5 lg:grid-cols-[65px_1fr_300px] md:grid-cols-[1fr]">
        <Sidebar />
        <Dashboard />
        <Notifications className="md:hidden" />
      </div>
    </div>
  </LayoutMain>
);

export default Home;
