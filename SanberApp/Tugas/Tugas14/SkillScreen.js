import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Icon} from 'native-base';
import skillData from './skillData.json';

export default class SkillScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: require('./skillData.json'),
            hugeText:''
         };
    }


    render(){
        const { data } = this.state
        return(
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Image    
                        style={styles.logo}
                        source={require('../Tugas13/Images/sanbercode.png')}/> 
                </View>

                <View style={styles.profil}>
                    <Icons 
                    size={50}
                    style={styles.iconProfile}
                    name='person-pin'/>
                    <View style={styles.txtPr}>
                        <Text style={styles.txtProf}>
                            Hai,
                        </Text>
                        <Text style={styles.txtProf1}>
                            Jung Eunha
                        </Text>
                    </View>
                </View>

                <View style={styles.Title}> 
                    <Text style={styles.title}>SKILL</Text>
                </View>

                <View style={styles.topbar}>
                    <TouchableOpacity style={styles.subBar}>
                        <Text style={styles.subBar1}> Library / Framework </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.subBar2}>
                        <Text style={styles.subBar1}> Bahasa Pemrograman </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subBar3}>
                        <Text style={styles.subBar1}> Teknologi </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.isiBoard}>
                    <SafeAreaView>
                        <FlatList 
                            data={data['items']}
                            keyExtractor={(item, index)=> index.toString()}
                            renderItem={({item, index})=>{
                                return(
                                <View 
                                    style={styles.bgCard}
                                    key={index}>
                                    
                                    <TouchableOpacity
                                    style={styles.card}>
                                        <View style={styles.tulisan}>
                                    
                                                <Icon
                                                    type={item.iconType}
                                                    name={item.iconName}                                               
                                                    style={styles.logoCard}
                                                />
                                         
                                                <Text style={styles.judul}>
                                                    {item.skillName}
                                                </Text>
                                                
                                                <Text style={styles.deskripsi}>
                                                    {item.categoryName}
                                                </Text>
                                                
                                                <Text style={styles.persen}>
                                                    {item.percentageProgress}
                                                </Text>
                                                                            
                                               
                                                    <Icon
                                                    name='right'
                                                    type='AntDesign'
                                                    style={styles.rightIcon}/>
                                                
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                )
                            }}
                        />
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'white'
    },
    Header:{
        height:70,
        padding:20
    },
    logo:{
        aspectRatio: 0.1, 
        resizeMode: 'contain',
        height: 80,
        right:-60,
        position:'absolute',
    },
    profil:{
        alignItems: 'center',
        padding: 10,
        flexDirection:'row',
        top:-10,
        height:90
    },
    iconProfile:{
        color:'#3EC6FF'
    },
    txtProf:{
        left:10,
        fontSize:14,
        fontWeight:'bold'
    },
    txtProf1:{
        fontWeight:'bold',
        left:10,
        fontSize:18,
    },
    txtPr:{
        flexDirection:'column' 
    },
    Title:{
        borderBottomColor:'#B4E9FF',
        borderBottomWidth:5,
        margin:10,
        marginBottom:2,
        marginTop:-20,
        height:50,
    },
    title:{
        fontSize:36,
        color:'#003366'
    },
    subBar:{
        height:30,

        width:130,
        backgroundColor:'#B4E9FF',
        borderRadius:6,
        alignItems:'center'
    },
    subBar1:{
        fontWeight:'bold',
        marginTop:5,
        color:'#003366'
    },
    topbar:{
        flexDirection:'row',
        margin:10
    },
    subBar2:{
        marginLeft:10,
        height:30,
        width:150,
        backgroundColor:'#B4E9FF',
        borderRadius:6,
        alignItems:'center'
    },
    subBar3:{
        marginLeft:10,
        height:30,
        width:90,
        backgroundColor:'#B4E9FF',
        borderRadius:6,
        alignItems:'center'
    },
    isiBoard:{
        height:'75%',
        margin: -5,
        backgroundColor:'white'
    },
    card:{
        flex:1,
        alignItems: 'center',
        padding: 10,
        borderRadius:10,
        elevation:3,
        flexDirection:'row', 
        backgroundColor: '#B4E9FF',
    },
    tulisan:{
        flex:1,
        flexWrap: 'wrap',
        flexDirection:'column',
    },
    judul:{
        fontSize : 24,
        fontWeight: "bold",
        marginLeft: 5,
        marginTop: 5,
        flexDirection:'column',
        color:'#003366'
    },
    deskripsi:{
        flex:1,
        fontWeight:'bold',
        fontSize: 18,
        marginLeft: 6,
        flex:1,
        flexWrap: 'wrap',
        flexDirection:'column',
        color:'#3EC6FF'
    },

    logoCard:{
        flexDirection:'column',
        fontSize:100,
        top:15,
        flexWrap: 'wrap',
        color:'#003366'
    },
    bgCard:{
        height:150,
        marginRight: 18,
        marginLeft:18,
        marginTop: 15,
    },
    persen:{
        fontSize:60,
        color:'white',
        fontWeight:'bold',
        position:'absolute',
        right: '20%',
        top:'50%'
    },
    rightIcon:{
        fontSize: 80,
        top: 30,
        position:'absolute',
        right:-10
    }
  
})