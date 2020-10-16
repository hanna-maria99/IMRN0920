import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class LoginScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.Header}>
                <Image 
                    style={styles.logo}
                    source={require('./Images/sanbercode.png')}/> 
                </View>

                <View style={styles.Title}>
                    <Text
                     style={styles.isiTitle}>
                        Login</Text>
                </View>

                <View style={styles.formLogin}>
                    <Text style={styles.txtForm}>Username / Email</Text>
                    <TextInput
                    style={styles.inputForm}/>

                    <Text style={styles.txtForm}>Password</Text>
                    <TextInput
                    style={styles.inputForm}/>

                    <TouchableOpacity style={styles.Button1}>
                        <Text style={styles.txtBtn}
                        >Masuk</Text>
                    </TouchableOpacity>
                 
                    <Text style={styles.txtAtau}>
                        atau
                    </Text>
                 
                    <TouchableOpacity style={styles.Button2}>
                        <Text  style={styles.txtBtn}
                        >Daftar ?</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:'100%'
    },
    Header:{
        marginTop:80,
        alignItems:'center'
    },  
    logo:{
        height:100
    },
    Title:{
        marginTop: 60,
        alignItems:'center'
    },
    isiTitle:{
        color:'#003366',
        fontSize: 25,
        alignItems:'center'
    },
    formLogin:{
        padding:40
    },
    txtForm:{
        fontSize:16,
        color:'#003366',
        marginTop: 5
    },  
    inputForm:{
        borderWidth:1,
        marginTop:5
    },
    Button1:{
        backgroundColor:'#3EC6FF',
        borderRadius: 18,
        height: 35,
        marginTop: 20,
        width: 120,
        alignSelf:'center'
    },
    Button2:{
        backgroundColor:'#003366',
        borderRadius: 18,
        marginTop: 10,
        height: 35,
        width: 120,
        alignSelf:'center'
    },
    txtBtn:{
        color:'white',
        fontSize: 20,
        textAlign:'center',
        padding: 5
    },
    txtAtau:{
        fontSize:18,
        alignSelf:'center',
        marginTop:10,
        color:'#3EC6FF'
    }

})
