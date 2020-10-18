import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    performTimeConsumingTask = async()=>{
        return new Promise((resolve)=>
        setTimeout(
            ()=>{resolve('result')},
            5000
            )
        )
    }

    async componentDidMount(){
        const data= await this.performTimeConsumingTask();
        if(data!==null){
            this.props.navigation.navigate('Register')
        }
    }

    render(){
        return(
            <View style={styles.Base}>
                <TouchableOpacity
                 onPress={this.props.navigation.navigate('Register')} 
                 style={styles.baseShape}>
                     <Image style={styles.Logo}
                    source={require('./img/logosanber.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Base:{
        backgroundColor:'white',
        height:'100%'
    },
    baseShape:{
        backgroundColor:"#c7d1d0",
        height:300,
        width:300,
        borderRadius:200,
        alignSelf:"center",
        top:300,
        position:'absolute',
        justifyContent:'center'
    },
    Logo:{
        alignSelf:'center',
    justifyContent:'center',
        position:'relative',
        zIndex:10
    },
   

})