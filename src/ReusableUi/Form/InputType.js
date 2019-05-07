
import React, {Component} from 'react';
import {  View,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import {  Item, Input,  Label } from 'native-base';
import CustomIcon from '../../CustomIcon';
export default  InputType=props=>{
    return(
        <View style={[props.style,{alignItems:'flex-end'}]}>
            <Item floatingLabel style={styles.itemStyles}>
             <Label>{props.label}</Label>
             <Input  />
            </Item> 
            <CustomIcon type='material-community' name={props.icon_name} color={props.icon_color} size={24}  />
        </View>
    )
}
const styles=StyleSheet.create({
    itemStyles:{
        width:wp('60%'),top:hp('4%')
    }
})