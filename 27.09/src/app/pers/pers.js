import './pers.scss'
import { NavLink } from 'react-router-dom'
import Image1 from '../../img/sum.svg'


const Pers = () => {
  return(

    <div className='container'>
    <div className='block'>
        <img src={Image1} className='img'></img>
        <div className='word'>
            <div className='big Alive'><strong>Summer</strong> Smith</div>
            <div className='adin Alive'><strong>Gender:</strong> Female</div>
            <div className='adin Alive'><strong>Location:</strong> Earth Replacement Dimension</div>
            <div className='adin Alive'><strong>Alive</strong></div>
        </div>
    </div>
    </div>

    
  )
}

export default Pers;