import './use_cases.scss';
import shopping_cart from '../../resources/image/shoping_car.svg';
import aircraft from '../../resources/image/plane.svg';
import machine from '../../resources/image/machine.svg';
import mone from '../../resources/image/money.svg';
import geolocation from '../../resources/image/geolocation.svg';
import laptop from '../../resources/image/notebook.svg';
import factory from '../../resources/image/factory.svg';
import docks from '../../resources/image/docks.svg';
import { useMediaQuery } from 'react-responsive'

const Greeeen_txt = () => {
    return (
        <>
            <a className="green_txt">Use Cases</a>
        </>
    )
}

const Buto = () => {
    return (<div className='Buto__op'>
        <a className='Buto__op__txt' href='#'>Let's Talk</a>
    </div>
    )
}

const Use_cases = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1241px)' })

    return (
        <div className='container'>
            <div className='div_container'>
                <div className='div_top'>

                    <div className='div_gr'>Use Cases</div>
                    <div className='div_big'>Used in Every Environment, to Save the Environment</div>
                    <div className='div_average'>There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.</div>

                    <div className='div_obj'>
                        <div className='div_first_obj'>
                            <img src={shopping_cart} className='div_img'></img>
                            <div>
                                <div className='div_name'>Ecommerce</div>
                                <div className='div_description'>See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.</div>
                                <div className='div_learn_more'>Learn more</div>
                            </div>
                        </div>



                        <div className='div_second_obj'>
                            <div className='div_first_obj'>
                                <img src={aircraft} className='div_img'></img>
                                <div>
                                    <div className='div_name'>Flights</div>
                                    <div className='div_description'>Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.</div>
                                    <div className='div_learn_more'>Learn more</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='div_obj'>
                        <div className='div_first_obj'>
                            <img src={machine} className='div_img'></img>
                            <div>
                                <div className='div_name'>Energy</div>
                                <div className='div_description'>Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.</div>
                                <div className='div_learn_more'>Learn more</div>
                            </div>
                        </div>



                        <div className='div_second_obj'>
                            <div className='div_first_obj'>
                                <img src={mone} className='div_img'></img>
                                <div>
                                    <div className='div_name'>Fintech</div>
                                    <div className='div_description'>Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.</div>
                                    <div className='div_learn_more'>Learn more</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='div_obj'>
                        <div className='div_first_obj'>
                            <img src={geolocation} className='div_img'></img>
                            <div>
                                <div className='div_name'>Rideshare</div>
                                <div className='div_description'>Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.</div>
                                <div className='div_learn_more'>Learn more</div>
                            </div>
                        </div>



                        <div className='div_second_obj'>
                            <div className='div_first_obj'>
                                <img src={laptop} className='div_img'></img>
                                <div>
                                    <div className='div_name'>Enterprise Resource Planning</div>
                                    <div className='div_description'>Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.</div>
                                    <div className='div_learn_more'>Learn more</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='div_obj'>
                        <div className='div_first_obj'>
                            <img src={factory} className='div_img'></img>
                            <div>
                                <div className='div_name'>Supply Chain</div>
                                <div className='div_description'>Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.</div>
                                <div className='div_learn_more'>Learn more</div>
                            </div>
                        </div>



                        <div className='div_pos'>
                            <div className='div_first_obj'>
                                <img src={docks} className='div_img'></img>
                                <div>
                                    <div className='div_name'>Fleet</div>
                                    <div className='div_description'>You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.</div>
                                    <div className='div_learn_more'>Learn more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div_big'>Don't See Your Industry?</div>
                    <div className='div_averagee'>Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.</div>
                    <Buto />
                </div>
            </div>
        </div>
    )
}

export default Use_cases;