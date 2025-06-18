import React, { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Navmenu from './Navmenu';

const MainHeader = () => {

    let [menuOpen, setMenuOpen] = useState(false);

    let toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


    useEffect(() => {
        const handleScroll = () => {
            let mainHeader = document.querySelector('.main_header');
            let navSec = document.querySelector('.nav_sec');
            if (window.scrollY > 100) {
                mainHeader?.classList.add('top_scroll');
                navSec?.classList.add('top_scroll');
            } else {
                mainHeader?.classList.remove('top_scroll');
                navSec?.classList.remove('top_scroll');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return <header>
        <div className="topbar text-center text_blue bg-white py-2">
            <p className="cmn_para_sm m-0 fw-medium">Free Shipping on All Your Purchase!</p>
        </div>
        <div className="main_header w-100 bg_blue">
            <div className="container">
                <div className="header_wrap d-flex justify-content-between align-items-center">
                    <div className="icon_sec">
                        <ul className="d-flex align-items-center justify-content-between ms-1">
                            <li><Link to="/Cart"
                                className="cart_icon position-relative d-flex align-items-center text-white"><img
                                    src="/images/cart_icon.svg" alt="" className="me-2" />Cart<span id="cart_quantity"
                                        className="number_count text_blue bg-white rounded-circle d-flex align-items-center justify-content-center position-absolute">0</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="logo_sec">
                        <Link to="/"><img src="/images/brand_logo.svg" alt="" /></Link>
                    </div>
                    <div className="contact_icon d-none d-md-block">
                        <ul className="d-flex align-items-center">
                            <li><a href="tel:9874254125"><img src="/images/email_icon.svg" alt="" /></a></li>
                            <li className="ms-3"><a href="mailto:support@tymorawatches.co.in"><img src="/images/call_icon.svg"
                                alt="" /></a></li>
                        </ul>
                    </div>
                    <div className={`hamburger_icon ${menuOpen ? 'open' : ''} text-white justify-content-around align-items-center flex-column`} id="for-nav" onClick={toggleMenu}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </div>
        </div>
        <Navmenu menuOpen={menuOpen}/>
    </header>
};
export default MainHeader;