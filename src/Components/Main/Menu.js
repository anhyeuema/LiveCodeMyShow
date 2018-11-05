import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profileIcon from '../../images-master/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false,
        };
    }
    gotoAuthentication() {
        const navigator1 = this.props.navigator;
        navigator1.push({ name: 'AUTHENTICATION' });
    }
    gotoChangInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGINFO_TRA_VE_DEFAULT_TRONG_MAIN_THI_LA_GI_CUNG_TRA_VE_NO' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDERHISTORY' });
    }
    render() {
        const { container, username, loginContainer, btnTextSignIn, profileImage, btnStyle, btnText, btnSignInStyle } = styles;
        const logOutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle} onPress={() => this.gotoAuthentication()}>
                    <Text style={btnText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        const logInJSX = (
            <View style={loginContainer}>
                <Text stle={username}>nguyen van manh 111</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={() => this.gotoOrderHistory()}>
                        <Text style={btnTextSignIn}>OrderHistory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={() => this.gotoChangInfo()}>
                        <Text style={btnTextSignIn}>ChangeInfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} >
                        <Text style={btnTextSignIn}>SIGN OUT </Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJSX = this.state.isLogIn ? logInJSX : logOutJSX;
        return (
            <View style={container}>
                <Text>Component Menu</Text>
                <Image source={profileIcon} style={profileImage} />
                
                { mainJSX }

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#423560',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center',


    },
    profileImage: {
        width: 80,
        height: 80,
        marginBottom: 30,
        borderRadius: 40
    },
    btnStyle: {
        height: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    },
    btnText: {
        color: '#29906F',
        fontSize: 10,
    },
    btnSignInStyle: {
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 40,
        paddingHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btnTextSignIn: {
        color: '#288F6E',
        fontSize: 10,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    username: {
        color: '#fff',
        alignItems: 'center'
    }


});
/**
             <Text>Component Main</Text>
                    <TouchableOpacity onPress={() => this.gotoAuthentication()}> 
                        <Text>go to Authentication</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.gotoChangInfo()}> 
                        <Text>go to gotoChangInfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.gotoOrderHistory()}> 
                        <Text>go to OrderHistory </Text>
                    </TouchableOpacity>
 */
