import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/dashboard";
import Customers from "./component/customers";
import SignIn from "./component/signIn";
import NotFound from "./component/notFound";
import Employee from "./component/employee";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/customer" component={Customers} />
          <Route path="/employee" component={Employee} />
          <Route path="/login" component={SignIn} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/dashboard" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
