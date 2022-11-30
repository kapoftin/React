import './agitation.scss'

const Bton = () => {
    return (<div className='Bton__knopp'>
        <a className='Bton__knopp__txt' href='#'>Try Cloverly</a>
    </div>
    )
}

const Agitation = () => {
    return (
        <>
            <div className="app__agitation__str">
                <div className="app__agitation__block">
                    <div className='app__agitation__big__txt'>What Activities Will You Offset?</div>
                    <div className='app__agitation__small__txt'>Neutralize your carbon footprint with the Cloverly API.</div>
                    <div className='app__buttonInblock'><Bton /></div>
                </div>
            </div>
        </>
    )
}
export default Agitation;