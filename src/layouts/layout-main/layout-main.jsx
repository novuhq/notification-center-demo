import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const LayoutMain = ({ children }) => {
  useEffect(() => {
    let currentUserUuid = localStorage.getItem('widget_user_uuid');

    if (currentUserUuid) return;

    currentUserUuid = uuidv4();
    localStorage.removeItem('widget_user_uuid');
    localStorage.setItem('widget_user_uuid', currentUserUuid);
  }, []);

  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
    </>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
