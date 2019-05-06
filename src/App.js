import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <div>
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;