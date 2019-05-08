import React from 'react';
import {  View,StyleSheet,Image} from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
export default  Footer=props=>{
    return(
        <View style={styles.backgroundContainer}>
            <Image style={styles.bakcgroundImage} source={require('../imgs/buildings.png')}/>
        </View>
    )
}
const styles=StyleSheet.create({
   backgroundContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: widthPercentageToDP('95%'),
    height: heightPercentageToDP('25%'),
}, 
bakcgroundImage: {
    flex: 1, 
    width: null, 
    height: null,
    resizeMode:'contain',
    zIndex:-1
},
})
