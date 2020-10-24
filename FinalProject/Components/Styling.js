import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    //Login
    container:{
        margin: 20,
        top:100
        // backgroundColor:"#FEEDFF"
    },
    txtWelcome:{
        fontWeight:'bold',
        fontSize:24,
        alignSelf:'center',
        top:20
    },  
    gambarLogin:{
        width: wp('40%'),
        height: hp('20%'),
        borderRadius: 120,  
        alignSelf:"center"
    },  
    baseContainer:{
        backgroundColor:'#FEEDFF',
        height:'100%',
    },  
    labeling:{
        fontSize: 14
      },
    formbasic:{
        padding: 30,
      },
    btn:{
        marginTop: 40,
        width: 250,
        alignSelf:'center',
        backgroundColor: 'white',
        elevation:5,
        justifyContent: 'center',
        borderRadius: 10,   
    },
    txtButton:{
        fontWeight:'600',
        fontSize:16
    },  
    //Dashboard Tab
    body:{
        height:'100%',
        elevation:20,
        backgroundColor:'white'
    },
    basenya:{
        marginRight: 18,
        marginLeft:18,
        marginTop: 15,
    },
    card:{
        flex:1,
        alignItems: 'center',
        padding: 10,
        borderWidth:0.1,
        borderRadius:3,
        flexDirection:'row', 
        height: 105,
    },
    gambarProduct:{
        height: 80,
        aspectRatio: 1.5,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 25,
        marginLeft:15
    },
    tulisan:{
        flexDirection:'column',
        marginRight: 90
    },
    judul:{
        flex:1,
        flexWrap: 'wrap',
        fontSize : 16,
        fontWeight: "bold",
        marginLeft: 5,
        marginTop: 20,
        marginBottom: -50,
    },
    price:{
        flexWrap:'wrap',
        fontWeight:'bold',
        flex:1,
        fontSize: 13,
        marginLeft: 6,
        marginRight: 30,
        marginTop: 30,
    },  
    //Dashboard
    containerAtas:{
        height: hp('10%'),
        margin: 10,    
    },
    cardash:{
        flex:1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        flexDirection:'row', 
        height: 80,
        elevation:3,
        backgroundColor: '#feedff'
    },
    gambar:{
        width: wp('20%'),
        height: hp('10%'),
        borderRadius: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nama:{
        flexDirection:'column',
        marginLeft: 30,
    },    
    namanya:{
        alignSelf:'center',
        fontSize : hp('2.5%'),
    },
    lokasi:{
        fontSize: hp('2.5%'),
        fontWeight: "bold",
    },
    containerBawah:{
        height: hp('80%'),
    
     },
     ScrollableTabbs:{
        borderWidth:0,
    },
    //Navigator Bottom
    BottomTabs:{
        position:'absolute',
    },
    //About
    txtAbt:{
        fontSize:25,
        alignSelf:'center',
        top:20
    },
    txtAbt1:{
        top:30,
        fontSize:18,
        padding:40,
        textAlign:'justify',

    },
    txtAbt2:{
        fontSize:18,
        padding:40,
        alignSelf:'center',
        fontWeight:"bold"
    },
    containerAbout:{
        backgroundColor:'white',
        margin:20,
        borderRadius:10,
        height:500

    },
    base:{
        backgroundColor: '#feedff',
        justifyContent:'center',
        height:'100%'
    },
    gambar1:{
        width: wp('30%'),
        height: hp('15%'),
        borderRadius: 120,
        alignSelf:"center",
        top:10
    },
    //Splash
    Base:{
        backgroundColor:'#FEEDFF',
        height:'100%'
    },
    baseShape:{
        backgroundColor:"#c7d1d0",
        height:300,
        width:300,
        borderRadius:200,
        alignSelf:"center",
        top:300,
        position:'absolute',
        justifyContent:'center'
    },
    Logo:{
        alignSelf:'center',
        justifyContent:'center',
        position:'relative',
        zIndex:10
    },
   //Detail
   card2:{
        flex:1,
        alignItems: 'center',
        padding: 25,
        borderWidth:0.1,
        borderRadius:3,
        flexDirection:'column', 
    }, 
    gambarProduct2:{
        height: 200,
        aspectRatio: 1.5,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
},
    containerAbout2:{
        backgroundColor:'white',
        margin:20,
        borderRadius:10,
        height:500
    },
    tulisan2:{
        flexDirection:'column',
    },
    judul2:{
        flexWrap: 'wrap',
        fontSize : 20,
        fontWeight: "bold",
        textAlign:'center',
        marginTop: 20,
    },
    price2:{
        flexWrap:'wrap',
        fontWeight:'bold',
        fontSize: 16,
        textAlign:"center",
        marginTop: 10,
    },  
    desc:{
        textAlign:"justify",
        fontSize : 16,
        marginLeft: 5,
        flexWrap: 'wrap',
        flex:1,
        top:10
    }
})