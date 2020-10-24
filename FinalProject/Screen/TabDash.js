import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../Components/Styling';
import { Button } from 'native-base';

export default class TabDash extends Component{
    constructor(props){
        super(props);
        this.state={
            dataProduct:{},
        }
    }

    componentDidMount(){
        this.getDataProduct()
    }

    getDataProduct=()=>{
        Axios.get('https://next.json-generator.com/api/json/get/VJ4wGpiwY')
        .then(response=>{
            const dataProduct = response.data;
            this.setState({dataProduct});
        })
    }

    // renderCard=({item, index})=>(   
    //     <View style={Style.basenya} key={index}>
    //         <TouchableOpacity
    //         style={Style.card}
    //             // {id: item.id}
    //         >
    //         <Image
    //         style={Style.gambarProduct}
    //         source={{uri:item.gambar_url}}
    //         />

    //             <View style={Style.tulisan}>
    //                 <Text style={Style.judul}

    //                 >
    //                 {item.nama_product}   
    //                 </Text>
                    
    //                 <Text style={Style.price}>
    //                     {item.price}
    //                 </Text>
    //             </View>

    //         </TouchableOpacity>
            
    //     </View>
    // )


    render(){
        // let nama_product = response.data.nama_product;
        // let price = response.data.price;
        // let gambar_url = response.data.gambar_url;

        return(
            <SafeAreaView>
                <FlatList 
                data={this.state.dataProduct}
                renderItem= //{this.renderCard}
                {({item, index})=>(
                    <View style={Style.basenya} key={index}>
                        <TouchableOpacity
                        style={Style.card}
                        onPress={()=>this.props.navigation.navigate('DetailScreen',{
                            params:{
                                // nama_product: item.nama_product,
                                // price: item.price,
                                // gambar_url: item.gambar_url,
                                id:item.id
                            }
                        })}
                            //,
                            // id: item.id,
                            // params:{
                            //     nama_product:nama_product,
                            //     price:price,
                            //     gambar_url:gambar_url
                            // }
                            // })
                            // {id: item.id}
                            // }
                        >
                            
                        <Image
                        style={Style.gambarProduct}
                        source={{uri:item.gambar_url}}
                        />
            
                            <View style={Style.tulisan}>
                                <Text style={Style.judul}
            
                                >
                                {item.nama_product}   
                                </Text>
                                
                                <Text style={Style.price}>
                                    {item.price}
                                </Text>
                            </View>
            
                        </TouchableOpacity>
                        
                    </View>
                )
            }
                keyExtractor={(item, index) => index.toString()}
            />
          </SafeAreaView>
        )
    }
}