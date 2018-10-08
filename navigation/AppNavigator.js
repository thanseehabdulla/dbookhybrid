import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from "../screens/LoginScreen";
import HomeNavigator from "./HomeNavigator";

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Home: HomeNavigator,
    login: {screen: LoginScreen},
    Main: MainTabNavigator,

});


