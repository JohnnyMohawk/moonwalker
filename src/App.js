import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Food from './pages/Food';
import About from './pages/About';
import Friends from './pages/Friends';
import Press from './pages/Press';
import Specials from './pages/Specials';
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
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
