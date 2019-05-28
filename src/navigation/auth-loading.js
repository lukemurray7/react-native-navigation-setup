import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.getToken();
  }

  async getToken() {
    const { navigation: { navigate } } = this.props;
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log('USER TOKEN');
    navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
