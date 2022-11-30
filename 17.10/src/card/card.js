import './card.scss'
import Appointments from '../resources/img/icon/card/Appointments.svg'
import New_patients from '../resources/img/icon/card/New Patients.svg'
import Operations from '../resources/img/icon/card/Operations.svg'
import Hospital_Earnings from '../resources/img/icon/card/Hospital Earnings.svg'

const Card = () => {
    return (
        <>
            <div className='app__container'>
                <div className='app__card'>
                    <div><img className='app__cardImg' src={Appointments}></img></div>
                    <div>
                        <div className='app__cardTxt'>Appointments</div>
                        <div className='app__cardNumber'>213</div>
                    </div>
                </div>
                <div className='app__card'>
                    <div><img className='app__cardImg' src={New_patients}></img></div>
                    <div>
                        <div className='app__cardTxt'>New Patients</div>
                        <div className='app__cardNumber'>104</div>
                    </div>
                </div>
                <div className='app__card'>
                    <div><img className='app__cardImg' src={Operations}></img></div>
                    <div>
                        <div className='app__cardTxt'>Operations</div>
                        <div className='app__cardNumber'>24</div>
                    </div>
                </div>
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
export default Card;