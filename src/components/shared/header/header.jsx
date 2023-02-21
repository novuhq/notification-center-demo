import { useNotifications } from '@novu/notification-center';
import React, { useState, useCallback } from 'react';

import Button, { BUTTON_STATES } from 'components/shared/button';
import Link from 'components/shared/link';
import useUserUuid from 'hooks/use-user-uuid';
import BellIcon from 'icons/bell.inline.svg';
import LightThemeIcon from 'icons/light-theme.inline.svg';
import Logo from 'icons/logo.inline.svg';
import NavigationIllustration from 'icons/nav-illustration.inline.svg';

const Header = () => {
  const [buttonState, setButtonState] = useState(BUTTON_STATES.DEFAULT);
  const userUuid = useUserUuid();
  const { notifications } = useNotifications();
  const unseenCount = notifications?.filter((message) => !message.seen).length;

  const sendMessage = useCallback(async () => {
    setButtonState(BUTTON_STATES.LOADING);

    await fetch('/api/send-message', {
      method: 'POST',
      body: JSON.stringify({ uuid: userUuid }),
    })
      .then(() => setButtonState(BUTTON_STATES.DEFAULT))
      .catch(() => setButtonState(BUTTON_STATES.DEFAULT));
  }, [userUuid]);

  return (
    <header className="safe-paddings">
      <div className="container flex items-center py-8">
        <Link className="mx-3 sm:ml-0" to="/">
          <span className="sr-only">Acme corporation logo</span>
          <Logo className="w-[150px] sm:w-[120px]" />
        </Link>
        <NavigationIllustration className="mx-8 max-w-[510px] lg:max-w-[300px] md:hidden" />
        <div className="ml-auto flex items-center space-x-5 sm:space-x-3">
          <Button
            className="h-10 w-full cursor-pointer rounded px-6 text-sm font-medium uppercase sm:px-3.5"
            theme="pink-to-yellow-gradient"
            type="button"
            state={buttonState}
            onClick={sendMessage}
          >
            Send a Test notification
          </Button>

          <Button className="cursor-default border-gray-4 sm:hidden" theme="rounded" type="button">
            <span className="sr-only">Light theme icon</span>
            <LightThemeIcon className="w-5" aria-hidden />
          </Button>
          <div className="relative flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-4 bg-white sm:hidden sm:h-[38px] sm:w-[38px]">
            <BellIcon className="w-6" aria-label="Notifications bell icon" />
            {unseenCount ? (
              <span
                className="absolute top-2 right-2 z-10 block h-3 w-3 rounded-full border border-white bg-purple"
                aria-label="Icon number of unread notifications"
              />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
