import styled from 'styled-components'
import './header.scss'
import { NavLink } from 'react-router-dom'
import Image1 from '../img/image1.svg'


const Header = () => {
  return(
      <div className='img_sun'>    
  <div className='container'>
    <div className='portals'>
      <NavLink to="/"><div className='div_one flex'>Rick and Morty portal</div></NavLink>
      <div className='div_empty flex'></div>
      <NavLink to="/"><div className='div_two flex'>Characters</div></NavLink>
      <NavLink to="/"><div className='div_three flex'>Location</div></NavLink>
      <NavLink to="/"><div className='div_four flex'>Episode</div></NavLink>
    </div>
  </div>
  </div>
  )
}

export default Header;