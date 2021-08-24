import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import App from './App'
import Eccom from './eccomerce-kit'
export default function Pages() {
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
