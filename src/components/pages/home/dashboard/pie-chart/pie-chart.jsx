import clsx from 'clsx';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const PieChart = ({ className, value }) => (
  <div
    className={clsx(
      'relative flex flex-col justify-between rounded-md border border-gray-3 p-5',
      className
    )}
  >
    <span className="block h-3.5 w-full max-w-[130px] rounded-[10px] bg-gray-3" />
    <div className="flex items-center justify-center py-11">
      <svg
        className="-rotate-90 transform"
        width="212"
        height="212"
        viewBox="0 0 212 212"
        fill="none"
      >
        <circle cx="106" cy="106" r="99" stroke="#1A1A1A" strokeWidth="14" />
        <motion.circle
          cx="106"
          cy="106"
          r="99"
          stroke="#808080"
          strokeWidth="14"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value / 100 }}
          transition={{ duration: 0.5, bounce: 0 }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <h3 className="text-[44px] text-white">{value}%</h3>
        <span className="absolute -bottom-5 block h-3.5 w-[67px] rounded-[10px] bg-gray-3" />
      </div>
    </div>

    <div className="flex space-x-5">
      {[...Array(3)].map((_, index) => (
        <span className="block h-3.5 w-full rounded-[10px] bg-gray-3" key={index} />
      ))}
    </div>
  </div>
);

PieChart.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
};

PieChart.defaultProps = {
  className: null,
};

export default PieChart;
