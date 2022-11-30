import '../card.scss'
import Hospital_Earnings from '../../resources/img/icon/card/Hospital Earnings.svg'

const CardNewPatients4 = () => {
    return (
        <>
            <div className='app__container'>
                <div className='app__card'>
                    <div><img className='app__cardImg' src={Hospital_Earnings}></img></div>
                    <div>
                        <div className='app__cardTxt'>New Patients</div>
                        <div className='app__cardNumber'>104</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardNewPatients4;