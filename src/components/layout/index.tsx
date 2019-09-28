import React from 'react';

interface props {
  children: React.ReactNode
}

const Layout = ({ children }: props) => <main role="main">{children}</main>;

export default Layout;
