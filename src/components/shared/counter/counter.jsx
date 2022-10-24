import { animate } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const Counter = ({ from, to }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: from >= 0 ? 0.5 : 0,
      delay: 0.5,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span className="inline-block min-w-[1em] align-baseline" ref={nodeRef} />;
};

Counter.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  from: -1,
};

export default Counter;
