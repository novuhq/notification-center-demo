import { motion, transform } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';

import ImagePlaceholder from 'components/shared/image-placeholder';
import InputRange from 'components/shared/input-range';
import LoadingBar from 'components/shared/loading-bar';
import useLottie from 'hooks/use-lottie';
import useUserUuid from 'hooks/use-user-uuid';

import Notifications from '../notifications/notifications';

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

  const [rangeValue, setRangeValue] = useState(250);
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
    <div className="safe-paddings flex flex-col justify-between space-y-10 xl:space-y-5 xl:pr-2.5 sm:justify-start">
      <ul className="flex space-x-10 xl:space-x-5">
        <li>
          <LoadingBar id="cpu" name="CPU" maxValue={currentAnimationInPercent} />
        </li>
        <li>
          <LoadingBar id="ram" name="RAM" maxValue={currentAnimationInPercent} />
        </li>
      </ul>
      <div className="relative flex lg:min-h-[250px] lg:max-w-[790px]">
        <div className="relative">
          <ImagePlaceholder width={820} height={260} />
          <div className="absolute top-0 left-0 h-full w-full lg:overflow-x-hidden">
            <div
              className="absolute inset-0 -z-20 xl:pr-4 lg:left-auto lg:h-[250px] lg:w-[810px]"
              ref={animationRef}
            />
          </div>
          <div className="absolute bottom-0 left-0 h-full max-h-[186px] w-full" aria-hidden>
            <div
              className="absolute bottom-0 left-[3px] h-px w-full border-t border-dashed border-green after:absolute after:right-0 after:top-1/2 after:h-10 after:w-10 after:-translate-y-1/2 after:translate-x-[95%] after:rounded-full after:bg-green after:blur-lg xl:after:translate-x-1/2"
              style={{
                bottom: `calc(${getPercentageRange(rangeValue)}% + 9px)`,
              }}
            />
            <motion.div
              className="pointer-events-none absolute bottom-0 right-0 z-50 translate-x-28 rounded bg-green px-2 py-1 text-xs font-medium shadow-lg shadow-black before:absolute before:-left-2 before:-z-20 before:border-[7px_12.1px_7px_0] before:border-solid before:border-[transparent_#00E599_transparent_transparent] xl:translate-x-24 md:-translate-x-8 md:before:-right-2 md:before:left-auto md:before:rotate-180"
              style={{
                bottom: `calc(${getPercentageRange(rangeValue)}% - 3px)`,
              }}
              animate={{ opacity: 0, transition: { delay: 5, duration: 0.5 } }}
            >
              Adjust it!
            </motion.div>
          </div>
        </div>

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
