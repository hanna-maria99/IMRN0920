import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './Tugas12/videoItems';
import data from './data.json';

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.navigationBar}>
                    <Image 
                    style={styles.logo}
                    source={require('./Tugas12/Images/logo.png')}/>
             

               <View style={styles.rightNav}>
                   <TouchableOpacity>
                        <Icon name='search'
                        size={25}
                        style={styles.navIcon}/>
                   </TouchableOpacity>
                   <TouchableOpacity>
                        <Icon name='account-circle'
                        size={25}
                        style={styles.navIcon}/>
                   </TouchableOpacity>
               </View>
            </View>

                <View style={styles.body}>                   
                    <FlatList
                        data={data.items}
                        renderItem={(video)=>
                            <VideoItem video={video.item} />}
                        keyExtractor={(item)=>item.id}
                        ItemSeparatorComponent={()=>
                            <View style={{height:0.5,backgroundColor:'#E5E5E5'}}/>}
                    />
                </View>

                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.isiTab}>
                        <Icon name='home'
                        size={25}/>
                        <Text> Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.isiTab}>
                        <Icon name='whatshot'
                        size={25}/>                        
                        <Text> Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.isiTab}>
                        <Icon name='subscriptions'
                        size={25}/>
                        <Text> Subscriptions </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.isiTab}>
                        <Icon name='folder'
                        size={25}/>
                        <Text> Library </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    navigationBar:{
        backgroundColor:'white',
        height: 55,
        elevation:5,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logo:{
        width: 100,
        height: 22,
        marginTop:15
    },
    rightNav:{
        flexDirection:'row',
        marginTop:15
    },
    navIcon:{
        marginLeft:25
    },
    body:{
        flex:1
    },
    tabBar:{
        height:60,
        borderTopWidth: 0.5,
        borderColor:'#E5E5E5',
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    isiTab:{
        alignItems:'center',
        justifyContent:'center'
    }
    
})
