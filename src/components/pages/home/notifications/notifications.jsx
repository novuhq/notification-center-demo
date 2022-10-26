import { NotificationCenter } from '@novu/notification-center';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
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
  <footer className="row-start-3 flex items-center justify-center gap-2 py-3 text-center text-[10px] leading-none text-gray-5">
    Powered by{' '}
    <a href="https://novu.co/" target="_blank" rel="noreferrer">
      <img src="/static/images/logo-light.svg" alt="Novu" className="inline-block h-4 w-16" />
    </a>
  </footer>
);

const Notifications = ({ className, ...otherProps }) => {
  const onNotificationClick = useCallback((notification) => {
    window.location.href = notification.cta.data.url;
  }, []);

  return (
    <div className={clsx('notification-center-wrapper', className)}>
      <NotificationCenter
        offset={20}
        colorScheme="dark"
        theme={theme}
        footer={footer}
        showUserPreferences={false}
        onNotificationClick={onNotificationClick}
        {...otherProps}
      />
    </div>
  );
};

Notifications.propTypes = {
  className: PropTypes.string,
};

Notifications.defaultProps = {
  className: null,
};

export default dynamic(() => Promise.resolve(Notifications), {
  ssr: false,
});
