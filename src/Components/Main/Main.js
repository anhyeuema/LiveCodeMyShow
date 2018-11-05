import React, { Component } from 'react';
//import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Shop from './Shop/Shop';
import Menu from './Menu';

export default class Main extends Component {

    gotoAuthentication() {
        const navigator1 = this.props.navigator;
        navigator1.push({ name: 'AUTHENTICATION' });
    }
    gotoChangInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGINFO_TRA_VE_DEFAULT_TRONG_MAIN_THI_LA_GI_CUNG_TRA_VE_NO'});
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDERHISTORY' });
    }

    closeControlPanel = () => {
        this.drawer.close();
      };
    openControlPanel = () => {
        this.drawer.open();
    };

    /*
    componentDidMount() {
        this.drawer.open();
    }
    */
    render() {
        const { navigator } = this.props;
        return (
            <Drawer 
                openDrawerOffset={0.5}
                tapToClose={true}
                ref={(ref) => this.drawer = ref}
                content={<Menu navigator={navigator} />}
            >
                <Shop open={() => this.openControlPanel()} />
            </Drawer>
        );
    }
}

/**
        <View style={{ flex: 1, backgroundColor: 'blue' }}> 
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
        </View>
 */