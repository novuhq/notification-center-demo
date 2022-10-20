import { NovuProvider } from '@novu/notification-center';
import PropTypes from 'prop-types';
import React from 'react';

import Header from 'components/shared/header';
import SEO from 'components/shared/seo';
import useUserUuid from 'hooks/use-user-uuid';

const LayoutMain = ({ children }) => {
  const userUuid = useUserUuid();

  return (
    <NovuProvider
      subscriberId={userUuid}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID}
    >
      <SEO />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    </NovuProvider>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
