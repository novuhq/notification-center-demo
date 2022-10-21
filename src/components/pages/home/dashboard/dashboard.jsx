import { transform } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';

import ImagePlaceholder from 'components/shared/image-placeholder';
import InputRange from 'components/shared/input-range';
import LoadingBar from 'components/shared/loading-bar';
import useLottie from 'hooks/use-lottie';
import useUserUuid from 'hooks/use-user-uuid';

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
  const userUuid = useUserUuid();

  const [rangeValue, setRangeValue] = useState(300);
  const [tickCount, setTickCount] = useState(0);
  const [currentAnimationFrameValue, setCurrentAnimationFrameValue] = useState(0);
  const [currentAnimationInPercent, setCurrentAnimationInPercent] = useState(0);

  const getPercentageRange = transform([100, 300], [0, 100]);

  // const isLoadingBarUpdate = useMemo(
  //   () => LOADING_RANGE.includes(currentAnimationInPercent),
  //   [currentAnimationInPercent]
  // );

  const { animationRef, animation } = useLottie({
    lottieOptions: {
      renderer: 'canvas',
      animationData: graphAnimationData,
      autoplay: true,
      loop: true,
    },
    isInView: true,
  });

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
    <div className="safe-paddings flex flex-col justify-between space-y-10 overflow-x-hidden pr-2.5 xl:space-y-5 sm:justify-start">
      <ul className="flex space-x-10 xl:space-x-5 sm:flex-wrap sm:space-x-0 sm:space-y-5">
        <li>
          <LoadingBar id="cpu" name="CPU" maxValue={currentAnimationInPercent} />
        </li>
        <li>
          <LoadingBar id="ram" name="RAM" maxValue={currentAnimationInPercent} />
        </li>
      </ul>
      <div className="relative flex lg:min-h-[250px]">
        <div className="relative">
          <ImagePlaceholder width={820} height={260} />
          <div
            className="absolute inset-0 -z-20 pr-3 lg:left-auto lg:h-[250px] lg:w-[810px]"
            ref={animationRef}
          />

          <div className="absolute bottom-0 left-0 h-full max-h-[186px] w-full" aria-hidden>
            <div
              className="absolute bottom-0 left-0 h-px w-full border-t border-dashed border-green"
              style={{
                bottom: `calc(${getPercentageRange(rangeValue)}% - 8px)`,
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 block">
          <InputRange
            className="absolute bottom-0 -right-[94px] block w-[192px] -translate-y-[85px] -rotate-90"
            type="range"
            min="100"
            max="300"
            value={rangeValue}
            onChange={handleRangeChange}
          />
        </div>
      </div>
      <div className="flex space-x-10 xl:space-x-5 md:space-x-0 xs:hidden">
        <div>
          <PieChartIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
        </div>
        <div className="flex flex-col justify-between space-y-10 md:hidden">
          <NodesIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
          <PercentageIllustration className="h-auto w-[400px] max-w-full" aria-hidden />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
