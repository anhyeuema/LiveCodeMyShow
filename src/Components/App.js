import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Authentication from './Authentication/Authentication';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';
import ChangInfo from './ChangeInfo/ChangeInfo';



export default class App extends Component {
    /*
    renderScene(route,navigator){
        switch(route.name) {
            case 'MAIN': return <Main navigator={navigator} />;
            case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
            case 'ORDERHISTORY': return <OrderHistory navigator={navigator} />;
            default: return <ChangInfo navigator={navigator} />;   
        }
    }
    */
  
    render() {
        return (

            <NavigationExperimental.Navigator
                initialRoute={{ name: 'MAIN' }}
                //renderScene={this.renderScene}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        case 'ORDERHISTORY': return <OrderHistory navigator={navigator} />;
                        default: return <ChangInfo navigator={navigator} />;
                    }
                }}
                configureScene={(route) =>{
                    if (route.name === 'AUTHENTICATION') {
                        return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
                    } else {
                        return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
                    }
                }}
            />

        );
    }
}