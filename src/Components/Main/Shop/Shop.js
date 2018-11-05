import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';

const { height } = Dimensions.get('window');

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedTab: 'home',

        };
    }
    onOpenMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2C2255' }}>
                <Header onOpen={() => this.onOpenMenu()} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                    //   renderIcon={() => <Image source={...} />}
                    //   renderSelectedIcon={() => <Image source={...} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        < Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Contact'}
                        title="Contact"
                    //  renderIcon={() => <Image source={...} />}
                    //   renderSelectedIcon={() => <Image source={...} />}
                    //    renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'Contact' })}
                    >
                        < Contact />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'Search' })}
                    >
                        < Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                    >
                        < Cart />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

/**
     <TouchableOpacity onPress={() => this.onOpenMenu()}>
        <Text>open Menu</Text>
    </TouchableOpacity>
 */