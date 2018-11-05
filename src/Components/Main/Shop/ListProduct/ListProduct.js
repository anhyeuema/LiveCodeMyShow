import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import back from '../../../../images-master/appIcon/back_white.png';
import sp1 from '../../../../images-master/temp/sp1.jpeg';

const { width, height } = Dimensions.get('window');


export default class ListProduct extends Component {

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const { container, wrapper, header,
            backStyle, titleStyle, productContainer,
            productInfo, productImage, lastRowInfo,
            txtName, txtMaterial, textColor, txtShowDetail
        } = styles;
        return (
            <View style={container} >
                <ScrollView stle={wrapper}>
                    <View style={header}>
                        <Image source={back} style={backStyle} />
                        <Text style={titleStyle}> Party Dress</Text>
                        <View />
                    </View>
                    <View style={productContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.goBack()}>
                                <Image source={sp1} style={productImage} />
                            </TouchableOpacity>
                            <View style={productInfo}>
                                <Text style={txtName}>Lace sleeve Si</Text>
                                <Text style={txtName}>117$</Text>
                                <Text style={txtMaterial}> Material silk</Text>
                                <View style={lastRowInfo}>
                                    <Text style={textColor}>Color RoyalBlu</Text>
                                    <View style={{ backgroundColor: '#E43737', height: 20, width: 20, borderRadius: 10 }} />
                                    <TouchableOpacity>
                                        <Text style={txtShowDetail}>Show Detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

//361*450 
const imageWidth = width - 20;//ti le so voi man hinh dt la nho 5 lan
const imageHeight = (width * 450) / 361; //(width / 361) * 450; //chieu dai se tu dong co lai theo chieu rong de du nguyen ti le dai/rong=452/361
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BEBEBD',
        padding: 10,

    },
    header: {
        height: 50,
        backgroundColor: '#73B503',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    wrapper: {
        backgroundColor: '#378436',
        shadowColor: '#ACADAD',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 5,
        margin: 10,


    },
    backStyle: {
        width: 30,
        height: 30,

    },
    titleStyle: {
        color: '#60B8E7',
        fontSize: 20,
    },
    productImage: {
        width: imageWidth / 5,
        height: imageHeight / 5,
    },
    productContainer: {
        padding: 10,
        borderTopColor: '#DC6A1E',
        borderWidth: 1,

    },
    productInfo: {
        justifyContent: 'space-between',
        flex: 1,
    }, 
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtName: {

    },
    txtMaterial: {

    },
    textColor: {

    },
    txtShowDetail: {

    }
});

/**
            <Text>Component ListProduct</Text>
                <TouchableOpacity onPress={() => this.goBack()}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoDetail()}>
                    <Text>go to Deltail</Text>
                </TouchableOpacity>
 */