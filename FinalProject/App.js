import React , {Component} from 'react';
import { View } from 'react-native';
import Login from './Screen/Login';
import Dashboard from './Screen/Dashboard';
import TabDash from './Screen/TabDash';
import Navigators from './Navigation/Navigators';
import Detail from './Screen/Detail';
import About from './Screen/About';
import SplashScreen from './Screen/SplashScreen';


export default class App extends Component {
  render(){
    return(
        <Navigators/>
        // <Detail/>
        // <About/>
      // <SplashScreen/>
    //  <TabDash/>
    // <Login/>
      )
  }
}