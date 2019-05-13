import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { Button, CheckBox } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import InputType from '../ReusableUi/Form/InputType';
import SocialIcon from '../ReusableUi/Social media/SocialIcon';
import Logo from '../ReusableUi/Logo';
import Divider from '../ReusableUi/Divider';

export default class Login extends Component {
  state = { checked: false }
  render() {
    var checked = this.state.checked;
    var ratio=370/140;
    return (
      <ImageBackground source={require('../imgs/Header.png')} style={styles.HeaderContainer} imageStyle={{ resizeMode: 'cover', flex: 1 }}>
        <ScrollView style={{ flex: 1 }}
				contentContainerStyle={{	minHeight: '100%'	}}>
          <View style={{ flex: 1}}>

            <View style={{marginTop:hp('12%')}}>
              <Logo name='LOGO' path='logo-copy.png' />
            </View>

            <View style={{ alignItems: 'center',marginTop:hp('2%'), flex: 1, minHeight: '30%', minWidth: '60%' }}>
              <View style={{
                alignItems: 'center',
                borderRadius: 5,
                backgroundColor: '#ffffff',
                shadowColor: "#000",
                shadowOffset: { width: 20, height: 10 },
                shadowOpacity: 0.2, shadowRadius: 5, elevation: 20,
              }}>
                <View style={styles.header}>
                  <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Login</Text>
                </View>
                <InputType label='Username' icon_name='checkbox-marked-circle' icon_color='#28d0dd' />
                <InputType label='Password' icon_name='chart-bubble' icon_color='#28d0dd' />
                <Button transparent info style={styles.linkBtn}>
                  <Text style={styles.linkTxtColor}>Forgot Password ?</Text>
                </Button>
              </View>
            </View>


            <View style={{flex:1,flexDirection:'row',minHeight:hp('10%')}}>
                <View style={{ flex: 0.5, flexDirection: 'row',marginTop:hp('3%'),marginLeft:wp('18%')}}>
                  <CheckBox style={{ borderRadius: 10 }} checked={this.state.checked} onPress={() => this.setState({ checked: !checked })} />
                  <Text style={{ marginLeft: wp('3%') }}>Remember Me?</Text>
                </View>
                <View style={{ flex: 0.5, alignItems: 'center' ,marginTop:hp('3%') ,marginRight:wp('12%')}}>
                  <TouchableOpacity activeOpacity={.5} >
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#16e1d0', '#37a9d4', '#5b78e1']} style={styles.LinearGradientStyle} >
                      <Text style={{ color: 'white', textAlign: 'center' }}> SIGN UP </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
            </View>

           <View style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
               <Divider style={{ color: '#3e4a59',marginTop: hp('1%'), }} />
               <View style={{flex:0.2,flexWrap:'nowrap'}}>
                 <Text style={{  textAlign: 'center', color: '#3e4a59',flexWrap:'nowrap' }}>Social Login</Text>
               </View>
              <Divider style={{ color: '#3e4a59' ,marginTop: hp('1%'),}} />
           </View>


          <View style={{flexDirection:'row',flex:1,marginTop:hp('2%'),justifyContent: 'space-evenly'}}>
              <SocialIcon name='facebook' url='https://www.facebook.com/' style={styles.socialIcon} color='white' />
              <SocialIcon name='google-glass' url='https://www.google.com/' style={[styles.socialIcon, { backgroundColor: '#ff4644' }]} color='white' />
              <SocialIcon name='twitter' url='https://www.twitter.com/' style={[styles.socialIcon, { backgroundColor: '#008cf2' }]} color='white' />
              <SocialIcon name='linkedin' url='https://www.linkedin.com/' style={[styles.socialIcon, { backgroundColor: '#008cf2' }]} color='white' />
          </View>
          
       
         

            {/* <View>
               <View style={{position:'absolute',alignSelf:'center',zIndex:1}} >
               
              </View>
              <Image style={{  
                width: '100%' ,
              bottom:0,zIndex:-1}} source={require('../imgs/buildings.png')} />
            style={{minHeight:'60%'}}</View> */}


         <View style={{minHeight:'25%',width:'95%',marginLeft:wp('2%')}}  >
            <ImageBackground source={require('../imgs/buildings.png')} style={{flex:1 }} imageStyle={{
              flex: 1, 
              //width:'100%',
              minHeight:'70%',
              //marginTop:hp('5.5%'),
              resizeMode:'contain',
              // marginLeft:wp('4%')
            //  justifyContent:'center'
              }} >
                <Button transparent style={{alignSelf:'center',marginTop:hp('10%')}}  onPress={() => alert('Sign up clicked!')}>
                  <Text style={{ color: 'black'}}>New user ?</Text><Text style={styles.linkTxtColor}> Sign up?</Text>
                </Button>
         </ImageBackground>
         </View>
         
           </View>  
        </ScrollView>
     
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
    //  ,width:wp('40%'), 

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
    flex: 1,
    // position: 'absolute',
    // top: 0,
    // height: '100%',
  },
  HeaderImage: {
    flex: 1,
    // aspectRatio:1.5,
    // height:'30%',
    // width:null, 
    // height: null,
    // justifyContent: 'flex-end',
    // resizeMode:'stretch'
  },
  backgroundContainer: {
    flex: 1,
    //  justifyContent:'flex-end',
    position: 'absolute',
    bottom: 0,
    // backgroundColor:'red',
    width: '100%',
    height: '25%'
  },
  bakcgroundImage: {
    // flex: 1,
    // // width: null,
    // // height: null,
    // resizeMode: 'contain',
    // width:'100%',
    // height:'40%'
  },
})