import './App.scss';
import Header from "../header/header";
import React, { useState } from 'react';
import Img1 from '../img/lupa.svg'
import TableOne from '../table/tableOne/tableOne';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const Board = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
      <div className="all">
        {isNavVisible && (
          <div className="left-hand-panel">
            <div className="health1 health"> <img src={Img1}></img> <div>HealthCare</div></div>
            <Link to="/"><div className="health">Appointments</div></Link>
            <div className="health">Doctors</div>
            <div className="health">Departments</div>
            <div className="health">Patients</div>
            <div className="health">Payments</div>
            <div className="health">Help</div>
          </div>
        )}
        <div className='container'>
            <div className='btn'>
            </div>
            <div className='centr'>
                <TableOne />
            </div>
        </div>
      </div>
  )
}

export default Board;