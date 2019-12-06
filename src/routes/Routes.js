import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/landing-page/LandingPage";
import CreateCompany from '../components/create-company/CreateCompany';
import OpenCompany from '../components/open-company/OpenCompany';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={LandingPage}>
            </Route>
            <Route path="/create-company">
                <CreateCompany />
            </Route>
            <Route path="/open-company">
                <OpenCompany />
            </Route>
        </Switch>
    </Router>
)
export default Routes