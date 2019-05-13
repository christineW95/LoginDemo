
import React, {Component} from 'react';
import {  View,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import {  Item, Input,  Label } from 'native-base';
import CustomIcon from '../../CustomIcon';
export default  InputType=props=>{
    return(
        <View style={[props.style,{alignItems:'flex-end',flexDirection:'row'}]}>
            <Item floatingLabel style={styles.itemStyles}>
             <Label>{props.label}</Label>
             <Input  />
            </Item> 
            <CustomIcon type='material-community' style={{marginRight: wp('2%'),}}  name={props.icon_name} color={props.icon_color} size={24}  />
        </View>
    )
}
const styles=StyleSheet.create({
    itemStyles:{
        //backgroundColor:'red',
        flex:0.6,
        marginLeft: wp('3%'),
        // marginRight: wp('3%'),
        // width:'45%',
        marginTop: hp('2%')
    }
})