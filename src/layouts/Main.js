import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet
      titleTemplate="Thomas Andersen"
      defaultTitle="Thomas Andersen"
      defer={false}
    >
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <div id="main">{props.children}</div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  description: "Thomas Andersen's personal website.",
};

export default Main;
