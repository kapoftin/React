import './header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
return(
    <header className="header">
            <div className="header__container">
                <Link to="/" class="header__logo">Я просто шапка</Link>
                <div className="header__menu menu">
                    <div className="menu__icon">
                        <span></span>
                    </div>
                    <nav className="menu__body">
                        <ul className="menu__list">
                        <li><NavLink exact activeClassName='menu__link-active' className='menu__link' to="/">Slider</NavLink></li>
                        <li><NavLink exact activeClassName='menu__link-active' className='menu__link' to="/about" >About</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
)
}

export default Header;