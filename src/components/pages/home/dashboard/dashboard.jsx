import clsx from 'clsx';
import React, { useState, useEffect, useCallback } from 'react';

import LoadingBar from 'components/shared/loading-bar';
import useLottie from 'hooks/use-lottie';

import graphAnimationData from './data/graph.json';
import NodesIllustration from './images/nodes-illustration.inline.svg';
import PercentageIllustration from './images/percentage-illustration.inline.svg';
import PieChartIllustration from './images/pie-chart-illustration.inline.svg';

// const createRangeArray = (start, end) => {
//   const length = end - start;
//   return Array.from({ length }, (_, i) => start + i);
// };

// const LOADING_RANGE = createRangeArray(20, 80);

const Dashboard = () => {
  const [rangeValue, setRangeValue] = useState(300);
  const [tickCount, setTickCount] = useState(0);
  const [currentAnimationFrameValue, setCurrentAnimationFrameValue] = useState(0);
  const [currentAnimationInPercent, setCurrentAnimationInPercent] = useState(0);

  // const isLoadingBarUpdate = useMemo(
  //   () => LOADING_RANGE.includes(currentAnimationInPercent),
  //   [currentAnimationInPercent]
  // );

  const { animationRef, animation } = useLottie({
    lottieOptions: { animationData: graphAnimationData, autoplay: true, loop: true },
    isInView: true,
  });

  const handleRangeChange = useCallback((e) => {
    setRangeValue(e.target.value);
  }, []);

  const sendMessage = useCallback(async () => {
    await fetch('/api/send-message', {
      method: 'POST',
      body: JSON.stringify({ uuid: localStorage.getItem('widget_user_uuid') }),
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTickCount((prevState) => prevState + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    window.animation = animation;
  }, [animation]);

  useEffect(() => {
    setCurrentAnimationFrameValue(animation.currentFrame);
  }, [animation.currentFrame, tickCount]);

  useEffect(() => {
    setCurrentAnimationInPercent(Math.round(currentAnimationFrameValue / 3));
  }, [currentAnimationFrameValue]);

  useEffect(() => {
    if (currentAnimationFrameValue >= rangeValue) {
      sendMessage();
    }
  }, [currentAnimationFrameValue, rangeValue, sendMessage]);

  return (
    <div className="safe-paddings space-y-10 pt-2 sm:space-y-5 sm:p-0">
      <ul className="flex space-x-10 sm:space-x-5">
        <li>
          <LoadingBar id="cpu" name="CPU" maxValue={currentAnimationInPercent} />
        </li>
        <li>
          <LoadingBar id="ram" name="RAM" maxValue={currentAnimationInPercent} />
        </li>
      </ul>
      <div className="relative">
        <div className={clsx('w-[830px] xl:max-w-[98%]')} ref={animationRef} />
        <label className="absolute bottom-0 -right-[98px] block w-52 -translate-y-[95px] -rotate-90 sm:bottom-1/2 sm:-right-24">
          <input
            className="styled-slider w-full"
            type="range"
            min="100"
            max="300"
            value={rangeValue}
            onChange={handleRangeChange}
          />
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
};

export default Dashboard;
