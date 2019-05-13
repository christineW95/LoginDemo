

import React from 'react';
import {  View,Text,Image,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";

export default  Logo=props=>{
    return(
        <View style={styles.container}>
                    <View>
                        <Image source={require('../imgs/logo-copy.png')} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>{props.name}</Text>
                    </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    logo:{
      fontWeight:'bold',fontSize:20,
    },
    logoContainer:{
        marginTop:hp('1.5%'),marginLeft:wp('1%')
    }
})