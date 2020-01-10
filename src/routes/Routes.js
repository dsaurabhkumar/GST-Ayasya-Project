import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from "../components/landing-page/LandingPage";
import PageNotFound from '../components/page-not-found/PageNotFound';
import OpenCompany from '../containers/open-company/OpenCompany';
import CreateCompany from '../containers/create-company/CreateCompany';
import Login from '../components/auth/login/Login';
import FeatureOption from '../components/feature-options-component/FeatureOption';
import RegionalSettings from '../containers/reginal-settings/RegionalSettings';
import General from '../containers/general/General';
import DisplaySettings from '../containers/display-settings/DisplaySettings';
import Accounts from '../containers/accounts/Accounts';
import Inventory from '../containers/inventory/Inventory';
import GstVat from '../containers/gst-vat/GstVat';
import Excise from '../containers/excise/Excise';
import ServiceTax from '../containers/service-tax/ServiceTax';
import TdsTcs from '../containers/tds-tcs/TdsTcs';
import TradeSpecific from '../containers/trade-specific-configuration/TradeSpecific';

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
            <Route path="/feature-options">
                <FeatureOption />
            </Route>
            <Route path="/regional-settings">
                <RegionalSettings />
            </Route>
            <Route path="/general">
                <General />
            </Route>
            <Route path="/display-settings">
                <DisplaySettings />
            </Route>
            <Route path="/accounts">
                <Accounts />
            </Route>
            <Route path="/inventory">
                <Inventory />
            </Route>
            <Route path="/gst-vat">
                <GstVat />
            </Route>
            <Route path="/excise">
                <Excise />
            </Route>
            <Route path="/service-tax">
                <ServiceTax />
            </Route>
            <Route path="/tds-tcs">
                <TdsTcs />
            </Route>
            <Route path="/trade-specific-configuration">
                <TradeSpecific />
            </Route>
            <Route component={PageNotFound}></Route>
        </Switch>
)
export default Routes