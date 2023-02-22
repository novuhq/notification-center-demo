import { NovuProvider } from '@novu/notification-center';
import React from 'react';

import 'styles/main.css';
import useUserUuid from 'hooks/use-user-uuid';
// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  const userUuid = useUserUuid();

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <NovuProvider
      subscriberId={userUuid}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID}
      backendUrl={process.env.NEXT_PUBLIC_API_URL}
      socketUrl={process.env.NEXT_PUBLIC_WS_URL}
    >
      <Component {...pageProps} />
    </NovuProvider>
  );
};

export default MyApp;
