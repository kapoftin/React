import '../table.scss'
import Leslie_Alexander from '../../resources/img/avatar/Leslie Alexander.svg'
import Ronald_Richards from '../../resources/img/avatar/Ronald Richards.svg'
import Jane_Cooper from '../../resources/img/avatar/Jane Cooper.svg'
import Robert_Fox from '../../resources/img/avatar/Robert Fox.svg'
import Jenny_Wilson from '../../resources/img/avatar/Jenny Wilson.svg'
import pensil from '../../resources/img/icon/pensil.svg'
import backet from '../../resources/img/icon/backet.svg'

const TableOne = () => {
    return (
        <>
            <table class="app__table">
                <thead>
                    <div className='app__TxtAppo'>Appointment Activity</div>
                    <tr className='app__border'>
                        <td className='app__tableLogog'><th className='app__lineLogo'>Name</th></td>
                        <td className='app__tableLogo'><th className='app__lineLogo'>Email</th></td>
                        <td className='app__tableLogo'><th className='app__lineLogo'>Date</th></td>
                        <td className='app__tableLogo'><th className='app__lineLogo'>Visit Time</th></td>
                        <td className='app__tableLogo'><th className='app__lineLogo'>Doctor</th></td>
                        <td className='app__tableLogo'><th className='app__lineLogo'>Conditions</th></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='app__border'>
                        <td>
                            <td><img className='app__img' src={Leslie_Alexander}></img></td>
                            <td className='app__line'>Leslie Alexander</td>
                        </td>
                        <td className='app__line'>lesie.alexander@example.com</td>
                        <td className='app__line'>10/10/2020</td>
                        <td className='app__line'>09:15-09:45am</td>
                        <td className='app__line'>Dr. Jacob Jones</td>
                        <td>
                            <div className='app__YaSlab'>
                                <td className='app__line'>Mumps Stage II</td>
                                <div>
                                    <td><img className='app__imgIcon' src={pensil}></img></td>
                                    <td><img className='app__imgIconTwo' src={backet}></img></td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='app__border'>
                        <td>
                            <td><img className='app__img' src={Ronald_Richards}></img></td>
                            <td className='app__line'>Ronald Richards</td>
                        </td>
                        <td className='app__line'>ronald.richards@example.com</td>
                        <td className='app__line'>10/12/2020</td>
                        <td className='app__line'>12:00-12:45pm</td>
                        <td className='app__line'>Dr. Theresa Webb</td>
                        <td className='app__tdAkak'>
                            <div className='app__YaSlab'>
                                <td className='app__line'>Depression</td>
                                <div>
                                    <td><img className='app__imgIcon' src={pensil}></img></td>
                                    <td><img className='app__imgIconTwo' src={backet}></img></td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='app__border'>
                        <td>
                            <td><img className='app__img' src={Jane_Cooper}></img></td>
                            <td className='app__line'>Jane Cooper</td>
                        </td>
                        <td className='app__line'>jane.cooper@example.com</td>
                        <td className='app__line'>10/13/2020</td>
                        <td className='app__line'>01:15-01:45pm</td>
                        <td className='app__line'>Dr. Jacob Jones</td>
                        <td className='app__tdAkak'>
                            <div className='app__YaSlab'>
                                <td className='app__line'>Arthritis</td>
                                <div>
                                    <td><img className='app__imgIcon' src={pensil}></img></td>
                                    <td><img className='app__imgIconTwo' src={backet}></img></td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='app__border'>
                        <td>
                            <td><img className='app__img' src={Robert_Fox}></img></td>
                            <td className='app__line'>Robert Fox</td>
                        </td>
                        <td className='app__line'>robert.fox@gmail.com</td>
                        <td className='app__line'>10/14/2020</td>
                        <td className='app__line'>02:00-02:45pm</td>
                        <td className='app__line'>Dr. Arlene McCoy</td>
                        <td className='app__tdAkak'>
                            <div className='app__YaSlab'>
                                <td className='app__line'>Fracture</td>
                                <div>
                                    <td><img className='app__imgIcon' src={pensil}></img></td>
                                    <td><img className='app__imgIconTwo' src={backet}></img></td>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <td><img className='app__img' src={Jenny_Wilson}></img></td>
                            <td className='app__line'>Jenny Wilson</td>
                        </td>
                        <td className='app__line'>jenny.wilson@example.com</td>
                        <td className='app__line'>10/15/2020</td>
                        <td className='app__line'>12:00-12:45pm</td>
                        <td className='app__line'>Dr. Esther Howard</td>
                        <td className='app__tdAkak'>
                            <div className='app__YaSlab'>
                                <td className='app__line'>Depression</td>
                                <div>
                                    <td><img className='app__imgIcon' src={pensil}></img></td>
                                    <td><img className='app__imgIconTwo' src={backet}></img></td>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableOne;