import { motion, transform } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import ImagePlaceholder from 'components/shared/image-placeholder';
import useLottie from 'hooks/use-lottie';

import lottieData from './data/chart-lottie-data.json';

const Chart = ({ rangeValue }) => {
  const getPercentageRange = transform([100, 300], [0, 100]);

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
    <div className="relative lg:w-full">
      <ImagePlaceholder width={820} height={260} />
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="absolute inset-0 -z-20 xl:pr-4" ref={animationRef} />
      </div>
      <div className="absolute bottom-0 left-0 h-full max-h-[186px] w-full" aria-hidden>
        <div
          className="absolute bottom-0 left-[3px] h-px w-full border-t border-dashed border-green after:pointer-events-none after:absolute after:right-0 after:top-1/2 after:z-20 after:h-10 after:w-10 after:-translate-y-1/2 after:translate-x-[95%] after:rounded-full after:bg-green after:blur-lg xl:after:translate-x-[45%]"
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
  );
};

Chart.propTypes = {
  rangeValue: PropTypes.number.isRequired,
};

export default Chart;
