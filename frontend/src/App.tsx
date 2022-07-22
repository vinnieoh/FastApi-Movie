import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from './components/Login/Index';

function App() {

  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Login} />
        
      </Switch>
      
    </Router>
  );
}

export default App
