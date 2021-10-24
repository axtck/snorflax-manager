import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import Manager from "../pages/Manager";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserSettingsPage from "../pages/UserSettingsPage";

interface MainRoutesProps { };

const MainRoutes: FunctionComponent<MainRoutesProps> = () => (
    <Switch>
        {/* routes */}

        {/* main */}
        <Route path="/manager" component={Manager} />
        <Route path="/settings/user/:username" component={UserSettingsPage} />


        {/* login / signup */}
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />

        {/* other routes */}
        <Route path="/home" component={HomePage} />

        {/* redirects */}
        <Redirect to="/home" />
    </Switch>
);

export default MainRoutes;
