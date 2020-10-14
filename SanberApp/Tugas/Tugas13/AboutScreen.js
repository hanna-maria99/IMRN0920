import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconHub from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Left, Right } from 'native-base';

export default class AboutScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.txtHeader} >Tentang Saya</Text>
                </View>

                <View style={styles.Profile}>
                    <Image
                    style={styles.gambar}
                    source={{
                        uri: 'https://pbs.twimg.com/media/Edf1y3_WsAAutTF?format=jpg&name=small',
                    }}/>
                    
                    <Text style={styles.txtNama}>
                        Eunha Jung
                    </Text>
                    <Text style={styles.txtRole}>
                        React Native Developer
                    </Text>
                </View>

                <View style={styles.port}>
                    <Text style={styles.txtPort}>Portofolio</Text>
                    
                    <View  style={styles.portLogo}>
                        <Left>
                           <Icon 
                            size={40}
                            style={styles.gitLogo}
                            name='gitlab'
                            />    
                            <Text
                            style={styles.gitText}>
                            @JungEunbi</Text>
                        </Left>
                       
                        <Right>
                            <Icon 
                            size={40}
                            style={styles.gitLogo}
                            name='github'
                            />
                            <Text
                            style={styles.gitText}>
                            @JungEunbi</Text>
                        </Right>
                        
                     
                    </View>
                </View>

                <View style={styles.port2}>
                   <Text style={styles.txtPort}>Hubungi Saya</Text>
                    <View style={styles.portLogo}>
                        <Left>
                            <IconHub 
                            size={40}
                            style={styles.gitLogo1}
                            name='facebook-official'
                            />
                            
                            <IconHub 
                            size={40}
                            style={styles.gitLogo1}
                            name='instagram'
                            />

                            <IconHub 
                            style={styles.gitLogo1}
                            size={40}
                            name='twitter'
                            />
                        </Left>
                        <Right>
                            <Text
                                style={styles.gitText1}>
                                @JungEunbi
                            </Text>
                            <Text
                                style={styles.gitText1}>
                                @JungEunbi
                            </Text>
                            <Text
                                style={styles.gitText1}>
                                @JungEunbi
                            </Text>
                        </Right>
                    </View>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:'100%',
        padding:20
    },
    Header:{
        alignSelf:'center',
        marginTop:50
    },
    txtHeader:{
        fontSize:30,
        fontWeight:'bold',
        color:'#0d3c6b'
    },
    Profile:{
        marginTop:20,
        alignSelf:'center'
    },
    gambar:{
        width: wp('40%'),
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'black',
        borderRadius:hp('100%'),
        borderWidth:0.1,
    },
    txtNama:{
        marginTop:20,
        color:'#0d3c6b',
        fontSize:25,
        alignSelf:'center',
        fontWeight:'bold'
    },
    txtRole:{
        marginTop:10,
        color:'#3EC6FF',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18
    },
    port:{
        marginTop:20,
        backgroundColor:'#EFEFEF',
        height:150,
        padding:20,
        borderRadius:20,
    },
    txtPort:{
        borderBottomColor: '#0d3c6b',
        borderBottomWidth: 2,
        fontSize:18,
        color:'#0d3c6b'
    },
    portLogo:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop: 30
    },  
    gitLogo:{
        color:"#3EC6FF",
        alignSelf:'center'
    },
    gitText:{
        fontWeight:'bold',
        fontSize:16,
        alignSelf:'center'
    },
    port2:{
        marginTop:20,
        backgroundColor:'#EFEFEF',
        height:250,
        padding:20,
        borderRadius:20,
    },
    gitLogo1:{
        color:"#3EC6FF",
        left:85,
        margin:5
    },
    gitText1:{
        fontWeight:'bold',
        fontSize:18,
        alignSelf:'center',
        margin:15,
        right:60,
        color:'#003366'
    },
    
})