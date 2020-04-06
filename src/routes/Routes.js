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
import AccountAdd from '../containers/masters-module/masters-account/account-add/AccountAdd';
import AccountModify from '../containers/masters-module/masters-account/account-modify/AccountModify';
import AccountList from '../containers/masters-module/masters-account/account-list/AccountList';
import AccountGroupAdd from '../containers/masters-module/masters-account-group/account-group-add/AccountGroupAdd';
import AccountGroupList from '../containers/masters-module/masters-account-group/account-group-list/AccountGroupList';
import StdNarrationAdd from '../containers/masters-module/masters-std-narration/std-narration-add/StdNarrationAdd';
import StdNarrationModify from '../containers/masters-module/masters-std-narration/std-narration-modify/StdNarrationModify';
import StdNarrationList from '../containers/masters-module/masters-std-narration/std-narration-list/StdNarrationList';
import ItemAdd from '../containers/masters-module/masters-item/item-add/ItemAdd';
import ItemModify from '../containers/masters-module/masters-item/item-modify/ItemModify';
import ItemList from '../containers/masters-module/masters-item/item-list/ItemList';
import ItemGroupAdd from '../containers/masters-module/masters-item-group/item-group-add/ItemGroupAdd';
import ItemGroupModify from '../containers/masters-module/masters-item-group/item-group-modify/ItemGroupModify';
import ItemGroupList from '../containers/masters-module/masters-item-group/item-group-list/ItemGroupList';

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
            <Route path="/account-add">
                <AccountAdd />
            </Route>
            <Route path="/account-modify">
                <AccountModify />
            </Route>
            <Route path="/account-list">
                <AccountList />
            </Route>
            <Route path="/account-group-add">
                <AccountGroupAdd />
            </Route>
            <Route path="/account-group-modify">
                <AccountModify />
            </Route>
            <Route path="/account-group-list">
                <AccountGroupList />
            </Route>
            <Route path="/std-narration-add">
                <StdNarrationAdd />
            </Route>
            <Route path="/std-narration-modify">
                <StdNarrationModify />
            </Route>
            <Route path="/std-narration-list">
                <StdNarrationList />
            </Route>
            <Route path="/item-add">
                <ItemAdd />
            </Route>
            <Route path="/item-modify">
                <ItemModify />
            </Route>
            <Route path="/item-list">
                <ItemList />
            </Route>
            <Route path="/item-group-add">
                <ItemGroupAdd />
            </Route>
            <Route path="/item-group-modify">
                <ItemGroupModify />
            </Route>
            <Route path="/item-group-list">
                <ItemGroupList />
            </Route>
            <Route component={PageNotFound}></Route>
        </Switch>
)
export default Routes