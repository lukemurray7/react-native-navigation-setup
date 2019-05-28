import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Button,
} from 'react-native';

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Please sign up',
  };

  signUp = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <Button title="Sign up!" onPress={this.signUp} />
      </View>
    );
  }
}

export default SignUpScreen;
