import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';
import React, { useCallback } from 'react';

const Novu = () => {
  const onClick = useCallback((notification) => {
    window.location.href = notification.cta.data.url;
  }, []);

  return (
    <NovuProvider
      subscriberId={process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID}
    >
      <PopoverNotificationCenter colorScheme="dark" onNotificationClick={onClick}>
        {({ unseenCount }) => (
          <NotificationBell unseenCount={unseenCount} aria-label="Notifications" />
        )}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default Novu;
