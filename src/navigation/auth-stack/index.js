import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../../sign-in';
import SignUpScreen from '../../sign-up';


export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});
