import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
function App() {
  return (
  <div> 
  <Router>
    <Switch>
      <Route  exact path="/">
      <Login/> 
       </Route>
    
       <Route  exact path="/signup">
      <Signup/> 
       </Route>

    </Switch>
  </Router>
  </div>
  );
}

export default App;
