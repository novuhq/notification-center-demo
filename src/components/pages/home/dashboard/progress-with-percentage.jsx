import PropTypes from 'prop-types';
import React from 'react';

import Counter from 'components/shared/counter';

import ProgressIllustration1 from './images/progress-lines-1.inline.svg';
import ProgressIllustration2 from './images/progress-lines-2.inline.svg';

const ProgressWithPercentage = ({ value1, value2 }) => (
  <div className="relative flex rounded-md border border-solid border-gray-3 bg-black p-5">
    <ul className="flex w-full">
      <li className="relative w-1/2 border-r border-r-gray-3 p-4 lg:p-2">
        <h3 className="relative text-[36px] font-light leading-none text-white before:absolute before:inset-y-0 before:-left-3 before:m-auto before:h-1.5 before:w-1.5 before:rounded before:bg-gray-3 lg:text-[26px]">
          <Counter from={0} to={value1} />
          <span>%</span>
        </h3>
        <ProgressIllustration1 className="mt-5 h-auto w-[120px] max-w-full" aria-hidden />
      </li>
      <li className="w-1/2 p-4 pl-10 lg:p-2 lg:pl-6">
        <h3 className="relative text-[36px] font-light leading-none text-white before:absolute before:inset-y-0 before:-left-3 before:m-auto before:h-1.5 before:w-1.5 before:rounded before:bg-gray-3 lg:text-[26px]">
          <Counter from={0} to={value2} />
          <span>%</span>
        </h3>
        <ProgressIllustration2 className="mt-5 h-auto w-[120px] max-w-full" aria-hidden />
      </li>
    </ul>
  </div>
);

ProgressWithPercentage.propTypes = {
  value1: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
};

export default ProgressWithPercentage;
