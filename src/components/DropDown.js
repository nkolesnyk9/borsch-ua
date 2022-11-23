import './DropDown.css'
import React from 'react';
import { Link} from "react-router-dom";

import {AiFillCaretDown} from "react-icons/ai";



const DropMenu = () => {
  
    return (
      <Dropdown
        trigger={<button> Categories <AiFillCaretDown /></button>}
        menu={[
          <Link className='drop-links' to="/store/accessories"> Accessories </Link>,
          <Link className='drop-links' to="/store/apparel"> Apparel </Link>,
          <Link className='drop-links' to="/store/local"> Local </Link>,
        ]}
      />
    );
  };
  
  const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropdown">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

  export default DropMenu