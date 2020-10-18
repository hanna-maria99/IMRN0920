import { Item } from 'native-base';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Left, Right} from 'native-base';

export default class Login extends Component{
    render(){
        return(

            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.txtTitle}>
                        Welcome Back
                    </Text>
                    <Text style={styles.txtSubTitle}>
                        Sign in to continue
                    </Text>
                </View>

                <View style={styles.Form}>
                    <View style={styles.content}>
                        <Text style={styles.txtForm}>Email</Text>
                            <TextInput style={styles.inputForm}/>

                        <Text style={styles.txtForm}>Password</Text>
                            <Item>
                                <TextInput 
                                secureTextEntry={true}
                                style={styles.inputForm}/>
                               
                                <Icon 
                                style={styles.iconMata}
                                name='eye'/>                                    
                            </Item>

                        <Text style={styles.txtForgot}>
                            Forgot Password?
                        </Text>
                        
                    </View>
                    
                    <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('Home')}
                        style={styles.btnSignIn}>
                            <Text
                            style={styles.txtSignIn}> Sign In</Text>
                    </TouchableOpacity>

                    <Text style={styles.txtOr}>
                        -OR-
                    </Text>

                    <View style={styles.btnLog}>   
                        <TouchableOpacity style={styles.btnAlt}>
                            <Left style={styles.isiBtn}>
                                <Image style={styles.Logo}
                                source={require('./img/fb.png')}/>
                            </Left>

                            <Right>
                                <Text 
                                    style={styles.txtLogo}>
                                    Facebook
                                </Text> 
                            </Right>
                        </TouchableOpacity>
              
                        <TouchableOpacity style={styles.btnAlt}>
                            <Left>
                                <Image style={styles.Logo}
                                source={require('./img/Google.png')}/>
                            </Left>
                       
                            <Right>
                                <Text 
                                    style={styles.txtLogo}>
                                    Google
                                </Text>
                            </Right> 
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%',
        padding:10,
    },
    Header:{
        padding: 20,
        top:50
    },
    txtTitle:{
        fontWeight:'700',
        fontSize: 30,
        fontFamily:'Montserrat'
    },
    txtSubTitle:{
        fontSize: 12
    },
    Form:{
        borderRadius: 5,
        height: 536,
        width: 366,
        alignSelf: 'center',
        borderWidth: 0.1,
        padding:30
        ,top:50
    },
    txtForm:{
        marginTop: 20,
    },
    inputForm:{
        borderBottomColor:'black',
        borderBottomWidth:0.2
    },
    iconMata:{
        position:'absolute',
        right:15,
        width:15
    },
    txtForgot:{
        left: 200,
        top: 30
    },
    btnSignIn:{
        backgroundColor:'#F77866',
        borderRadius: 6,
        height: 50,
        top:50
    },

    txtSignIn:{
        color:'white',
        fontSize: 14,
        top:15,
        fontWeight:'600',
        fontFamily:"Montserrat",
        textAlign:'center'
    },
    txtOr:{
        fontFamily:'Montserrat',
        fontSize:15,
        fontWeight:'500',
        textAlign:'center',
        top:80,
    },
    btnAlt:{
        flexDirection:'column',
        borderRadius:3,
        borderWidth:0.1,
        height:44,
        width: 145,        
        top:100,
        margin:5
    },
    txtLogo:{
        bottom:10,
        textAlign:'center',
        fontWeight:'700',
        fontFamily:'Montserrat',
    },
    Logo:{
        margin: 15,
        left:-50
    },
    isiBtn:{
        flexDirection:'column'
    },    
    btnLog:{
        flexDirection:'row',
    },
})
