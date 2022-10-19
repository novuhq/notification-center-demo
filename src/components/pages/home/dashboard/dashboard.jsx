import React from 'react';

import Percentage65Illustration from './images/65-percentage-illustration.inline.svg';
import Percentage79Illustration from './images/79-percentage-illustration.inline.svg';
import CPUIllustration from './images/cpu-illustration.inline.svg';
import NodesIllustration from './images/nodes-illustration.inline.svg';
import PercentageIllustration from './images/percentage-illustration.inline.svg';
import PieChartIllustration from './images/pie-chart-illustration.inline.svg';

const Dashboard = () => (
  <div className="safe-paddings space-y-10 pt-2 sm:space-y-5 sm:p-0">
    <ul className="flex space-x-10 sm:space-x-5">
      <li>
        <h2 className="text-[18px] font-medium leading-snug text-white">
          CPU <span className="text-grey-6">65%</span>
        </h2>
        <Percentage65Illustration className="mt-2 h-auto w-[400px] xl:max-w-full" aria-hidden />
      </li>
      <li>
        <h2 className="text-[18px] font-medium leading-snug text-white">
          RAM <span className="text-grey-6">79%</span>
        </h2>
        <Percentage79Illustration className="mt-2 h-auto w-[400px] xl:max-w-full" aria-hidden />
      </li>
    </ul>
    <div className="relative">
      <CPUIllustration className="h-auto w-[830px] max-w-full" aria-hidden />
      <label className="absolute bottom-[36%] -right-[103px] block w-52 rotate-90 sm:bottom-1/2 sm:-right-24">
        <input className="styled-slider w-full" type="range" value={27} readOnly />
      </label>
    </div>
    <div className="flex space-x-10 sm:space-x-5">
      <div>
        <PieChartIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
      </div>
      <div className="space-y-10 sm:space-y-5">
        <NodesIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
        <PercentageIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
      </div>
    </div>
  </div>
);

export default Dashboard;
