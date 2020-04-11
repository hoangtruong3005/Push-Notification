import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as Container from "./containers";
import ProjectDetail from "./components/CreateProject/ProjectDetail";
import CreateProject from "./components/CreateProject";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

import "./App.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container.NavbarContainer />
        <Switch>
          <Route exact path="/" component={Container.DashboardContainer} />
          <Route path="/project/:id" component={ProjectDetail} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
