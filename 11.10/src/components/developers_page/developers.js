import './developers.scss'
import Image1 from '../../resources/image/code_2.svg'
import { useMediaQuery } from 'react-responsive'

const Green_txt = () => {
    return (
        <>
            <a className="green_txt">For Developers, By Developers</a>
        </>
    )
}

const Button = () => {
    return (<div className='Button__knop'>
        <a className='Button__knop__txt' href='#'>Get Started</a>
    </div>
    )
}

const Bton = () => {
    return (<div className='Bton__knopp'>
        <a className='Bton__knopp__txt' href='#'>Get API Keys</a>
    </div>
    )
}

const Developers = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const isBigScreen = useMediaQuery({ query: '(min-width: 1241px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1240px)' })

    return (
        <>
            <div className='container'>
                {isBigScreen &&
                    <div className='kostya'>
                        <div className='app__str'>
                            <div className='app__f1'>
                                <Green_txt />
                                <div className='app__big__txtt'>Simple Integration.</div>
                                <div className='app__big__txtt'>RESTful API.</div>
                                <div className='app__small__txtt'>The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys.</div>
                                <div className="app__btns">
                                    <Bton />
                                    <Button />
                                </div>
                            </div>
                            <div className='app__code first'>
                                <img src={Image1} className='app__haltura'></img>
                            </div>
                        </div>
                    </div>
                }

                {isTabletOrMobile &&
                    <div className='app__str'>
                        <div className='app__f1'>
                            <Green_txt />
                            <div className='app__big__txt'>Simple Integration.</div>
                            <div className='app__big__txt'>RESTful API.</div>
                            <div className='app__small__txtt'>The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys.</div>
                            <div className="app__bkr">
                                <div className='app__code first'>
                                    <img src={Image1} className='div_haltura'></img>
                                </div>
                                <Bton />
                                <Button />
                            </div>
                        </div>

                    </div>
                }
            </div>
        </>
    )
}

export default Developers;