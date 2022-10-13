import React, { useEffect } from 'react';

import 'styles/main.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    document.body.className = 'bg-black';
  });

  // eslint-disable-next-line react/jsx-filename-extension
  return <Component {...pageProps} />;
};

export default MyApp;
