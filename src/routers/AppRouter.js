import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { DashboardApp } from "../components/home/DashboardApp";

export const AppRouter = () => {
    return (
        <Router>
            <div className="body">
                <Switch>
                    <Route exact path="/" component={DashboardApp} />
                    <Route exact path="/auth" component={LoginScreen} />
                    <Redirect to="/" component={DashboardApp} />
                </Switch>
            </div>
        </Router>
    );
}