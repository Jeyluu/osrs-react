import './App.css';
import Nav from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import Characters from './Containers/Characters/Characters';
import Armors from './Containers/Armors/Armors'
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {


  return (
    <>
  <Router>

    <Nav/>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Characters" exact component={Characters} />
        <Route path="/Armors" exact component={Armors} />
      </Switch>
      
    <Footer/>

  </Router>
    </>
  );
}

export default App;
