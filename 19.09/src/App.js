import './app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Slider,  AboutPage, MarvelPage} from './pages';
import Header from './components/header/header';

const App = () => {
  return(
     <Router>
          <div className='container'>
            <Header/>
            <MarvelPage/>
            {/*<Switch>
              <Route exact path="/">
                <Slider/>
              </Route>
              <Route exact path="/about">
                <AboutPage/>
              </Route>
            </Switch> */}
          </div>
    </Router> 

  )
}

export default App;