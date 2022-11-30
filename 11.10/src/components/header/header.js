import './header.scss';
import logo from '../../resources/image/logo.svg';
import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react';
import Im2 from '../img/three.svg'

const Header = () => {

    const [isNavVisible, setIsNavVisible] = useState(true);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1241px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1240px)' })
    return (


        <div className='container'>
            
        {isNavVisible && (
            <nav className='nav'>
            <ul>
                <li><a href="#">Главная</a></li>
    <li><a href="#">О нас</a></li>
    <li><a href="#">Контакты</a></li>
            </ul>                        
            </nav>
        )}

            {isBigScreen && <div className='div__header'>
                <img src={logo} className='div__img'></img>
                <div className='div__p1'><a href='#'>Product</a></div>
                <div className='div__p2'><a href='#'>Use cases</a></div>
                <div className='div__p3'><a href='#'>Developers</a></div>
                <div className='div__p4'><a href='#'>Pricing</a></div>
                <div className='div__p5'><a href='#'>About</a></div>
                <div className='div__p6'><a href='#'>Login</a></div>
                <div className='Button__btn'><a href='#' className='Button__txt'>Get API Keys</a></div>
            </div>}
            {isTabletOrMobile && <div className='div__header'>
                <img src={logo} className='div__img flex'></img>                
                <img onClick={toggleNav} src={Im2} className='div_img2 flex'></img>
            </div>}
        </div>
    )
}

export default Header;