import '../card.scss'
import Appointments from '../../resources/img/icon/card/Appointments.svg'

const CardAppointments = () => {
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
            </div>
        </>
    )
}
export default CardAppointments;