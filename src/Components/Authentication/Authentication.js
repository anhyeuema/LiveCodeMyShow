import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import iconBach from '../../images-master/appIcon/back_white.png';
import icLogo from '../../images-master/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
        };
    }

    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }
    gotoMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        const { a1, iconStyle, signInStyle,
            signUpStyle, container, stitleStyle,
            controlStyle, activeStyle, inactiveStyle,
            inputStyle, signInNowStyle
        } = styles;
        const signInJSX = (
            <View style={{ backgroundColor: '#6A6A6A' }}>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Email your name"

                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Password your name"
                />
                <TouchableOpacity style={signInNowStyle}>
                    <Text style={activeStyle}>Sign In Now</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (
            <View style={{ backgroundColor: '#007ACC' }}>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter  your name"

                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Email your name"

                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Password your name"
                />
                <TextInput
                    style={inputStyle}
                    placeholder=" Re Enter Password your name"
                />
                <TouchableOpacity style={signInNowStyle}>
                    <Text style={activeStyle}>Sign Up Now</Text>
                </TouchableOpacity>
            </View>
        );
        const { isSignIn } = this.state;
        const SIGNJSX = isSignIn ? signInJSX : signUpJSX;
        return (
            <View style={{ container }}>
                <View style={a1}>
                    <TouchableOpacity onPress={() => this.gotoMain()} style={{ backgroundColor: '#B00808' }}>
                        <Image source={icLogo} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={stitleStyle}>Wearing a Dress</Text>
                    <Image source={iconBach} style={iconStyle} />
                </View>

                { SIGNJSX }
                <View style={controlStyle} />

                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={() => this.signIn()}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>Sign IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSignIn} onPress={() => this.signUp()}>
                        <Text styles={isSignIn ? inactiveStyle : activeStyle}>Sign UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 10,
        justifyContent: 'space-between'
    },
    a1: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        width: 30,
        height: 30,
        backgroundColor: '#C1C2F5'
    },
    stitleStyle: {

    },
    controlStyle: {
        flexDirection: 'row',
    },
    inactiveStyle: {
        color: 'red',

    },
    activeStyle: {
        color: '#E61A5F'
    },
    signInStyle: {
        backgroundColor: '#2C2255',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 2,

    },
    signUpStyle: {
        backgroundColor: '#2C2255',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 2,
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#4D4C4A',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 20,
    },
    signInNowStyle: {
        borderRadius: 20,
        height: 40,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

/*
         <TouchableOpacity onPress={() => this.gotoMain()}>
                    <Text>go to Main</Text>
                </TouchableOpacity>
 */