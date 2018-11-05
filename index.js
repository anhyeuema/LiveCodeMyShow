/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Bai6);
import React, {Component} from 'react';
import App from './src/Components/App';

export default class Bai6 extends Component {
  render() {
    return (
        <App />
    );
  }
}