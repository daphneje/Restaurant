import React from "react";
import AboutMe from "./AboutMe";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

const ShowTommy = withRouter(({ history }) => {
  return (
    <divs
      onClick={() => {
        history.push("/aboutme/Tommy");
      }}
    >
      About Tommy
    </div>
  );
});

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="menu">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/aboutme">About Me</Link>
            </div>
            <div>
              <Link to="/aboutme/Johnny">About Johnny</Link>
            </div>
            <div>
              <ShowTommy />
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route path="/aboutme/:name?">
                <AboutMe />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
