import './how_It_works_page.scss';
import twogis from '../../resources/image/2GisBiLike.png';
import magnifier from '../../resources/image/magnifier.png';
import panel from '../../resources/image/panel.svg';

const Gren_txt = () => {
    return (
        <>
            <a className="gren_txt">How It Works</a>
        </>
    )
}

const Knop = () => {
    return (<div className='Knop__knop'>
        <a className='Knop__knop__txt' href='#'>Learn More</a>
    </div>
    )
}


const How_it_works = () => {
    return (
        <div className='container'>
            <div className='app__main'>
                <div className='app__p1'>
                    <Gren_txt />
                    <div className='app__big_txtt'>Connecting the Carbon Offset Infrastructure for a More Sustainable World</div>
                    <div className='app__average_txt'>Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster.</div>
                    <div className='app__button__flexxx'> <Knop /> </div>
                </div>

                <div className='app__p2'>
                    <div className='app__otdel'>
                        <img src={twogis} className='app__div__img'></img>
                        <div className='app__div__txt'>Matching the Offset</div>
                        <div className='app__div__txt__small'>The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.</div>
                    </div>
                    <div className='app__otdel'>
                        <img src={magnifier} className='app__div__img'></img>
                        <div className='app__div__txt'>Transaction Transparency</div>
                        <div className='app__div__txt__small'>We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.</div>
                    </div>
                    <div className='app__otdel'>
                        <img src={panel} className='app__div__img'></img>
                        <div className='app__div__txt'>Verified Sources</div>
                        <div className='app__bottom'>To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How_it_works;