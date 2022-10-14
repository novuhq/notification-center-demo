import { NovuProvider, PopoverNotificationCenter } from '@novu/notification-center';
import React, { useCallback } from 'react';

import BellIcon from 'icons/bell.inline.svg';

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
        notificationItemBeforeBrandColor: '#FFE14D',
      },
    },
    loaderColor: '#FFE14D',
  },
};

const Novu = () => {
  const onClick = useCallback((notification) => {
    window.location.href = notification.cta.data.url;
  }, []);

  return (
    <NovuProvider
      subscriberId={process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID}
    >
      <PopoverNotificationCenter colorScheme="dark" theme={theme} onNotificationClick={onClick}>
        {({ unseenCount }) => (
          <>
            <BellIcon className="w-6 cursor-pointer" aria-label="Notifications bell icon" />
            {unseenCount ? (
              <span
                className="absolute top-0 right-0 z-10 block h-3 w-3 rounded-full border border-white bg-purple"
                aria-label="Icon number of unread notifications"
              />
            ) : null}
          </>
        )}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default Novu;
