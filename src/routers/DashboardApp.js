import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { HeroScreen } from "../components/cards/HeroScreen";
import { HomeScreen } from "../components/home/HomeScreen";

export const DashboardApp = () => {

    return (
        <Router>
            <div className="screen darkGrey">
                <Switch>
                    <Route exact path="/home" component={HomeScreen} />
                    <Route exact path="/hero/:heroName" component={HeroScreen} />
                    <Redirect to="/home" component={HomeScreen} />
                </Switch>
            </div>
        </Router>
    );
}
