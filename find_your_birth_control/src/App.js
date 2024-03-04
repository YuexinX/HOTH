
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Navigate,

} from "react-router-dom";

import Home from "./component/home";
import IUD from "./component/IUD";
import Pill from "./component/pill";
import Shot from "./component/pill";
import Patch from "./component/ThePatch";

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route 
            exact
            path="/"
            element = {<Home />}
          />
          <Route
            path="/IUD"
            element = {<IUD />}
          
          />
          <Route 
            path="/Pill"
            element = {<Pill />}
          />

          <Route 
            path="/Shot"
            element = {<Shot />}
          />

          <Route 
            path="/Patch"
            element = {<Patch />}
          />
        </Routes>
      </Router>
    </>
  );
}


export default App;
