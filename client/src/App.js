
import Home from "./components/Home/Home";

import Single from "./components/Single/Single";
import TopBar from "./components/TopBar/TopBar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings"
import Write from "./components/Write/Write";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./components/context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">
            {user ? <Home /> : <Login />}
           
          </Route>
          <Route path="/settings">
           {user ? <Settings /> : <Register />}
          </Route>

          <Route path="/write">
           {user ? <Write /> : <Register />}
          </Route>

          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
