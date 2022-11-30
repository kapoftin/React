import { useEffect, useState } from 'react'
import './slider.css'
import imageSliderOne from '../../img/korgiOne.jpg' 
import imageSliderTwo from '../../img/korgiTwo.jpg'

const SliderPage = () => {
  const [slide, setSlide] = useState(true);

  const [counter, setCounter] = useState(0);

  function changeCounter(i) {
    setCounter(counter => counter + 1);
  }

  useEffect(() => {
    console.log("effect")
    document.title = `Counter: ${counter}`
  }, [counter]);

  return(
    <div className='container'>
      <div className='slider'>
        <div className='slider-items'>
        <div class="ramka-1">
        <div className='slider-item'>
            <img className='slider-item-img' src={slide ? imageSliderOne : imageSliderTwo}/>
        </div>
        </div>
        <a class="wave-btn" onClick={() => changeCounter(1)}>
            <span class="wave-btn__text">Я меняю счетчик</span>
            <span class="wave-btn__waves"></span>
        </a>
        <a class="wave-btn" onClick={()=> setSlide(!slide)}>
            <span class="wave-btn__text">Я меняю слайд</span>
            <span class="wave-btn__waves"></span>
        </a>
        </div>
        <div className='slider-counter'>{counter}</div> 
      </div>
    </div>
  )
}

export default SliderPage;