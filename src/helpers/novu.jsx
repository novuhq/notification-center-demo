import { NovuProvider, NotificationCenter } from '@novu/notification-center';
import dynamic from 'next/dynamic';
import React, { useCallback } from 'react';

const theme = {
  dark: {
    layout: {
      background: '#1A1A1A',
    },
    header: {
      badgeColor: '#FFE14D',
      badgeTextColor: '#000',
    },
    notificationItem: {
      unseen: {
        background: '#262626',
        timeMarkFontColor: '#999',
        notificationItemBeforeBrandColor: '#FFE14D',
      },
      seen: {
        background: 'transparent',
        timeMarkFontColor: '#999',
      },
    },
    popover: {
      arrowColor: '#1A1A1A',
    },
    loaderColor: '#FFE14D',
  },
};

const footer = () => (
  <footer className="row-start-3 py-3 text-center text-xs text-grey-5">
    Powered by{' '}
    <a className="text-white" href="https://novu.co/" target="_blank" rel="noreferrer">
      Novu
    </a>
  </footer>
);

const Novu = () => {
  const currentUserUuid = localStorage.getItem('widget_user_uuid');
  const onNotificationClick = useCallback((notification) => {
    window.location.href = notification.cta.data.url;
  }, []);

  return (
    <NovuProvider
      subscriberId={currentUserUuid || process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID}
    >
      <NotificationCenter
        offset={20}
        colorScheme="dark"
        theme={theme}
        footer={footer}
        onNotificationClick={onNotificationClick}
      />
    </NovuProvider>
  );
};

export default dynamic(() => Promise.resolve(Novu), {
  ssr: false,
});
