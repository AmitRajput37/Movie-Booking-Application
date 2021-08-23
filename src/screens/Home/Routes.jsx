import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Details from "../../screens/details/Details";
import Home from "./Home";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/details" component={Details} />
        <Route path="/" component={Home} />
        <import />
      </Switch>
    );
  }
}
