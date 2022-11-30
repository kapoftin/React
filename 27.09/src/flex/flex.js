import './flex.scss'
import { NavLink } from 'react-router-dom'
import Pers from '../app/pers/pers'
import Image1 from '../img/image1.svg'
import Image2 from '../img/image2.svg'


const Flex = () => {
  return(

    <div className='container'>
    <div className='first'>
    <NavLink to="/pers"><div className='morty'><div className='color'><img src={Image1}></img><div>Morty Smith</div></div></div></NavLink>
    <div className='morty'><div className='color'><img src={Image1}></img><div>Morty Smith</div></div></div>
    <div className='morty'><div className='color'><img src={Image1}></img><div>Morty Smith</div></div></div>
    </div>

    <div className='first'>
    <div className='morty'><div className='color'><img src={Image2}></img><div>Morty Smith</div></div></div>
    <div className='morty'><div className='color'><img src={Image2}></img><div>Morty Smith</div></div></div>
    <div className='morty'><div className='color'><img src={Image2}></img><div>Morty Smith</div></div></div>
    </div>

    <div className='first flex'>
    <div className='morty'><div className='color'><img src={Image1}></img><div>Morty Smith</div></div></div>
    <div className='morty'><div className='color'><img src={Image1}></img><div>Morty Smith</div></div></div>
    <div className='morty'><div className='color'><img src={Image1}></img><div>Morty Smith</div></div></div>
    </div>
    </div>

    
  )
}

export default Flex;