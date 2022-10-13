import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';
import { useRouter } from 'next/router';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import DarkThemeIcon from 'icons/dark-theme.inline.svg';
import Logo from 'icons/logo.inline.svg';
import MagnifierIcon from 'icons/magnifier.inline.svg';
import NavigationIllustration from 'icons/nav-illustration.inline.svg';

const Header = () => {
  const router = useRouter();

  const onNotificationClick = (notification) => {
    router.push(notification.cta.data.url);
  };

  return (
    <header className="safe-paddings">
      <div className="container flex items-center py-8">
        <Link className="mx-3" to="/">
          <span className="sr-only">Acme corporation logo</span>
          <Logo className="w-[150px]" />
        </Link>
        <NavigationIllustration className="ml-8 max-w-[510px]" />
        <div className="ml-auto flex space-x-5">
          <Button className="appearance-none sm:w-full" theme="rounded" type="button">
            <span className="sr-only">Search icon</span>
            <MagnifierIcon className="w-5" aria-hidden />
          </Button>
          <Button className="appearance-none sm:w-full" theme="rounded" type="button">
            <span className="sr-only">Dark theme icon</span>
            <DarkThemeIcon className="w-5" aria-hidden />
          </Button>
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-grey-4">
            <NovuProvider
              subscriberId="6346b3da27d50dea0b972610"
              applicationIdentifier="z57-JLBZmAQo"
            >
              <PopoverNotificationCenter
                colorScheme="light"
                onNotificationClick={onNotificationClick}
              >
                {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
              </PopoverNotificationCenter>
            </NovuProvider>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
