import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Spiritual from './components/pages/Spiritual';
import Recipes from './components/pages/Recipes';
import Beauty from './components/pages/Beauty';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/spiritual' component={Spiritual} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/beauty' component={Beauty} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
