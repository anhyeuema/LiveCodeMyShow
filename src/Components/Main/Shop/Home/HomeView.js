import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';


//<Collection />
export default class Home extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#00FFFF' }}>
                <Text>Component Home</Text>
                <View>
                    <Collection />
                    < Category navigator={navigator} />
                </View>
            </View>
        );
    }
}
