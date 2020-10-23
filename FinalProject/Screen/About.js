import { Container } from 'native-base';
import React, { Component } from 'react';
import { ScrollView, View, Image , Text} from 'react-native';
import Style from '../Components/Styling';

export default class About extends Component{

    render(){
        return(
            <View style={Style.base}>
                <View style={Style.containerAbout}>
                        <Image
                            style={Style.gambar1}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAFMXrYJkAhTLSlL3zkQd5wlo6VHpyNB9EWg&usqp=CAU',
                            }}/>
                        <Text style={Style.txtAbt}>About Us</Text>
                        <Text style={Style.txtAbt1}>
                                Lorem Ipsum Skincare Store 
                                merupakan distributor skincare 
                                produk dari Korea Selatan
                                yang berbasis di Jakarta. 
                        
                                Harga sangat terjangkau dan juga barang dijamin original.
                        </Text>
                        <Text style={Style.txtAbt2}>
                            @loremipsum_skincare
                        </Text>
                </View>
                </View>
        )
    }
}