import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import YourPolidex from "./pages/YourPolidex";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Everyone from './pages/Everyone';
import Admin from './pages/Admin';





//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/AntoineLeBG">
          <Admin />
        </Route>
        <Route path="/yourpolidex">
          <YourPolidex />
        </Route>
        <Route path="/everyone">
          <Everyone />
        </Route>
      </Switch>
  </Router>
}



export default App;
