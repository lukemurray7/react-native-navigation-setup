import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Button,
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    console.log('HOME');
    return (
      <View>
        <Button title="Show me more of the app" onPress={this.showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
      </View>
    );
  }
}

export default HomeScreen;
