import './map.scss'
import Image1 from '../img/Rectangle.svg'
import { useMediaQuery } from 'react-responsive'
import shopping_cart from '../../resources/image/shoping_car.svg';
import aircraft from '../../resources/image/plane.svg';
import machine from '../../resources/image/machine.svg';
import mone from '../../resources/image/money.svg';
import laptop from '../../resources/image/notebook.svg';
import factory from '../../resources/image/factory.svg';
import docks from '../../resources/image/docks.svg';

const Talk = () => {
    return (<div className='Talk__talk'>
        <a className='Talk__talk__txt' href='#'>Let's Talk</a>
    </div>
    )
}

const Maps = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 901px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })


    return (
        <div className='container'>
            <div className='div_container'>
                <div className='div_top'>
                    {isBigScreen && <div className='div_top'>
                        <div className='div_small'>Use Cases</div>
                        <div className='div_big'>Used in Every Environment, to Save the Environment</div>
                        <div className='div_average'>There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.</div>

                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={shopping_cart} className='div_img'></img>
                                <div className='div_small_txt'>Ecommerce<div className='div_mnogoB'>See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>



                            <div className='div_second_obj'>
                                <div className='div_first_obj'>
                                    <img src={Image1} className='div_img'></img>
                                    <div className='div_small_txt'>Rideshare<div className='div_mnogoB'>Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.</div><div className='div_learn_more'>Learn more</div></div>
                                </div>
                            </div>
                        </div>

                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={aircraft} className='div_img'></img>
                                <div className='div_small_txt'>Flights<div className='div_mnogoB'>Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>



                            <div className='div_second_obj'>
                                <div className='div_first_obj'>
                                    <img src={laptop} className='div_img'></img>
                                    <div className='div_small_txt'>Enterprise Resource Planning<div className='div_mnogoB'>Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.</div><div className='div_learn_more'>Learn more</div></div>
                                </div>
                            </div>
                        </div>

                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={machine} className='div_img'></img>
                                <div className='div_small_txt'>Energy<div className='div_mnogoB'>Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>



                            <div className='div_second_obj'>
                                <div className='div_first_obj'>
                                    <img src={factory} className='div_img'></img>
                                    <div className='div_small_txt'>Supply Chain<div className='div_mnogoB'>Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.</div><div className='div_learn_more'>Learn more</div></div>
                                </div>
                            </div>
                        </div>

                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={mone} className='div_img'></img>
                                <div className='div_small_txt'>Fintech<div className='div_mnogoB'>Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>



                            <div className='div_second_obj'>
                                <div className='div_first_obj'>
                                    <img src={docks} className='div_img'></img>
                                    <div className='div_small_txt'>Fleet<div className='div_mnogoB'>You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.</div><div className='div_learn_more'>Learn more</div></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='div_big'>Don't See Your Industry?</div>
                            <div className='div_averagee'>Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.</div>
                            <div className='button'><Talk /></div>
                        </div>
                    </div>}









                    {isTabletOrMobile && <div className='div_top'>
                        <div className='div_small'>Use Cases</div>
                        <div className='div_big'>Used in Every Environment, to Save the Environment</div>
                        <div className='div_average'>There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.</div>

                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={shopping_cart} className='div_img'></img>
                                <div className='div_small_txt'>Ecommerce<div className='div_mnogoB'>See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={Image1} className='div_img'></img>
                                <div className='div_small_txt'>Rideshare<div className='div_mnogoB'>Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={aircraft} className='div_img'></img>
                                <div className='div_small_txt'>Flights<div className='div_mnogoB'>Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={laptop} className='div_img'></img>
                                <div className='div_small_txt'>Enterprise Resource Planning<div className='div_mnogoB'>Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={machine} className='div_img'></img>
                                <div className='div_small_txt'>Energy<div className='div_mnogoB'>Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={factory} className='div_img'></img>
                                <div className='div_small_txt'>Supply Chain<div className='div_mnogoB'>Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={mone} className='div_img'></img>
                                <div className='div_small_txt'>Fintech<div className='div_mnogoB'>Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div className='div_obj'>
                            <div className='div_first_obj'>
                                <img src={docks} className='div_img'></img>
                                <div className='div_small_txt'>Fleet<div className='div_mnogoB'>You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.</div><div className='div_learn_more'>Learn more</div></div>
                            </div>
                        </div>
                        <div>
                            <div className='div_big'>Don't See Your Industry?</div>
                            <div className='div_averagee'>Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.</div>
                            <div className='button'><Talk /></div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Maps;