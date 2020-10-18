import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { Icon, Item } from 'native-base';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            data:require('./Product.json'),
            datas:require('./NewProd.json')
        }
    }
    render(){
        const { data, datas } = this.state
        return(
            <View style={styles.body}>
                <ScrollView style={styles.container}>
                    <View style={styles.topBar}>
                        <View style={styles.searchBar}>
                            <TouchableOpacity 
                                style={styles.btnAlt}>
                                <Icon 
                                style={styles.iconSearch}
                                name='search'
                                type='Octicons'/>  

                                <Text
                                style={styles.txtSearch}> Search Product</Text> 
                                
                                <Icon 
                                style={styles.iconCam}
                                name='camera'
                                type='SimpleLineIcons'/>                              
                            </TouchableOpacity>

                                <Icon 
                                style={styles.iconBell}
                                name='bell'
                                type='Fontisto'/>  
                        </View>

                        </View>

                        <View style={styles.ads}>
                            <Image style={styles.imgAds}
                            source={require('./img/iklan.png')}/>
                        </View>

                        <View style={styles.topIcon}>
                            <Image style={styles.cat}
                            source={require('./img/Categories.png')}/>
                        </View>
  

                    <View style={styles.BottomProd}>
                        <View style={styles.bottomBar}>
                            <View style={styles.topFlash}>
                                <Text style={styles.txtFlash}>Flash Sell</Text>
                                <Text style={styles.dateFlash}>03.30.30</Text>
                                <View style={styles.All}>
                                    <Text style={styles.ket}>All</Text>
                                    <Icon
                                    style={styles.ketArr}
                                    type='AntDesign'
                                    name='right'/>
                                </View>
                            </View>

                            
                            <FlatList
                            horizontal
                                data={data['items']}
                                keyExtractor={(item, index)=> index.toString()}
                                renderItem={({item, index})=>{
                                    return(
                                        <View style={styles.card}>
                                            <Image 
                                            style={styles.imgProduct}
                                            source={item.imgProd}/>
                                            
                                            <Text
                                             style={styles.txtProduct}>
                                                {item.productName}
                                            </Text>
                                            <Text
                                             style={styles.txtPrice}>
                                                {item.price}
                                            </Text>
                                        </View>
                                    )
                                }}
                            />
                           
                        </View>

                        <View style={styles.newProd}>
                        <View style={styles.bottomBar}>
                            <View style={styles.topFlash}>
                                <Text style={styles.txtFlash}>New Product</Text>
                                <View style={styles.All2}>
                                    <Text style={styles.ket}>All</Text>
                                    <Icon
                                    style={styles.ketArr}
                                    type='AntDesign'
                                    name='right'/>
                                </View>
                            </View>

                       
                            <FlatList
                            style={styles.flats}
                            horizontal
                                data={datas['items']}
                                keyExtractor={(item, index)=> index.toString()}
                                renderItem={({item, index})=>{
                                    return(
                                        <View style={styles.card2}>
                                            <Image 
                                            style={styles.imgProduct2}
                                            source={require('./img/sepatu.png')}/>
                                            {/* source={item.imgProd}/> */}
                                            
                                            <Text
                                             style={styles.txtProduct1}>
                                                {item.productName}
                                            </Text>
                                            <Text
                                             style={styles.txtPrice1}>
                                                {item.price}
                                            </Text>
                                        </View>
                                    )
                                }}
                            />  
                         </View>
                       </View>                   
                    </View>

                        <View style={styles.homeButton}>
                            <Image 
                            style={styles.homeTab}
                            source={require('./img/homeTab.png')}/>
                       </View> 

                </ScrollView>
                        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        height:'100%',
    },
    container:{
        backgroundColor:'white',
        padding:15,
        height:'100%',
    },
    searchBar:{
        padding:10,
        borderRadius:5,
        borderWidth:0.2,
        height: 45,
        width: 350
    },  
    iconSearch:{
        left:15,
        fontSize:25,
        color:'rgba(0,0,0,0.2)'
    },
    iconCam:{
        color:'rgba(0,0,0,0.2)',
        fontSize:25,
        right:-180
    },
    btnAlt:{
        flexDirection:'row'
    },
    txtSearch:{
        color:'rgba(0,0,0,0.2)',
        left: 30,
        top:5,
        fontSize:16
    },
    iconBell:{
        color:'rgba(0,0,0,0.2)',
        right:-350,
        top:-25,
        fontSize:25
    },
    imgAds:{
        height:190,
        width:380,
        borderRadius:5
    },
    ads:{
        top: 20,
        height:220
    },
    topIcon:{
        height: 80,
    },
    cat:{
        width:380,
        height:80
    },
    bottomBar:{
        padding:10
    },
    topFlash:{
        top:10,
        flexDirection:'row'
    },  
    txtFlash:{
        fontSize:24,
        fontFamily:'Montserrati',
        fontWeight:'700'
    },
    dateFlash:{
        alignSelf:'center',
        left:10,
        color:'#F89C52'
    },
    ket:{
        fontSize:15,
        alignSelf:'center',
        color:'#616D80'
    },  
    ketArr:{
        color:"#F89C52",
        fontSize:12,
        alignSelf:'center'
    },
    All:{
        flexDirection:'row',
        right:-190
    },
    All2:{
        flexDirection:'row',
        right:-210
    },
    bottomProd:{
        flexDirection:'column',
        height:'70%',
    },
    card:{
        top:15,
        flexDirection:'column',
        height:170,
        width:120,
        backgroundColor:'red'
    },
    card2:{
        top:15,
        flexDirection:'column',
        height:210,
        margin:5
//        backgroundColor:'red',
    },    
    txtProduct:{
        position:'absolute',
        top:120,
        textAlign:'left'
    },
    txtPrice:{
        position:'absolute',
        top:135,
        fontWeight:'bold',
        textAlign:'left'
    },
    txtProduct1:{
        position:'absolute',
        top:170,
        textAlign:'left'
    },
    txtPrice1:{
        position:'absolute',
        top:185,
        fontWeight:'bold',
        textAlign:'left'
    },
    imgProduct:{
        backgroundColor:'yellow',
        height:120,
        aspectRatio:1
    },
    imgProduct2:{
        backgroundColor:'yellow',
        height:170,
        borderRadius:5,
        aspectRatio:1
    },
    flats:{
        flexDirection:'column'
    },
    homeTab:{
       // position:'absolute',
        bottom:0,
        width:'100%',
        height:80
    }
    

})