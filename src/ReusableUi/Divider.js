
import React, {Component} from 'react';
import {  View,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";

export default  Divider=props=>{
    return(
        <View style={[props.style,styles.Container]}/>
    )
}
const styles=StyleSheet.create({
    Container:{
        backgroundColor: '#A2A2A2',height: 2, width: wp('5%'),flex:0.2,justifyContent:'space-between'
    }
})