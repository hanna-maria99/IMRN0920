import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Home from './HomeScreen';
import Register from './Register';
import SplashScreen from './SplashScreen';

const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthStackScreen=()=>{
    return(
    <AuthStack.Navigator
    initialRouteName={SplashScreen}>
        <AuthStack.Screen name="SplashScreen" component={SplashScreen}
        options={{
            headerShown:false
        }}/>
        <AuthStack.Screen name="Register" component={Register}
        options={{
            headerShown:false
        }}/>
        <AuthStack.Screen name="Login" component={Login}
        options={{
            headerShown:false
        }}/>
        <AuthStack.Screen name="Home" component={Home}
        options={{
            headerShown:false
        }}/>

    </AuthStack.Navigator>
    )
}

export default class AppNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen 
                    name="Auth" 
                    component={AuthStackScreen}
                    options={{
                        headerShown:false
                    }}/>
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}