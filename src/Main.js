import React, { Component } from "react";


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Capps from "./Capps"; 
import FAQ from "./FAQ";
import Contact from "./Contact";
import Terms from "./Terms";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">kapps</NavLink></li>
            <li><NavLink to="/FAQ">FAQ</NavLink></li>
            <li><NavLink to="/Terms">Terms</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            
          </ul>
          <div className="content">
            <Route exact path="/" component={Capps}/>
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/Terms" component={Terms}/>
            <Route path="/contact" component={Contact}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;