import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../Components/Styling';

export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            dataProduct:{}
        }
    }

    componentDidMount(){
        this.getDataProduct()
    }

    getDataProduct=()=>{
        Axios.get('http://www.json-generator.com/api/json/get/cfzEuCLnPC?indent=2')
        .then(response=>{
            const dataProduct = response.data;
            this.setState({dataProduct});
        })
    }

    renderCard=({item, index})=>(
        <View style={Style.basenya} key={index}>
            {/* <TouchableOpacity
            style={Style.card}
            onPress={()=> this.props.navigation.navigate('Main',
            {
                screen:'Detail',
            })}
            >
                 */}
            <Image
            style={Style.gambarProduct}
            source={{uri:item.gambar_url}}
            />

                <View style={Style.tulisan}>
                    <Text style={Style.judul}>
                    {item.nama_product}   
                    </Text>
                    
                    <Text style={Style.price}>
                        {item.price}
                    </Text>

                    <Text style={Style.judul}>
                        {item.deskripsi}
                    </Text>
                </View>

            {/* </TouchableOpacity> */}
            
        </View>
    )


    render(){
        const {nama_product, gambar_url, price} = this.props.route.params;
        return(
            <ScrollView>
                <FlatList 
                data={this.state.dataProduct}
                renderItem=//{this.renderCard}
                {({item, index})=>(
                    <View style={Style.basenya} key={index}>
                      
                        <Image
                        style={Style.gambarProduct}
                        // source={{uri:item.gambar_url}}
                        source={{uri:{gambar_url}}}
                        />
            
                            <View style={Style.tulisan}>
                                <Text style={Style.judul}>
                                {/* {item.nama_product}    */}
                                {nama_product}
                                </Text>
                                
                                <Text style={Style.price}>
                                    {/* {item.price} */}
                                    {price}
                                </Text>

                                
                                <Text style={Style.judul}>
                                    {/* {item.price} */}
                                    {item.deskripsi}
                                </Text>
                            </View>
                        
                    </View>
                )
            }
                keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        )
    }
}