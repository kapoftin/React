import './app.scss'
import Header from '../header/header';
import Pers from '../app/pers/pers'
import Stroika from '../sroka/stroka';
import Zapol from '../Zapol/zapol';
import Flex from '../flex/flex';
import React from 'react';
import { Route,  BrowserRouter as Router, Switch  } from 'react-router-dom';

const App = () => {
  return(
    <Router>   
    <div className='container'>
      <div className='img_sun'>
    <Route path="/">
    <Header/>
    <Stroika/>
    </Route>
    <Switch>
    <Route path="/pers">
      <Pers/>
    </Route> 
    <Route path="/">
    <Zapol/>  
    <Flex/> 
    </Route>
    </Switch>
    
    </div>
    </div>
    </Router>
  )
}

export default App;