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
import AccountGroupModify from '../containers/masters-module/masters-account-group/account-group-modify/AccountGroupModify';
import MaterialCentreAdd from '../containers/masters-module/masters-material-centre/material-centre-add/MaterialCentreAdd';
import MaterialCentreModify from '../containers/masters-module/masters-material-centre/material-centre-modify/MaterialCentreModify';
import MaterialCentreList from '../containers/masters-module/masters-material-centre/material-centre-list/MaterialCentreList';
import MaterialCentreGroupAdd from '../containers/masters-module/masters-material-centre-group/material-centre-group-add/MaterialCentreGroupAdd';
import MaterialCentreGroupModify from '../containers/masters-module/masters-material-centre-group/material-centre-group-modify/MaterialCentreGroupModify';
import MaterialCentreGroupList from '../containers/masters-module/masters-material-centre-group/material-centre-group-list/MaterialCentreGroupList';
import UnitAdd from '../containers/masters-module/masters-unit/unit-add/UnitAdd';
import UnitModify from '../containers/masters-module/masters-unit/unit-modify/UnitModify';
import UnitList from '../containers/masters-module/masters-unit/unit-list/UnitList';
import UnitConversionAdd from '../containers/masters-module/masters-unit-conversion/unit-conversion-add/UnitConversionAdd';
import UnitConversionModify from '../containers/masters-module/masters-unit-conversion/unit-conversion-modify/UnitConversionModify';
import UnitConversionList from '../containers/masters-module/masters-unit-conversion/unit-conversion-list/UnitConversionList';
import BillSundryAdd from '../containers/masters-module/masters-bill-sundry/bill-sundry-add/BillSundryAdd';
import BillSundryModify from '../containers/masters-module/masters-bill-sundry/bill-sundry-modify/BillSundryModify';
import BillSundryList from '../containers/masters-module/masters-bill-sundry/bill-sundry-list/BillSundryList';

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
                <AccountGroupModify />
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
            <Route path="/material-centre-add">
                <MaterialCentreAdd />
            </Route>
            <Route path="/material-centre-modify">
                <MaterialCentreModify />
            </Route>
            <Route path="/material-centre-list">
                <MaterialCentreList />
            </Route>
            <Route path="/material-centre-group-add">
                <MaterialCentreGroupAdd />
            </Route>
            <Route path="/material-centre-group-modify">
                <MaterialCentreGroupModify />
            </Route>
            <Route path="/material-centre-group-list">
                <MaterialCentreGroupList />
            </Route>
            <Route path="/unit-add">
                <UnitAdd />
            </Route>
            <Route path="/unit-modify">
                <UnitModify />
            </Route>
            <Route path="/unit-list">
                <UnitList />
            </Route>
            <Route path="/unit-conversion-add">
                <UnitConversionAdd />
            </Route>
            <Route path="/unit-conversion-modify">
                <UnitConversionModify />
            </Route>
            <Route path="/unit-conversion-list">
                <UnitConversionList />
            </Route>
            <Route path="/bill-sundry-add">
                <BillSundryAdd />
            </Route>
            <Route path="/bill-sundry-modify">
                <BillSundryModify />
            </Route>
            <Route path="/bill-sundry-list">
                <BillSundryList />
            </Route>

            <Route component={PageNotFound}></Route>
        </Switch>
)
export default Routes