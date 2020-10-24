import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
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
        Axios.get('https://next.json-generator.com/api/json/get/VJ4wGpiwY')
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
            {/* <Image
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
                </View> */}

            {/* </TouchableOpacity> */}
            
        </View>
    )


    render(){
        // const {nama_product} = this.props.route.params;
        // const {gambar_url} = this.props.route.params;
        // const {price} = this.props.route.params;
        return(           
            // <ScrollView>
                <FlatList 
                data={this.state.dataProduct}
                renderItem=//{this.renderCard}
                {({item, index})=>(
                    <View style={Style.containerAbout2} 
                    key={index}
                    >
                      <View style={Style.card2}>
                          
                        <Image
                        style={Style.gambarProduct2}
                        source={{uri:item.gambar_url}}
                        // source={{uri:{gambar_url}}}
                        />
            
                            <View style={Style.tulisan2}>
                                <Text style={Style.judul2}>
                                {item.nama_product}   
                                    {/* {nama_product} */}
                                </Text>
                                
                                <Text style={Style.price2}>
                                    {item.price}
                                    {/* {price} */}
                                </Text>
                                
                                <Text style={Style.desc}>
                                    {item.deskripsi}
                                    {/* {deskripsi} */}
                                </Text>
                            </View>
                            
                            </View>
                    </View>
                )}   
                keyExtractor={(item, index) => index.toString()}
            /> 
          //</ScrollView>
        )
    }
}