import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

export const BUTTON_STATES = {
  DEFAULT: 'default',
  LOADING: 'loading',
};

const styles = {
  base: 'inline-flex items-center justify-center text-center transition-colors duration-200 leading-none outline-none appearance-none',

  size: {},

  theme: {
    rounded: 'p-3 rounded-full border border-gray-4 sm:p-2',
    'pink-to-yellow-gradient':
      'text-black bg-transparent bg-pink-yellow-gradient hover:bg-white hover:bg-none transition-[color,background-image]',
  },
};

const Button = ({ className, to, size, theme, state, children, ...otherProps }) => {
  const Tag = to ? Link : 'button';

  let content = null;

  switch (state) {
    case BUTTON_STATES.LOADING:
      content = (
        <>
          <div className="absolute h-5 w-5 animate-spin rounded-full border border-b border-transparent border-b-black" />
          <span className="opacity-0">{children}</span>
        </>
      );
      break;
    case BUTTON_STATES.DEFAULT:
    default:
      content = children;
  }

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className, {
        'pointer-events-none': state === BUTTON_STATES.LOADING,
      })}
      to={to}
      {...otherProps}
    >
      {content}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  state: PropTypes.oneOf(Object.values(BUTTON_STATES)),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: null,
  state: BUTTON_STATES.DEFAULT,
};

export default Button;
