import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, KeyboardAvoidingView,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { Button, CheckBox } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import InputType from '../ReusableUi/Form/InputType';
import SocialIcon from '../ReusableUi/Social media/SocialIcon';
import Logo from '../ReusableUi/Logo';
import Divider from '../ReusableUi/Divider';
import { TextInput } from '../../node_modules/react-native-paper';

export default class KeyboardAvoidingViewForm extends Component {
  state = { checked: false }
  render() {
    var checked = this.state.checked;
    return (
      
        <ImageBackground  source={require('../imgs/cube.png')} style={{ flex: 1, height: '30%' }} imageStyle={{ flex: 1, resizeMode: 'stretch' }}>
       <KeyboardAvoidingView  style={{flex:1 ,justifyContent: "flex-end"}} >
        {/* <SafeAreaView style={{flex:1}}> */}
            <View>
                <TextInput placeholder="abc"/>
            </View>
        {/* </SafeAreaView> */}
       
       
         </KeyboardAvoidingView>
          </ImageBackground> 
    );
  }
}

const styles = StyleSheet.create({

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
  MainContainer: {

    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },

  LinearGradientStyle: {
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: 10,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 7,
    color: '#fff',
    backgroundColor: 'transparent'

  },
  linkBtn: {
    flex: 1, alignSelf: 'flex-end', right: 20
  },
  linkTxtColor: {
    color: '#6078ea'
  },
  row: {
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  socialIcon: {
    width: wp('5%'), height: hp('4%'),
    backgroundColor: '#1558c3', borderRadius: 20, justifyContent: 'center', alignItems: 'center'
  },
  form: {
  },
  header: {
    alignContent: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start', left: 15, top: 10
  }
  , container: {
    flex: 1,

  },
  HeaderContainer: {
  },
  HeaderImage: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '25%'
  }
})