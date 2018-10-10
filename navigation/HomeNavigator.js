import DisplaySalesScreen from "../screens/DisplaySalesScreen";
import DisplayPurchaseDetailScreen from "../screens/DisplayPurchaseDetailScreen";
import {createStackNavigator} from "react-navigation";
import DisplaySalesDetailScreen from "../screens/DisplaySalesDetailScreen";
import AddSalesScreen from "../screens/AddSalesScreen";
import DisplayPurchaseScreen from "../screens/DisplayPurchaseScreen";
import AddPurchaseScreen from "../screens/AddPurchaseScreen";
import HomeMainScreen from "../screens/HomeMainScreen";

export default createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    HomeMain: {screen: HomeMainScreen},
    Purchase: {screen: AddPurchaseScreen},
    PurchaseDetail: {screen: DisplayPurchaseDetailScreen},
    Sales: {screen: AddSalesScreen},
    SalesDetail: {screen: DisplaySalesDetailScreen},
    PurchaseList: {screen: DisplayPurchaseScreen},
    SalesList: {screen: DisplaySalesScreen},

}, {
    initialRouteName: 'HomeMain',
});