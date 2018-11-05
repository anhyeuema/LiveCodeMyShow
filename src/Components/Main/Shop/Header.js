import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions, Image, StyleSheet, TextInput,

} from 'react-native';
import icLogo from '../../../images-master/appIcon/ic_logo.png';
import icMenu from '../../../images-master/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {

    render() {
        const { wrapper, row1, iconStyle, litleSytle, textInputStyle } = styles;
        return (
            <View style={wrapper} >
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen} style={{ backgroundColor: '#B00808' }}>
                        <Image source={icLogo} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={litleSytle}>Wearing a Dress</Text>
                    <Image source={icMenu} style={iconStyle} />
                </View>
                <View style={textInputStyle}>
                    <TextInput
                        style={textInputStyle}
                        placeholder="what do you want to buy"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#3DCAFF',
        justifyContent: 'space-between',
        padding: 10,

    },
    row1: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    textInputStyle: {
        height: height / 24,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingEnd: 10,
    },
    litleSytle: {
        color: '#fff',
        fontSize: 15,
    },
    iconStyle: {
        width: 15,
        height: 15,

    },
});
/**
   <TouchableOpacity onPress={() => this.onOpenMenu()} style={{ backgroundColor: '#B00808' }}>
           
 */
/**
          <TouchableOpacity onPress={this.props.onOpen} style={{ backgroundColor: '#B00808' }}>
                <Text style={{ backgroundColor: '#35527A' }} >Open Menu</Text>
            </TouchableOpacity>
 */