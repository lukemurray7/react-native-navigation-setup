import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../home';
import OtherScreen from '../../other';


export default createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen,
});
