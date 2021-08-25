import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import App from './App'
import Eccom from './eccomerce-kit'
import splitbee from "@splitbee/web";


export default function Pages() {
  splitbee.init();
  splitbee.track("User Visit custom track");
  return (
    <>
    <Router>

      <Route path="/"  exact>
          <App/>
      </Route>
      <Route path="/ecommerce-ui-kit" >
          <Eccom/>
      </Route>
    </Router>
    </>
  );
}
