import './partner.scss'
import partner from '../../resources/image/partner.svg'
import kovychki from '../../resources/image/kovychki.svg'
import google_and_looker from '../../resources/image/google_and_looker.svg'
import { useMediaQuery } from 'react-responsive'

const Green_txt = () => {
    return (
        <>
            <a className="green_ttxtt">Partner Spotlight</a>
        </>
    )
}

const More = () => {
    return (<div className='More__knop'>
        <a className='More__More__txt' href='#'>More Partners</a>
    </div>
    )
}

const Partner = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1241px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1240px)' })
    return (
        <>
            <div>
                {isBigScreen &&
                    <div>
                        <div className='app__img__part'>
                            <div className='app__BIGimg'>
                                <img src={partner} className="app__img-partner"></img>
                            </div>
                            <div className='app__text__part'>
                                <div><Green_txt /></div>
                                <div className='app__imposible__txt'>At the JOIN data conference, the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly.</div>
                                <div><img src={kovychki} className="app__img-partner"></img> </div>
                                <div className='app__something__about__java'>We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API.</div>
                                <div className='app__melkiy'>Read Full Story</div>
                                <div className='app__img_and_txt'>
                                    <div><img src={google_and_looker} className="app__img-google_and_looker"></img></div>
                                    <div>
                                        <div className='app__Daniel'>Daniel Mintz</div>
                                        <div className='app__bottom-Daniel'>Chief Data Evangelist at Looker</div>
                                    </div>
                                </div>
                                <div className='app__button__flexxx'><More /></div>
                            </div>
                        </div>
                    </div>}



                {isTabletOrMobile &&
                    <div className='app__img__part'>
                        <div className='app__text__part'>
                            <div><Green_txt /></div>
                            <div className='app__imposible__txt'>At the JOIN data conference, the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly.</div>
                            <div><img src={kovychki} className="app__img-partner"></img> </div>
                            <div className='app__something__about__java'>We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API.</div>
                            <div className='app__melkiy'>Read Full Story</div>
                            <div className='app__img_and_txt'>
                                <div><img src={google_and_looker} className="app__img-google_and_looker"></img></div>
                                <div>
                                    <div className='app__Daniel'>Daniel Mintz</div>
                                    <div className='app__bottom-Daniel'>Chief Data Evangelist at Looker</div>
                                </div>
                            </div>
                            <div className='app__button__flexxx'><More /></div>
                        </div>
                    </div>}
            </div>
        </>
    )
}
export default Partner;