import React, { useEffect } from 'react';

import ImagePlaceholder from 'components/shared/image-placeholder';
import useLottie from 'hooks/use-lottie';

import lottieData from './data/chart-lottie-data.json';

const Chart = () => {
  const { animationRef, animation } = useLottie({
    lottieOptions: {
      renderer: 'canvas',
      animationData: lottieData,
      autoplay: true,
      loop: true,
    },
    isInView: true,
  });

  useEffect(() => {
    window.lottieAnimation = animation;
  }, [animation]);

  return (
    <div className="relative w-full">
      <ImagePlaceholder width={840} height={260} />
      <div className="lg:scrollbar-hidden absolute top-0 left-0 h-full w-full lg:overflow-x-hidden lg:rounded-md lg:border-l lg:border-l-gray-3">
        <div className="absolute inset-0 -z-20 lg:w-full" ref={animationRef} />
      </div>
    </div>
  );
};

export default Chart;
