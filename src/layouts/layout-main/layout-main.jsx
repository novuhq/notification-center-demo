import PropTypes from 'prop-types';
import React from 'react';

import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const LayoutMain = ({ children }) => (
  <>
    <SEO />
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  </>
);

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
