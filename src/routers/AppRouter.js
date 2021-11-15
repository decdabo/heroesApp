import React from "react";
import { useSelector } from "react-redux";
import {
  HashRouter as Router,
  Switch,
} from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { DashboardApp } from "./DashboardApp";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { logged } = useSelector(state => state.auth)
    return (
        <Router basename="/heroesapp">
            <div className="body">
                <Switch>
                    <PublicRoute path="/auth" component={LoginScreen} isAuth={ logged }/>
                    <PrivateRoute path="/" component={DashboardApp} isAuth={ logged } />
                </Switch>
            </div>
        </Router>
    );
}