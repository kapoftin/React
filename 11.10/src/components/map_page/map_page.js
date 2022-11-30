import './map_page.scss';
import Green_txt from '../green_txt/green_txt';
import map from '../../resources/image/map.png';

const Bton = () => {
    return (<div className='Bton__knopp'>
        <a className='Bton__knopp__txt' href='#'>Get Started for Free</a>
    </div>
    )
}

const Buton = () => {
    return (<div className='Buton__nop'>
        <a className='Buton__nop__txt' href='#'>Let's Talk</a>
    </div>
    )
}

const Map_page = () => {
    return (
        <div className='container'>
            <div className='app__start'>
                <div className='stroka'>
                    <Green_txt />
                    <div className='app__big'>Offset Your Carbon Footprint in Real Time</div>
                    <div className='app__average'>Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions.</div>
                    <div className="app__btns">
                        <Bton />
                        <Buton />
                    </div>
                    <img className='img' src={map}></img>
                </div>
            </div>
        </div>
    )
}

export default Map_page;