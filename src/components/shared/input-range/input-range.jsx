import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const InputRange = ({ className, ...otherProps }) => (
  <div
    className={clsx(
      'relative z-10 before:absolute before:top-1/2 before:-z-20 before:h-[6px] before:w-full before:-translate-y-1/2 before:rounded-full before:bg-gray-2',
      className
    )}
  >
    <div className="absolute -inset-6 hidden md:block" />
    <input
      className="input-range relative flex h-full w-full appearance-none items-center bg-transparent focus:outline-none"
      type="range"
      {...otherProps}
    />
  </div>
);

InputRange.propTypes = {
  className: PropTypes.string,
};

InputRange.defaultProps = {
  className: null,
};

export default InputRange;
