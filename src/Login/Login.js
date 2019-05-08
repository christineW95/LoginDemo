import React, {Component} from 'react';
import {Text, View,Image,TouchableOpacity,ScrollView,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";

import { Button, CheckBox } from 'native-base';
import styles from '../Styles/Login';
import {  Row, Grid } from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import InputType from '../ReusableUi/Form/InputType';
import SocialIcon from '../ReusableUi/Social media/SocialIcon';
import Logo from '../ReusableUi/Logo';
import Divider from '../ReusableUi/Divider';
import Footer from '../ReusableUi/Footer';
export default class Login extends Component {
  state={checked:false}
  render() {
    var checked=this.state.checked;
    return (
      <ImageBackground source={require('../imgs/Header.png')} style={styles.HeaderContainer} imageStyle={{resizeMode:'cover',flex:1,position:'absolute'}}>
            <ScrollView contentContainerStyle={{alignContent:'center',alignItems:'center'}}> 
             <Grid style={{}}>
              <Row style={{height:hp('13%')}}/>
              
              <Row style={[styles.row,{height:hp('25%')}]}>
                  <Logo name='LOGO' path='logo-copy.png'/>
              </Row> 
              <Row style={[styles.row,{height:hp('35%')}]}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                          <Text style={{fontWeight:'bold',fontSize:23}}>Login</Text>
                        </View>
                        <InputType label='Username' icon_name='checkbox-marked-circle' icon_color='#28d0dd'/>
                        <InputType label='Password' icon_name='chart-bubble' icon_color='#28d0dd'/>
                        <Button transparent info style={styles.linkBtn} onPress={()=>alert('Clicked!')}>
                          <Text style={styles.linkTxtColor}>Forgot Password ?</Text>
                        </Button>
                    </View>
              </Row>
              <Row style={styles.row}>
                {/* <View style={{flex:1,flexDirection:'row',alignItems:'center'}}> */}
                        <View style={{flex:0.5,flexDirection:'row',justifyContent:'center'}}>
                              <CheckBox style={{borderRadius:10}} checked={this.state.checked} onPress={()=>this.setState({checked:!checked})} />
                              <Text style={{left:wp('5%')}}>Remember Me?</Text>
                        </View>
                        <View style={{flex:0.5,alignItems:'center'}}>
                          <TouchableOpacity activeOpacity = { .5 } >
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#16e1d0','#37a9d4', '#5b78e1']} style={styles.LinearGradientStyle} >
                              <Text  style={{color:'white',textAlign:'center'}}> SIGN UP </Text>
                            </LinearGradient>
                          </TouchableOpacity>
                        </View>
                {/* </View> */}
              </Row>
              <Row style={styles.row}>
                  <Divider style={{color:'#3e4a59'}}/>
                    <Text style={{flex:0.4,textAlign:'center',color:'#3e4a59'}}>Social Login</Text>
                  <Divider style={{color:'#3e4a59'}}/>
              </Row> 
               <Row style={[styles.row,{ alignItems:'flex-start',justifyContent:'space-evenly' }]}>
                 <SocialIcon name='facebook' url='https://www.facebook.com/' style={styles.socialIcon} color='white'/>
                 <SocialIcon name='google-glass'  url='https://www.google.com/' style={[styles.socialIcon,{backgroundColor:'#ff4644'}]} color='white'/>
                 <SocialIcon name='twitter'  url='https://www.twitter.com/' style={[styles.socialIcon,{backgroundColor:'#008cf2'}]} color='white'/>
                 <SocialIcon name='linkedin' url='https://www.linkedin.com/' style={[styles.socialIcon,{backgroundColor:'#008cf2'}]} color='white'/>
              </Row>
              <Row style={[styles.row]}>
                <Button transparent info onPress={()=>alert('Sign up clicked!')}>
                       <Text style={{color:'black'}}>New user ?</Text><Text style={styles.linkTxtColor}> Sign up?</Text>
                </Button>
              </Row> 
            
              </Grid> 
                <Footer/>
              </ScrollView>    
      </ImageBackground>
  
    );
  }
}

