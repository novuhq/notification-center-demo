import { NovuProvider } from '@novu/notification-center';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const LayoutMain = ({ children }) => {
  const [userUuid, setUserUuid] = useState(null); // process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID

  useEffect(() => {
    let currentUserUuid = localStorage.getItem('widget_user_uuid');

    if (currentUserUuid) {
      return setUserUuid(currentUserUuid);
    }

    currentUserUuid = uuidv4();
    localStorage.removeItem('widget_user_uuid');
    localStorage.setItem('widget_user_uuid', currentUserUuid);
    setUserUuid(currentUserUuid);
  }, []);

  return (
    <NovuProvider
      subscriberId={userUuid}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID}
    >
      <SEO />
      <Header />
      <main>{children}</main>
    </NovuProvider>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
