import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
  Button,
} from 'react-native';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  signUp = async () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this.signIn} />
        <Text>Dont have an account?</Text>
        <Button title="Sign up!" onPress={this.signUp} />
      </View>
    );
  }
}

export default SignInScreen;
