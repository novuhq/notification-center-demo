import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const ProgressWithPercentage = ({ className, value1, value2 }) => (
  <div
    className={clsx(
      'relative flex rounded-md border border-solid border-gray-3 bg-black p-5',
      className
    )}
  >
    <ul className="flex w-full">
      <li className="relative w-1/2 border-r border-r-gray-3 p-4 lg:p-2">
        <h3 className="relative text-[36px] font-light leading-none text-white before:absolute before:inset-y-0 before:-left-3 before:m-auto before:h-1.5 before:w-1.5 before:rounded before:bg-gray-3 lg:text-[26px]">
          {value1}%
        </h3>
        <div className="mt-5 space-y-2">
          <span className="block h-1.5 w-4/6 rounded-[10px] bg-gray-3" />
          <span className="relative block h-1.5 w-5/6 rounded-[10px] bg-gray-2 before:absolute before:left-0 before:h-full before:w-1/6 before:rounded before:bg-gray-6" />
        </div>
      </li>
      <li className="w-1/2 p-4 pl-10 lg:p-2 lg:pl-6">
        <h3 className="relative text-[36px] font-light leading-none text-white before:absolute before:inset-y-0 before:-left-3 before:m-auto before:h-1.5 before:w-1.5 before:rounded before:bg-gray-3 lg:text-[26px]">
          {value2}%
        </h3>
        <div className="mt-5 space-y-2">
          <span className="block h-1.5 w-5/6 rounded-[10px] bg-gray-3" />
          <span className="relative block h-1.5 w-full rounded-[10px] bg-gray-2 before:absolute before:left-0 before:h-full before:w-4/6 before:rounded before:bg-gray-6" />
        </div>
      </li>
    </ul>
  </div>
);

ProgressWithPercentage.propTypes = {
  className: PropTypes.string,
  value1: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
};

ProgressWithPercentage.defaultProps = {
  className: null,
};

export default ProgressWithPercentage;
