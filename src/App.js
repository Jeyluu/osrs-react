import react from 'react';
import './App.css';
import Home from './Containers/Home/Home';
import Nav from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {


  return (
    <div className="App">

      <Router>

        <Nav />

        <Switch>
          <Route path="/" excact />
          <Route path="/characters" excact  />
          <Route path="/armors" excact  />
        </Switch>
        <Home />
      </Router>
    </div>
  );
}

export default App;
