import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const PieChart = ({ className }) => (
  <div
    className={clsx(
      'relative flex flex-col justify-between rounded-md border border-gray-3 p-5',
      className
    )}
  >
    <span className="block h-3.5 w-full max-w-[130px] rounded-[10px] bg-gray-3" />
    <div className="flex items-center justify-center py-11">
      <svg
        width="212"
        height="212"
        viewBox="0 0 212 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="73" y="149" width="67" height="14" rx="7" fill="#262626" />
        <circle cx="106" cy="106" r="99" stroke="#1A1A1A" strokeWidth="14" />
        <path
          d="M105.741 7C160.56 7 205 51.3238 205 106C205 160.676 160.56 205 105.741 205C89.2446 205 73.6883 200.986 60 193.885"
          stroke="url(#paint0_angular_65_752)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_angular_65_752"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(105.742 106) rotate(-90) scale(99.0002 99.2594)"
          >
            <stop stopColor="#808080" />
            <stop offset="0.695663" stopColor="#666666" />
            <stop offset="0.966909" stopColor="#4D4D4D" />
          </radialGradient>
        </defs>
      </svg>

      <h3 className="absolute text-[44px] text-white">68,3%</h3>
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
};

PieChart.defaultProps = {
  className: null,
};

export default PieChart;
