import React from 'react';

import LoadingBar from 'components/shared/loading-bar';

import CPUIllustration from './images/cpu-illustration.inline.svg';
import NodesIllustration from './images/nodes-illustration.inline.svg';
import PercentageIllustration from './images/percentage-illustration.inline.svg';
import PieChartIllustration from './images/pie-chart-illustration.inline.svg';

const Dashboard = () => (
  <div className="safe-paddings space-y-10 pt-2 sm:space-y-5 sm:p-0">
    <ul className="flex space-x-10 sm:space-x-5">
      <li>
        <LoadingBar id="cpu" name="CPU" maxValue={64} />
      </li>
      <li>
        <LoadingBar id="ram" name="RAM" maxValue={79} />
      </li>
    </ul>
    <div className="relative">
      <CPUIllustration className="h-auto w-[830px] xl:max-w-[98%]" aria-hidden />
      <label className="absolute bottom-0 -right-[103px] block w-52 -translate-y-[95px] rotate-90 sm:bottom-1/2 sm:-right-24">
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
