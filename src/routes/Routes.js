import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/landing-page/LandingPage";
import CreateCompany from '../components/create-company/CreateCompany';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={LandingPage}>
            </Route>
            <Route path="/create-company">
                <CreateCompany />
            </Route>
        </Switch>
    </Router>
)
export default Routes