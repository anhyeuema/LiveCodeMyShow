import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../images-master/temp/sp1.jpeg';
import sp2 from '../../../../images-master/temp/sp2.jpeg';
import sp3 from '../../../../images-master/temp/sp3.jpeg';

export default class TopProduct extends Component {
    gotoProductDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const { wrapper, titleContainer, title, body, productContainer, productImage } = styles;
        return (
            <View style={wrapper}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>

                </View>
                <View style={body}>
                    <TouchableOpacity style={productContainer} onPress={() => this.gotoProductDetail}>
                        <Image source={sp1} style={productImage} />
                        <Text>prodcut name</Text>
                        <Text>prodcut price</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={productContainer} onPress={() => this.gotoProductDetail}>
                        <Image source={sp2} style={productImage} />
                        <Text>prodcut name</Text>
                        <Text>prodcut price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => this.gotoProductDetail}>
                        <Image source={sp3} style={productImage} />
                        <Text>prodcut name</Text>
                        <Text>prodcut price</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        height: 500,
        backgroundColor: '#C5BAB0',

    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    title: {
        color: '#BFB5AA',
        fontSize: 15,

    },
    body: {
        flexDirection: 'row', 
        justifyContent: 'space-around',

    },
    productContainer: {
        width: productWidth,
    },
    productImage: {
        height: productImageHeight,
        width: productWidth,
    }
});