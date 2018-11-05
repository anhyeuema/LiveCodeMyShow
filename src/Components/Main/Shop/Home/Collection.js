import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import bannerImage from '../../../../images-master/temp/banner.jpg';

const { width, height } = Dimensions.get('window');


export default class Collection extends Component {

    render() {
        const { wrapper, a1, a2, b1, b2 } = styles;
        return (
            <View style={wrapper}>
                <View>
                    <View style={a1}>
                        <Text tyle={b1}>SPING COLLECTION</Text>
                    </View>
                    <View style={a2} >
                        <Image source={bannerImage} style={b2} />
                    </View>
                </View>
            </View>
        );
    }
}

//800x400
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;// = (imageWidth / 800) * 400;
//  wrapper: { height: height * 0.33} trong wrapper da chia chieu cao view ra height: height * 0.33 thi chieu rong khong can chia nao

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        margin: 10,
    },
    a1: {
        height: 50,
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
    },
    b1: {
        fontSize: 20,
        
    },
    a2: {
        flex: 5,
        paddingTop: 20,
        paddingLeft: 5,
    },
    b2: {
        width: imageWidth,
        height: imageHeight,
        paddingBottom: 5,
    }
});