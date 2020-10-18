import React, { Component } from 'react';
import {View} from 'react-native';
import Login from './Login';
import Register from './Register';
import HomeScreen from './HomeScreen';
import AppNavigator from './AppNavigation';
import SplashScreen from './SplashScreen';

export default class App extends Component{
    render(){
        return(
            // <Login/>
            // <Register/>
            //<HomeScreen/>
            <AppNavigator/>
            // <SplashScreen/>
            )
    }
}