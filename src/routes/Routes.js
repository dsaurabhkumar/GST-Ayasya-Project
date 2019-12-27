import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from "../components/landing-page/LandingPage";
import PageNotFound from '../components/page-not-found/PageNotFound';
import OpenCompany from '../containers/open-company/OpenCompany';
import CreateCompany from '../containers/create-company/CreateCompany';
import Login from '../components/auth/login/Login';

const Routes = () => (
        <Switch>
            <Route path="/" exact={true} component={LandingPage}>
            </Route>
            <Route path="/create-company">
                <CreateCompany />
            </Route>
            <Route path="/open-company">
                <OpenCompany />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route component={PageNotFound}></Route>
        </Switch>
)
export default Routes