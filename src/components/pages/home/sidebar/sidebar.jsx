import React from 'react';

import Illustration from './images/sidebar-icons-illustration.inline.svg';

const Sidebar = () => (
  <div className="safe-paddings sm: flex hidden min-h-[750px] w-16 items-start justify-center rounded-md bg-grey-2 py-6 px-2">
    <Illustration className="h-auto w-6" aria-hidden />
  </div>
);

export default Sidebar;
