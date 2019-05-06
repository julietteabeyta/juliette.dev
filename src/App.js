import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <div>
          {/* <Navbar /> */}
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
          {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;