import PropTypes from 'prop-types';
import React from 'react';

import Counter from 'components/shared/counter';

import BottomIllustration from './images/bottom-oval-illustration.inline.svg';
import PieChartIllustration from './images/pie-chart-illustration.inline.svg';
import TopIllustration from './images/top-oval-illustration.inline.svg';

const PieChart = ({ value }) => (
  <div className="relative flex max-w-full flex-col flex-wrap justify-center rounded-md border border-solid border-gray-3 bg-black p-5 md:w-full">
    <TopIllustration className="h-auto w-[130px] max-w-full" aria-hidden />
    <h3 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[44px] font-light leading-snug text-white lg:text-[38px]">
      <Counter from={0} to={value} />
      <span>%</span>
    </h3>
    <PieChartIllustration className="my-8 mx-auto h-auto w-[215px] max-w-full" aria-hidden />
    <BottomIllustration className="h-auto w-full max-w-full" aria-hidden />
  </div>
);

PieChart.propTypes = {
  value: PropTypes.number.isRequired,
};

export default PieChart;
