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
import BillOfMaterialAdd from '../containers/masters-module/masters-bill-of-material/bill-of-material-add/BillOfMaterialAdd';
import BillOfMaterialModify from '../containers/masters-module/masters-bill-of-material/bill-of-material-modify/BillOfMaterialModify';
import BillOfMaterialList from '../containers/masters-module/masters-bill-of-material/bill-of-material-list/BillOfMaterialList';
import SaleTypeAdd from '../containers/masters-module/masters-sale-type/sale-type-add/SaleTypeAdd';
import SaleTypeModify from '../containers/masters-module/masters-sale-type/sale-type-modify/SaleTypeModify';
import SaleTypeList from '../containers/masters-module/masters-sale-type/sale-type-list/SaleTypeList';
import PurchaseTypeAdd from '../containers/masters-module/masters-purchase-type/purchase-type-add/PurchaseTypeAdd';
import PurchaseTypeModify from '../containers/masters-module/masters-purchase-type/purchase-type-modify/PurchaseTypeModify';
import PurchaseTypeList from '../containers/masters-module/masters-purchase-type/purchase-type-list/PurchaseTypeList';
import TaxCategoryAdd from '../containers/masters-module/masters-tax-category/tax-category-add/TaxCategoryAdd';
import TaxCategoryModify from '../containers/masters-module/masters-tax-category/tax-category-modify/TaxCategoryModify';
import TaxCategoryList from '../containers/masters-module/masters-tax-category/tax-category-list/TaxCategoryList';
import DiscountStructureAdd from '../containers/masters-module/masters-misc-masters-discount-structure/discount-structure-add/DiscountStructureAdd';
import DiscountStructureModify from '../containers/masters-module/masters-misc-masters-discount-structure/discount-structure-modify/DiscountStructureModify';
import DiscountStructureList from '../containers/masters-module/masters-misc-masters-discount-structure/discount-structure-list/DiscountStructureList';
import StateAdd from '../containers/masters-module/masters-misc-masters-state/state-add/StateAdd';
import StateModify from '../containers/masters-module/masters-misc-masters-state/state-modify/StateModify';
import StateList from '../containers/masters-module/masters-misc-masters-state/state-list/StateList';
import CountryAdd from '../containers/masters-module/masters-misc-masters-country/country-add/CountryAdd';
import CountryModify from '../containers/masters-module/masters-misc-masters-country/country-modify/CountryModify';
import CountryList from '../containers/masters-module/masters-misc-masters-country/country-list/CountryList';
import { VoucherSeriesConfig } from '../containers/configuration-module/voucher-series-configuration/VoucherSeriesConfig';
import HardwareConfig from '../containers/configuration-module/hardware-configuration/HardwareConfig';
import UserDashboardConfig from '../containers/configuration-module/user-dashboard-configuration/UserDashboardConfig';
import EmailConfig from '../containers/configuration-module/email-configuration/EmailConfig';
import MaxEntriesInVoucher from '../containers/configuration-module/maximum-entries-in-voucher/MaxEntriesInVoucher';
import ItemDetailsPrintingReport from '../containers/configuration-module/item-details-printing-reports/ItemDetailsPrintingReport';
import BillRefPrintingDocuments from '../containers/configuration-module/refrences-group-summary-printing-configuration/bill-reference-printing-documents/BillRefPrintingDocuments';
import BillRefPrintingReports from '../containers/configuration-module/refrences-group-summary-printing-configuration/bill-reference-printing-reports/BillRefPrintingReports';
import ItemGroupPrinting from '../containers/configuration-module/refrences-group-summary-printing-configuration/item-group-summary-printing/ItemGroupPrinting';
import AgeingAccount from '../containers/configuration-module/ageing-analysis-time-slabs/ageing-account/AgeingAccount';
import AgeingInventory from '../containers/configuration-module/ageing-analysis-time-slabs/ageing-inventory/AgeingInventory';
import UsersAdd from '../containers/users-module/users-add/UsersAdd';
import UsersModify from '../containers/users-module/users-modify/UsersModify';
import UsersList from '../containers/users-module/users-list/UsersList';

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
        <Route path="/bill-of-material-add">
            <BillOfMaterialAdd />
        </Route>
        <Route path="/bill-of-material-modify">
            <BillOfMaterialModify />
        </Route>
        <Route path="/bill-of-material-list">
            <BillOfMaterialList />
        </Route>
        <Route path="/sale-type-add">
            <SaleTypeAdd />
        </Route>
        <Route path="/sale-type-modify">
            <SaleTypeModify />
        </Route>
        <Route path="/sale-type-list">
            <SaleTypeList />
        </Route>
        <Route path="/purchase-type-add">
            <PurchaseTypeAdd />
        </Route>
        <Route path="/purchase-type-modify">
            <PurchaseTypeModify />
        </Route>
        <Route path="/purchase-type-list">
            <PurchaseTypeList />
        </Route>
        <Route path="/tax-category-add">
            <TaxCategoryAdd />
        </Route>
        <Route path="/tax-category-modify">
            <TaxCategoryModify />
        </Route>
        <Route path="/tax-category-list">
            <TaxCategoryList />
        </Route>
        <Route path="/misc-masters-discount-structure-add">
            <DiscountStructureAdd />
        </Route>
        <Route path="/misc-masters-discount-structure-modify">
            <DiscountStructureModify />
        </Route>
        <Route path="/misc-masters-discount-structure-list">
            <DiscountStructureList />
        </Route>
        <Route path="/discount-structre-state-add">
            <StateAdd />
        </Route>
        <Route path="/discount-structre-state-modify">
            <StateModify />
        </Route>
        <Route path="/discount-structre-state-list">
            <StateList />
        </Route>
        <Route path='/discount-structre-country-add'>
            <CountryAdd />
        </Route>
        <Route path='/discount-structre-country-modify'>
            <CountryModify />
        </Route>
        <Route path='/discount-structre-country-list'>
            <CountryList />
        </Route>

        <Route path='/voucher-series-configuration'>
            <VoucherSeriesConfig />
        </Route>
        <Route path='/hardware-configuration'>
            <HardwareConfig />
        </Route>
        <Route path='/user-dash-board-configuration'>
            <UserDashboardConfig />
        </Route>
        <Route path="/email-configuration">
            <EmailConfig />
        </Route>
        <Route path="/bill-reference-printing-documents">
            <BillRefPrintingDocuments />
        </Route>
        <Route path="/bill-reference-printing-reports">
            <BillRefPrintingReports />
        </Route>
        <Route path="/item-group-summary-details-printing">
            <ItemGroupPrinting />
        </Route>

        <Route path="/items-details-printing-in-reports">
            <ItemDetailsPrintingReport />
        </Route>
        <Route path="/maximum-entries-in-voucher">
            <MaxEntriesInVoucher />
        </Route>
        <Route path="/ageing-analysis-account">
            <AgeingAccount />
        </Route>
        <Route path="/ageing-analysis-inventory">
            <AgeingInventory />
        </Route>




        <Route path="/users-add">
            <UsersAdd />
        </Route>
        <Route path="/users-modify">
            <UsersModify />
        </Route>
        <Route path="/users-list">
            <UsersList />
        </Route>

        

        <Route component={PageNotFound}></Route>
    </Switch>
)
export default Routes