import PropTypes from 'prop-types';
import React from 'react';

import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const LayoutMain = ({ children }) => (
  <>
    <SEO />
    <Header />
    <main>{children}</main>
  </>
);

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
