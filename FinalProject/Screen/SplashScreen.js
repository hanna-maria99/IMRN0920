import React, { Component } from 'react';
import {View,  Image, TouchableOpacity} from 'react-native';
import Style from '../Components/Styling';

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    performTimeConsumingTask = async()=>{
        return new Promise((resolve)=>
        setTimeout(
            ()=>{resolve('result')},
            3000
            )
        )
    }

    async componentDidMount(){
        const data = await this.performTimeConsumingTask();
        if(data!==null){
           this.props.navigation.navigate('Auth', {
               screen:'Login'
           })
        }
    }


    render(){
        return(
            <View style={Style.Base}>
                <TouchableOpacity>
                        <Image
                            style={Style.baseShape}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAFMXrYJkAhTLSlL3zkQd5wlo6VHpyNB9EWg&usqp=CAU',
                            }}/>
                </TouchableOpacity>
            </View>
        )
    }
}
