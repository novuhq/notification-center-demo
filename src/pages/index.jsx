import React from 'react';

import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import LayoutMain from 'layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <div className="text-lg">
      <h1>Pixel Point Next.js Tailwind Starter</h1>
      <Link className="text-[red] transition-colors duration-200 hover:text-[black]" to="/about">
        Test Link
        <ArrowIcon className="ml-2 inline-flex w-5" />
      </Link>
    </div>
  </LayoutMain>
);

export default Home;
