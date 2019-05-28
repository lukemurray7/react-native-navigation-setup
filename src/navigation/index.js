import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppStack from './app-stack';
import AuthStack from './auth-stack';
import AuthLoadingScreen from './auth-loading';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
