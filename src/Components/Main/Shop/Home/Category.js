import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../images-master/temp/little.jpg';
import maxiIcon from '../../../../images-master/temp/maxi.jpg';
import partyIcon from '../../../../images-master/temp/party.jpg';


const { width, height } = Dimensions.get('window');


export default class Category extends Component {
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { wrapper, imageStyle, cateTitle, textStyle } = styles;
    
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <Text tyle={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }} >
                    <Swiper showsPagination width={imageWidth} height={imageHeight} >
                        <TouchableOpacity onPress={() => this.gotoListProduct()}>
                            <View>
                                <ImageBackground source={littleIcon} style={{ height: imageHeight, width: imageWidth, justifyContent: 'center', alignItems: 'center', }} >
                                    <Text style={cateTitle}>Maxi Dress</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity >

                        <TouchableOpacity onPress={() => this.gotoListProduct()}>
                            <View>
                                <ImageBackground source={maxiIcon} style={{ height: imageHeight, width: imageWidth, justifyContent: 'center', alignItems: 'center', }} >
                                    <Text style={cateTitle}>Maxi little</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.gotoListProduct()}>
                            <View>
                                <ImageBackground source={partyIcon} style={{ height: imageHeight, width: imageWidth, justifyContent: 'center', alignItems: 'center', }} >
                                <Text style={cateTitle}>Maxi Party</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View >
        );
    }
}

    //800x400
const imageWidth = width - 40;//Chieu dai thuc te la width=800 ; height=400;
const imageHeight = imageWidth / 2; //(imageWidth * 800) / 400;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.32,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2e2728',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
       
    },
    textStyle: {
        fontSize: 25,
        color: '#afaeaf'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cateTitle: {
        fontSize: 15,
        color: '#9a9a9a',
    }

});