import React, { useState, useEffect, useCallback } from 'react';

import InputRange from 'components/shared/input-range';
import LoadingBar from 'components/shared/loading-bar';
import useUserUuid from 'hooks/use-user-uuid';

import Notifications from '../notifications/notifications';

import Chart from './chart';
import NodesIllustration from './images/nodes-illustration.inline.svg';
import PercentageIllustration from './images/percentage-illustration.inline.svg';
import PieChartIllustration from './images/pie-chart-illustration.inline.svg';

const cpuAnimationValues = [
  30, 40, 80, 50, 28, 60, 70, 90, 20, 10, 100, 20, 30, 40, 80, 50, 28, 60, 70, 90, 20, 10, 100, 20,
  30, 40, 80, 50, 28, 60,
];
const ramAnimationValues = [
  2, 6, 35, 20, 5, 10, 15, 30, 1, 2, 50, 1, 2, 6, 35, 20, 5, 10, 15, 30, 1, 2, 50, 1, 2, 6, 35, 20,
  5, 10,
];

const Dashboard = () => {
  const userUuid = useUserUuid();

  const [rangeValue, setRangeValue] = useState(250);
  const [tickCount, setTickCount] = useState(0);
  const [currentAnimationFrameValue, setCurrentAnimationFrameValue] = useState(0);

  const handleRangeChange = useCallback((e) => {
    setRangeValue(e.target.value);
  }, []);

  const sendMessage = useCallback(async () => {
    await fetch('/api/send-message', {
      method: 'POST',
      body: JSON.stringify({ uuid: userUuid }),
    });
  }, [userUuid]);

  useEffect(() => {
    if (tickCount === 29) {
      setTickCount(0);
    }

    const interval = setInterval(() => setTickCount((prevState) => prevState + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [tickCount]);

  useEffect(() => {
    setCurrentAnimationFrameValue(window.lottieAnimation.currentFrame);
  }, [tickCount]);

  useEffect(() => {
    if (currentAnimationFrameValue >= rangeValue) {
      sendMessage();
    }
  }, [currentAnimationFrameValue, rangeValue, sendMessage]);

  return (
    <div className="safe-paddings flex flex-col justify-between space-y-10 xl:space-y-5 xl:pr-2.5 sm:justify-start">
      <ul className="flex space-x-10 xl:space-x-5">
        <li>
          <LoadingBar id="cpu" name="CPU" maxValue={cpuAnimationValues[tickCount]} />
        </li>
        <li>
          <LoadingBar id="ram" name="RAM" maxValue={ramAnimationValues[tickCount]} />
        </li>
      </ul>
      <div className="relative flex lg:min-h-[250px] lg:max-w-[790px]">
        <Chart rangeValue={rangeValue} />

        <div className="absolute bottom-0 right-0 block">
          <InputRange
            className="absolute bottom-0 -right-[103px] block h-[20px] w-[208px] -translate-y-[93px] -rotate-90"
            type="range"
            min="100"
            max="300"
            value={rangeValue}
            onChange={handleRangeChange}
          />
        </div>
      </div>
      <div className="flex space-x-10 xl:space-x-5 [@media(max-width:500px)]:space-x-0">
        <div className="md:w-1/2 [@media(max-width:500px)]:hidden">
          <PieChartIllustration className="h-auto w-[400px] max-w-full md:w-full" aria-hidden />
        </div>
        <div className="flex flex-col justify-between space-y-10 md:hidden">
          <NodesIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
          <PercentageIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
        </div>
        <Notifications className="hidden w-1/2 md:block [@media(max-width:500px)]:w-full" />
      </div>
    </div>
  );
};

export default Dashboard;
