import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';

import LoginScreen from '../Screen/Login';
import Style from '../Components/Styling';
import Dashboard from '../Screen/Dashboard';
import AboutScreen from '../Screen/About';
import DetailScreen from '../Screen/Detail';
import SplashScreen from '../Screen/SplashScreen';
import Login from '../Screen/Login';
import TabDash from '../Screen/TabDash';


const AuthStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const SplashStack = createStackNavigator();
const HomeStack = createStackNavigator();

const SplashStackScreen =()=>(
    <SplashStack.Navigator>
        <SplashStack.Screen name="Splash" component={SplashScreen}
         options={
            {
            headerShown: false
            }
        }/>
    </SplashStack.Navigator>
);

const AuthStackScreen=()=>(
    <AuthStack.Navigator
    initialRouteName={LoginScreen}>
        <AuthStack.Screen name='Login' component={LoginScreen}
          options={
            {
            headerShown: false
            }
        }/>
    </AuthStack.Navigator>
);

const MainStackScreen=()=>(
    <MainStack.Navigator>
        <MainStack.Screen name='Btm' component={BottomTabScreen}/>
        {/* <MainStack.Screen name='Detail' component={DetailScreen}/>
        <MainStack.Screen name='DashTab' component={TabDash}/> */}
    </MainStack.Navigator>
);

const HomeStackScreen=()=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name='Detail' component={DetailScreen}/>
        <HomeStack.Screen name='tabDash' component={TabDash}/>
    </HomeStack.Navigator>
)

const BottomTabScreen=()=>(
    <BottomTab.Navigator 
    // style={Style.BottomTabs}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                ? 'md-home'
                : 'md-home-outline';
            } else if (route.name === 'About Us') {
                iconName = focused ? 'md-information-circle' : 'md-information-circle-outline';
            }

            return <Icon
                type="Ionicons"
                name={iconName} size={size} color={color} />;
            },
        })}
    >
        <BottomTab.Screen name="Home" component={Dashboard}/>
        <BottomTab.Screen name="About Us" component={AboutScreen}/>
    </BottomTab.Navigator>
)


export default class Navigators extends Component{
    render(){
        return(
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen
                    name="Splash"
                    component={SplashStackScreen}
                    options={
                        {
                        headerShown: false
                        }
                    }
                    />
                    <RootStack.Screen
                    name="Auth"
                    component={AuthStackScreen}
                    options={
                        {
                        headerShown: false
                        }
                    }/>
                     <RootStack.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={
                        {
                        headerShown: false
                        }
                    }/>
                    <RootStack.Screen
                    name="Bottom"
                    component={BottomTabScreen}
                    options={
                        {
                        headerShown: false
                        }
                    }/>
                    
                    <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={
                        {
                        headerShown: false
                        }
                    }/>

                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}