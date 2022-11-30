import Button from '../button/button';
import './hom_page.scss'
import { useMediaQuery } from 'react-responsive'
import Image1 from '../../resources/image/haltura.svg'
import phone from '../../resources/image/phone.svg';
import code from '../../resources/image/code.svg';
import offset from '../../resources/image/offset.svg';
import table from '../../resources/image/table.svg';
import looker from '../../resources/image/looker.svg';
import sustainability from '../../resources/image/sustainability.svg';
import tc from '../../resources/image/TC.svg';
import shopify from '../../resources/image/shopify.svg';
import big from '../../resources/image/big.svg';

const Buton = () => {
    return (<div className='Buton__nopp'>
        <a className='Buton__nopp__txt' href='#'>Let's Talk</a>
    </div>
    )
}

const Buttn = () => {
    return (<div className='Buttn__knopp'>
        <a className='Buttn__knopp__txt' href='#'>Get Started</a>
    </div>
    )
}


const Hom_page = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const isBigScreen = useMediaQuery({ query: '(min-width: 1241px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1240px)' })

    return (
        <div className='container'>
            {isBigScreen &&
                <div className='kostya'>
                    <div className='app__mutr'>
                        <div className='app__f1'>
                            <div className='app__big__txt'>Helping the World Go Carbon Neutral</div>
                            <div className='app__small__txt'>Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.</div>
                            <div className="app__btns">
                                <Buttn />
                                <Buton />
                            </div>
                        </div>
                        <div className='app__f2 first'>
                            <img src={Image1} className='div_haltura'></img>
                        </div>
                    </div>
                    <div className='app__banner'>
                        <div className='app__slider'>
                            <img src={looker}></img>
                            <img src={sustainability}></img>
                            <img src={tc}></img>
                            <img src={shopify}></img>
                            <img src={big}></img>
                        </div>
                    </div>
                </div>
            }

            {isTabletOrMobile &&
                <div className='app__mutr'>
                    <div className='app__f1 first'>
                        <div className='app__big__txt'>Helping the World Go Carbon Neutral</div>
                        <div className='app__small__txt'>Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.</div>
                        <div className='app__f2 first'>
                            <img src={Image1} className='div_haltura'></img>
                        </div>
                        <div className="app__bkr">
                            <Buttn />
                            <Buton />
                        </div>
                    </div>
                    {/* <div className='app__banner'>
                        <div className='app__slider'>
                            <img src={looker}></img>
                            <img src={sustainability}></img>
                            <img src={tc}></img>
                            <img src={shopify}></img>
                            <img src={big}></img>
                        </div>
                    </div> */}
                </div>}
        </div>
    )
}

export default Hom_page;