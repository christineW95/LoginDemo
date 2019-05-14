
import React, {Component} from 'react';
import {  View,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import {  Item, Input,  Label } from 'native-base';
import CustomIcon from '../../CustomIcon';
export default  InputType=props=>{
    return(
        <View style={[props.style,{flexDirection:'row',flex:1}]}>
                <Item floatingLabel style={styles.itemStyles}>
                <Label>{props.label}</Label>
                <Input  />
                </Item> 
                <View style={{alignSelf: 'flex-end', position:'absolute', right:5  }}>
                <CustomIcon type='material-community' name={props.icon_name} color={props.icon_color} size={24}  />
                </View>
        </View>
    )
}
const styles=StyleSheet.create({
    itemStyles:{
        flex:1,
    }
})