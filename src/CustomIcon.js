import React, { Component } from 'react';
import { View } from 'react-native';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default class CustomIcon extends Component {
    render() {
        // console.warn('type')

        let iconSize = this.props.size ? this.props.size : 27;  //style={this.props.style}
        let color = this.props.color ? this.props.color : '#384850';
        let Icon = this._getIconType(this.props.type);
        return (
               <Icon {...this.props} style={[this.props.style]} size={iconSize} color={color} />
            
        );
    }
    _getIconType(type) {
        switch (type) {
            case 'bravo':
                return BravoIcon;
            case 'zocial':
                return ZocialIcon;
            case 'octicon':
                return OcticonIcon;
            case 'material':
                return MaterialIcon;
            case 'material-community':
                return MaterialCommunityIcon;
            case 'ionicon':
                return Ionicon;
            case 'foundation':
                return FoundationIcon;
            case 'evilicon':
                return EvilIcon;
            case 'entypo':
                return EntypoIcon;
            case 'font-awesome':
                return FAIcon;
                case 'font-awesome5':
                return FAIcon5;
            case 'simple-line-icon':
                return SimpleLineIcon;
            default:
                return MaterialIcon;
        }

    }
}
