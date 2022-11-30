import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'

import './stroka.scss'
import Image1 from '../img/pngwing1.svg'
import Image2 from '../img/pngwing2.svg'
import Image3 from '../img/pngwing3.jpg'

const Example = () => {

}

const Stroika = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  return(
    <div className='container'>
      {isBigScreen &&               <div className='black'>
            <img className='div_img flex' src={Image1}></img>
            <div className='div_one flex'>Rick and Morty!<br></br> portal!</div>
            <div className='div_empty flex'></div>
            <img className='div_img2 flex' src={Image2}></img>
            </div>}
            {isTabletOrMobile &&               <div className='black2'>
            <div className='div_one flex'>Rick and Morty!<br></br> portal!</div>
            <div className='div_empty flex'></div>
            <img className='div_img flex' src={Image2}></img>
            </div>}
    </div>
  )
}

export default Stroika;