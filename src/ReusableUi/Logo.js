

import React from 'react';
import {  View,Text,Image,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";

export default  Logo=props=>{
    return(
        <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../imgs/logo-copy.png')} style={styles.img} />
                    </View>
                    <View style={styles.txtContainter}>
                        <Text style={styles.logo}>{props.name}</Text>
                    </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',

    },
    txtContainer:{
       flex:0.7,
    },
    logoContainer:{
       flex:0.3,
    //    backgroundColor:'red',
       alignItems:'flex-end'
      
    },
    logo:{
      fontWeight:'bold',fontSize:20,
      //alignItems:'flex-start',
    //right:wp('5%')

    },
    img:{
   
    },
    
    

})