import { Item } from 'native-base';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Left, Right} from 'native-base';

export default class Register extends Component{
    render(){
        return(
            <View style={styles.container}>                
                <View style={styles.Header}>
                    <Text style={styles.txtTitle}>
                        Welcome
                    </Text>
                    <Text style={styles.txtSubTitle}>
                        Sign up to continue
                    </Text>
                </View>

                <View style={styles.Form}>
                    <View style={styles.content}>
                            <Text style={styles.txtForm}> Name </Text>
                            <TextInput style={styles.inputForm}/>

                            <Text style={styles.txtForm}>Email </Text>
                            <TextInput style={styles.inputForm}/>

                            <Text style={styles.txtForm}> Phone number </Text>
                            <TextInput style={styles.inputForm}/>

                            <Text style={styles.txtForm}> Password </Text>
                            <TextInput 
                            secureTextEntry={true}
                            style={styles.inputForm}/>
                    </View>
                    
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('Home')}
                        style={styles.btnSignIn}>
                            <Text
                            style={styles.txtSignIn}> Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('Login')}
                    style={styles.btnLog}>   
                        <Text style={styles.keterangan}>
                            Already have an account?  
                            <Text style={styles.SignIn}> Sign In</Text>
                        </Text>
                    </TouchableOpacity>
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
        padding:30,
        top:50
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
        width: 140,        
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
        top: 70,
        alignSelf:'center'
    },
    SignIn:{
        color:'#F77866',
        fontFamily:"Montserrat"
    }
})
