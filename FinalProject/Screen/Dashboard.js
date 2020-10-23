import { Container} from 'native-base';
import React, { Component } from 'react';
import { ScrollView, Image, View , Text} from 'react-native';
import Style from '../Components/Styling';
import TabDash from './TabDash';

export default class Dashboard extends Component{
    render(){
        return(
                <View style={Style.body}>
                    <View style={Style.containerAtas}>
                        <View style={Style.cardash}>
                            <Image
                            style={Style.gambar}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAFMXrYJkAhTLSlL3zkQd5wlo6VHpyNB9EWg&usqp=CAU',
                            }}/>
                            <View style={Style.nama}>
                                <Text style={Style.namanya}>
                                    Welcome to
                                </Text>
                                <Text style={Style.lokasi}>
                                    Lorem Ipsum Skincare Store
                                </Text>
                            </View>
                        </View>
                </View>

                    <View style={Style.containerBawah}>
                        <ScrollView 
                        contentContainerStyle={{
                            flex:1,
                            flexGrow: 1}}>
                            <Container> 
                                <TabDash/>
                                {/* <IsiTab/> */}
                            </Container>
                        </ScrollView>
 
                    </View>
                </View>
        )
    }
}