import './header.scss';
import Img1 from '../img/lupa.svg'
import Img2 from '../img/man.svg'
import Img3 from '../img/kong.svg'


const Header = () => {
    return(
      <div className='global'>

      <div className='white'></div>

      <div className='div_container'>
        <div className='div'>
            <div className='div_search s'> <img src={Img1} alt='#' className='div_img'></img><input type="text" class="searchTerm" placeholder="Search"></input></div>
            <div className='div_empty s'></div>
            <div className='div_notif s'> <img src={Img3} alt='#'></img> </div>
            <div className='div_man s'> <img src={Img2} alt='#'></img> </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Header;