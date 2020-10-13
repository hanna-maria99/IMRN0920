import React, { Component } from 'react';
import StyleSheet, { FlatList, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons';
//import VideoItem from './components/videoItem';
import data from '../data.json'

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('./images/logo.png')} style={styles.logo}/>
                </View>

                <View style={styles.rightNav}>
                    <TouchableOpacity>
                        <Icon name='search' size={25} style={styles.navItem}/>  
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='account-circle' size={25} style={styles.navItem}/>  
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <FlatList
                        data={data.items}
                        renderItem={(video)=><VideoItem/>}
                        keyExtractor={(item)=> item.id}
                        ItemSeparatorComponent={()=> <View> </View>}
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex :1,
  
    },
    navBar:{
        height: 55,
        backgroundColor: 'white',
        elevation :3,
        paddingHorizontal :15,
        flexDirection:'row',    
        alignItems: 'center'
    },
    logo:{
        width: 98,
        height: 22
    },
    rightNav:{

    }
})
