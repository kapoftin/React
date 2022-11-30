import '../card.scss'
import Operations from '../../resources/img/icon/card/Operations.svg'

const CardNewPatients3 = () => {
    return (
        <>
            <div className='app__container'>
                <div className='app__card'>
                    <div><img className='app__cardImg' src={Operations}></img></div>
                    <div>
                        <div className='app__cardTxt'>Operations</div>
                        <div className='app__cardNumber'>24</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardNewPatients3;