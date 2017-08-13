import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import Login from './src/screens/Login';

class App extends React.Component {
  render() {
    return (<Login />);
  }
}

Expo.registerRootComponent(App);
