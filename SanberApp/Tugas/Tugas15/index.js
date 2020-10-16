import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SignIn, CreateAccount} from './Screen';
import {AuthContext} from './context';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{title:'Sign In'}}/>
        
        <AuthStack.Screen 
        name="CreateAccount" 
        component={CreateAccount} 
        options={{title:'Create Account'}}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
