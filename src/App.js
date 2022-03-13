import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Drinks from './components/pages/Drinks';
import Food from './components/pages/Food';
import About from './components/pages/About';
import Friends from './components/pages/Friends';
import Press from './components/pages/Press';
import Specials from './components/pages/Specials';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/drinks' component={Drinks} />
        <Route path='/food' component={Food} />
        <Route path='/about' component={About} />
        <Route path='/friends' component={Friends} />
        <Route path='/press' component={Press} />
        <Route path='/specials' component={Specials} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
