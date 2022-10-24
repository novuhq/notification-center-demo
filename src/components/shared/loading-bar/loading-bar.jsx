import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import Counter from '../counter';

const LoadingBar = ({ id, name, maxValue }) => (
  <>
    <h2 className="text-[18px] font-medium leading-snug text-white">
      {`${name} `}
      <span className="text-gray-6">
        <Counter to={maxValue} />
        <span>%</span>
      </span>
    </h2>
    <svg
      className="mt-2 h-auto w-[400px] xl:max-w-full"
      width="400"
      height="24"
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={id}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="400"
        height="24"
      >
        <rect width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="6" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="12" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="18" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="24" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="30" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="36" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="42" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="48" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="54" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="60" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="66" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="72" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="78" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="84" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="90" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="96" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="102" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="108" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="114" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="120" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="126" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="132" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="138" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="144" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="150" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="156" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="162" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="168" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="174" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="180" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="186" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="192" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="198" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="204" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="210" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="216" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="222" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="228" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="234" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="240" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="246" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="252" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="258" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="264" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="270" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="276" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="282" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="288" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="294" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="300" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="306" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="312" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="318" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="324" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="330" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="336" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="342" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="348" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="354" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="360" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="366" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="372" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="378" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="384" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="390" width="4" height="24" rx="2" fill="#4D4D4D" />
        <rect x="396" width="4" height="24" rx="2" fill="#4D4D4D" />
      </mask>
      <g mask={`url(#${id})`}>
        <motion.path
          fill="#1A1A1A"
          initial={{ d: 'M0 0h0v24H0z' }}
          animate={{ d: 'M0 0h400v24H0z', transition: { duration: 0.2 } }}
        />
        <motion.path
          fill={`url(#${`${id}-2`})`}
          initial={{ d: 'M0 0h0v24H0z' }}
          animate={{
            d: `M0 0h${`${(400 * maxValue) / 100}`}v24H0z`,
            transition: { duration: 1 },
          }}
        />
      </g>
      <defs>
        <linearGradient id={`${id}-2`} x1="0" y1="4" x2="400" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset=".211" stopColor="gray" />
          <stop offset=".693" stopColor="#666" />
          <stop offset=".926" stopColor="#4D4D4D" />
        </linearGradient>
      </defs>
    </svg>
  </>
);

LoadingBar.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default LoadingBar;
