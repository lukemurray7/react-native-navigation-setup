import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';

class OtherScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  goHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <Button title="go back home" onPress={this.goHome} />
      </View>
    );
  }
}

export default OtherScreen;
