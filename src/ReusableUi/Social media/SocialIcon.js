import React from 'react';
import {  View,TouchableOpacity,Linking} from 'react-native';
import CustomIcon from '../../CustomIcon';
export default  SocialIcon=props=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{
            Linking.canOpenURL(props.url)
            .then((supported) => {
              if (!supported) {
                console.log("Can't handle url: " + props.url);
              } else {
                return Linking.openURL(props.url);
              }
            })
            .catch((err) => console.error('An error occurred', err))}}>
                <View style={[props.style]}>
                    <CustomIcon type='material-community' name={props.name} color={props.color} size={27}  />
                </View>
            </TouchableOpacity>
            
        </View>
    )
}