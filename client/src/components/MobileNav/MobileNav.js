import React, { useState } from 'react'
import './mobilenav.css'
import { LuMenuSquare } from "react-icons/lu";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { Link } from 'react-scroll';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcReading, FcVideoProjector } from 'react-icons/fc';

const MobileNav = () => {
    const [openNav, setOpenNav] = useState(false);

    // handle open navbar
    const handleOpenNav = () => {
        setOpenNav(!openNav);
    }

    // handle menu-item click
    const handleMenuItemClick = () => {
        setOpenNav(false);
    }

    return (
        <>
            <div className='mobile-nav'>
                <div className='mobile-nav-header'>
                    {openNav ? (
                        <ImMenu4 size={30} className='mobile-nav-icon' onClick={handleOpenNav} />
                    ) : (
                        <ImMenu3 size={30} className='mobile-nav-icon' onClick={handleOpenNav} />
                    )}
                    <span className='mobile-nav-title'>My Portfolio App</span>
                </div>

                {openNav && (
                    <div className='mobile-nav-menu'>
                        <div className='nav-items'>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <Link
                                        to='home'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuItemClick}
                                    >
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className='nav-link'>
                                    <Link
                                        to='about'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuItemClick}
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className='nav-link'>
                                    <Link
                                        to='education'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuItemClick}
                                    >
                                        <FcReading />
                                        Education
                                    </Link>
                                </div>
                                <div className='nav-link'>
                                    <Link
                                        to='techstack'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuItemClick}
                                    >
                                        <FcBiotech />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className='nav-link'>
                                    <Link
                                        to='projects'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuItemClick}
                                    >
                                        <FcVideoProjector />
                                        Projects
                                    </Link>
                                </div>
                                <div className='nav-link'>
                                    <Link
                                        to='contact'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuItemClick}
                                    >
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default MobileNav
