import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, KeyboardAvoidingView,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { Button, CheckBox } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import InputType from '../ReusableUi/Form/InputType';
import SocialIcon from '../ReusableUi/Social media/SocialIcon';
import Logo from '../ReusableUi/Logo';
import Divider from '../ReusableUi/Divider';

export default class EnhancedLogin extends Component {
  state = { checked: false }
  render() {
    var checked = this.state.checked;
    return (
     
        <ImageBackground source={require('../imgs/cube.png')} style={{ flex: 1, height: '30%' }} imageStyle={{ flex: 1, resizeMode: 'stretch' }}>
        <KeyboardAvoidingView  style={{flex:1 ,justifyContent: "flex-end"}} >
        
          <ScrollView style={{ flex: 1}} contentContainerStyle={{ minHeight: '100%' }}>
              <View style={{ alignItems: 'flex-end'}}>
                <Image source={require('../imgs/circle.png')} style={{ resizeMode: 'contain', marginTop:hp('10%'), marginRight: wp('10%') }} />
              </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 0.1 }} />
              <View style={{ flex: 0.8 }}>
                <View>
                  <Logo name='LOGO' path='logo-copy.png' />
                </View>
                <View style={{flex:1, marginTop: hp('7%'), flex: 1, minHeight: '20%', minWidth: '90%',}}>
                 
                  <View style={{
                    borderRadius: 5,
                    backgroundColor: '#ffffff',
                    shadowColor: "#000",
                    shadowOffset: { width: 20, height: 10 },
                    shadowOpacity: 0.2, shadowRadius: 5, elevation: 20,
                    flex:1
                  }}>
                    <View style={styles.header}>
                      <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Login</Text>
                    </View>
                    <InputType  label='Username' style={{ marginTop: hp('2%'), marginHorizontal: wp('4%')}} icon_name='checkbox-marked-circle' icon_color='#28d0dd' />
                    <InputType label='Password' icon_name='chart-bubble' icon_color='#28d0dd' />
                    <Button transparent info style={styles.linkBtn}>
                      <Text style={styles.linkTxtColor}>Forgot Password ?</Text>
                    </Button>
                  </View>


                  <View style={{ flexDirection: 'row', flex:1, minHeight: hp('8%'),marginTop:hp('3%')  }}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                      <CheckBox style={{ borderRadius: 10 }} checked={this.state.checked} onPress={() => this.setState({ checked: !checked })} />
                      <Text style={{ marginLeft: wp('3%'), flexWrap: 'nowrap' }}>Remember Me?</Text>
                    </View>

                    <View style={{ flex: 0.5,alignItems:'flex-end' }}>
                      <TouchableOpacity activeOpacity={.5} >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#16e1d0', '#37a9d4', '#5b78e1']} style={styles.LinearGradientStyle} >
                          <Text style={{ color: 'white', textAlign: 'center' }}> SIGN UP </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>

                  </View>


                </View>



                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                  <Divider style={{ color: '#3e4a59', marginTop: hp('1%'), }} />
                  <View style={{ flex: 0.2, flexWrap: 'nowrap' }}>
                    <Text style={{ textAlign: 'center', color: '#3e4a59', flexWrap: 'nowrap' }}>Social Login</Text>
                  </View>
                  <Divider style={{ color: '#3e4a59', marginTop: hp('1%'), }} />
                </View> 

                <View style={{ flexDirection: 'row',  justifyContent: 'space-around' }}>
                  <SocialIcon name='facebook' url='https://www.facebook.com/' style={[styles.socialIcon, { marginLeft: wp('10%') }]} color='white' />
                  <SocialIcon name='google-glass' url='https://www.google.com/' style={[styles.socialIcon, { backgroundColor: '#ff4644' }]} color='white' />
                  <SocialIcon name='twitter' url='https://www.twitter.com/' style={[styles.socialIcon, { backgroundColor: '#008cf2' }]} color='white' />
                  <SocialIcon name='linkedin' url='https://www.linkedin.com/' style={[styles.socialIcon, { backgroundColor: '#008cf2', marginRight: wp('10%'), }]} color='white' />
                </View>

              </View>

              <View style={{ flex: 0.1 }} />

            </View>

            <View style={{ minHeight: '15%', width: '100%', marginLeft: wp('2%') }}  >
              <ImageBackground source={require('../imgs/buildings.png')} style={{ flex: 1 }} imageStyle={{ flex: 1, resizeMode: 'contain' }}>
                <Button transparent style={{ alignSelf: 'center', marginTop: hp('10%') }} onPress={() => alert('Sign up clicked!')}>
                  <Text style={{ color: 'black' }}>New user ?</Text><Text style={styles.linkTxtColor}> Sign up?</Text>
                </Button>
              </ImageBackground>
            </View>
          </ScrollView>
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
    padding:wp('1%'),
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