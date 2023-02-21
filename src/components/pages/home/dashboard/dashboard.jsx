import React, { useState, useEffect } from 'react';

import LoadingBar from 'components/shared/loading-bar';

import Notifications from '../notifications/notifications';

import Chart from './chart';
import nodesIllustration from './images/nodes-illustration.url.svg';
import PieChart from './pie-chart';
import ProgressWithPercentage from './progress-with-percentage';

const cpuAnimationValues = [
  40, 42, 47, 44, 50, 54, 60, 58, 62, 64, 66, 68, 70, 68, 66, 64, 62, 60, 58, 54, 56, 60, 62, 64,
  66, 68, 70, 68, 66, 64,
];
const ramAnimationValues = [
  50, 52, 57, 54, 60, 58, 54, 52, 51, 53, 55, 58, 54, 52, 50, 54, 56, 58, 60, 58, 54, 52, 51, 53,
  55, 58, 54, 52, 50, 54,
];
const pieChartAnimationValues = [
  20, 22, 27, 24, 30, 34, 40, 38, 42, 44, 46, 48, 50, 48, 46, 44, 42, 40, 38, 34, 36, 40, 42, 44,
  46, 48, 50, 48, 46, 44,
];
const progressWithPercentageAnimationValues1 = [
  10, 12, 17, 14, 20, 24, 30, 28, 32, 34, 36, 38, 40, 38, 36, 34, 32, 30, 28, 24, 26, 30, 32, 34,
  36, 38, 40, 38, 36, 34,
];
const progressWithPercentageAnimationValues2 = [
  20, 22, 27, 24, 30, 34, 40, 38, 42, 44, 46, 48, 50, 48, 46, 44, 42, 40, 38, 34, 36, 40, 42, 44,
  46, 48, 50, 48, 46, 44,
];

const Dashboard = () => {
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    if (tickCount === 29) {
      setTickCount(0);
    }

    const interval = setInterval(() => setTickCount((prevState) => prevState + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [tickCount]);

  return (
    <div className="safe-paddings flex flex-col justify-between space-y-10 xl:space-y-5 sm:justify-start">
      <ul className="flex space-x-10 xl:space-x-5 lg:justify-between">
        <li>
          <LoadingBar id="cpu" name="CPU" maxValue={cpuAnimationValues[tickCount]} />
        </li>
        <li>
          <LoadingBar id="ram" name="RAM" maxValue={ramAnimationValues[tickCount]} />
        </li>
      </ul>
      <div className="relative flex lg:min-h-[250px] sm:min-h-[250px]">
        <Chart />
      </div>
      <div className="flex space-x-10 xl:space-x-5 sm:space-x-0" aria-hidden>
        <div className="w-1/2 sm:hidden">
          <PieChart value={pieChartAnimationValues[tickCount]} />
          <div className="mt-5 hidden flex-col space-y-5 md:flex">
            <img className="h-auto max-w-full" src={nodesIllustration} alt="" />
            <ProgressWithPercentage
              value1={progressWithPercentageAnimationValues1[tickCount]}
              value2={progressWithPercentageAnimationValues2[tickCount]}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col justify-between space-y-10 lg:justify-start md:hidden">
          <img className="h-auto w-[400px] max-w-full" src={nodesIllustration} alt="" />
          <ProgressWithPercentage
            value1={progressWithPercentageAnimationValues1[tickCount]}
            value2={progressWithPercentageAnimationValues2[tickCount]}
          />
        </div>
        <Notifications className="hidden w-1/2 md:block sm:w-full" />
      </div>
    </div>
  );
};

export default Dashboard;
