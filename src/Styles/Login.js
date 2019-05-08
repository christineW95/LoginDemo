import { StyleSheet } from 'react-native'
// import { Fonts, Colors, Metrics } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";

export default StyleSheet.create({
  
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      MainContainer :{
     
        flex:1,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
     
      },
     
      LinearGradientStyle: {
        width:wp('20%'),
        height:hp('5%'),
        borderRadius:10,
        justifyContent:'center'
      },
     
      buttonText: {
       fontSize: 18,
       textAlign: 'center',
       margin: 7,
       color : '#fff',
       backgroundColor: 'transparent' 
     
     },
     linkBtn:{
      flex:1,alignSelf:'flex-end',right:20
     },
     linkTxtColor:{
      color:'#6078ea'
     },
     row:{
      height: hp('20%') , justifyContent:'center' ,
       alignItems:'center',flexDirection:'row'
      //  ,width:wp('40%'), 
      
     },
     socialIcon:{
      width:wp('5%'),height:hp('4%'),
      backgroundColor:'#1558c3',borderRadius:20,justifyContent:'center',alignItems:'center'
     },
     form:{
      width:wp('70%') ,alignItems:'center',height:hp('40%'),borderRadius:5,backgroundColor:'#ffffff',shadowColor: "#000",shadowOffset: {width: 20,	height: 10},shadowOpacity: 0.2,shadowRadius:5,elevation: 20,
     },
     header:{
      alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',alignSelf:'flex-start',left: 15,top:10 
     }
     , container: {
      flex: 1,
     
  },
  HeaderContainer: {
    flex: 1,
    // position: 'absolute',
    // top: 0,
    width: '100%',
    // height: '100%',
}, 
HeaderImage: {
    flex: 1, 
    // aspectRatio:1.5,
    // height:'30%',
    // width:null, 
    // height: null,
    // justifyContent: 'flex-end',
    // resizeMode:'stretch'
}
})