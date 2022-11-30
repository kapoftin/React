import '../card.scss'
import Hospital_Earnings from '../../resources/img/icon/card/Hospital Earnings.svg'

const CardNewPatients2 = () => {
    return (
        <>
            <div className='app__container'>
                <div className='app__card'>
                    <div><img className='app__cardImg' src={Hospital_Earnings}></img></div>
                    <div>
                        <div className='app__cardTxt'>Hospital Earnings</div>
                        <div className='app__cardNumber'>$ 12,174</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardNewPatients2;