import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './layout.css';
import Menus from '../menus/Menus';

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  // change toggle of the sidebar
  const handleSidebarToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle ? 'sidebar-toggle' : 'sidebar'}>
          <div className='sidebar-toggle-icons'>
            <p onClick={handleSidebarToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>

        <div className='container'>
          <Home />
        </div>
      </div>
    </>
  )
}

export default Layout
