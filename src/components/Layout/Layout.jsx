import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className={css.contentWrap}>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
