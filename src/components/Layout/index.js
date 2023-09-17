import React from 'react';
import { Outlet } from "react-router-dom";
import SideMenu from '../SideMenu';

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <section className='content'>
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
