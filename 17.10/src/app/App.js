import './App.scss';
import Header from "../header/header";
import GraphF from "../graphFirst/graphF";
import GraphSec from "../graphSecond/graphSecond";
import React, { useState } from 'react';
import Img1 from '../img/lupa.svg'
import TableOne from '../table/tableOne/tableOne';
import CardAppointments from '../card/cardCardAppointments/cardCardAppointments';
import CardNewPatients2 from '../card/cardHospitalEarnings/cardHospitalEarnings';
import CardNewPatients3 from '../card/cardOperations/cardOperations';
import CardNewPatients4 from '../card/cardNewPatients/cardNewPatients';
import Board from './Board';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <Router>
      <div className="all">
        {isNavVisible && (
          <div className="left-hand-panel">
            <div className="health1 health"> <img src={Img1}></img> <div>HealthCare</div></div>
            <Link to="/board"><div className="health">Appointments</div></Link>
            <div className="health">Doctors</div>
            <div className="health">Departments</div>
            <div className="health">Patients</div>
            <div className="health">Payments</div>
            <div className="health">Help</div>
          </div>
        )}
        <div className='container'>
          <Header />
          <Switch>
            <div className='diving'>
              <CardAppointments />

              <CardNewPatients2 />

              <CardNewPatients3 />

              <CardNewPatients4 />
            </div>
            </Switch>
          <div className='btn'>
            <a href='#' onClick={toggleNav} className='flex'>LEFT-HAND-MENU</a>
          </div>
            <GraphF/>
          <Route path="/">
            <GraphSec />
          </Route>
          <Route path="/">
            <div className='centr'>
              <TableOne />
            </div>
          </Route>


          <Route path="/board">
            <Board />
          </Route>
    
        </div>
      </div>
    </Router>
  )
}

export default App;