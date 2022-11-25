import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
import {NavLink, Link} from 'react-router-dom'

export default props => {
  return (
    <Menu>
      <Link className="menu-item" to="/about">About </Link>  
        <NavLink className="menu-item" to="/store">Store</NavLink>
    </Menu>
  );
};