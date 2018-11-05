import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import ListProduct from '../ListProduct/ListProduct';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';

export default class Home extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator 
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return < HomeView navigator={navigator} />;
                        case 'PRODUCT_DETAIL' : return <ProductDetail navigator={navigator} />;
                      default : return <ListProduct navigator={navigator} />;
                    }
                }}
            />
        );
    }
}
