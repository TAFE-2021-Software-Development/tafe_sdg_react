import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import * as Login from '../screens/Login';
import Register from '../screens/Register';
import Main from '../screens/Main';
import Cafe from '../screens/Cafe';
import Loyalty from '../screens/Loyalty';
import SDG from '../screens/SDG';
import Events from '../screens/Events';
import Target from '../screens/Target';
import Challenge from '../screens/Challenge';
import Tips from '../screens/Tips';
import User from '../screens/User';
import Reservation from '../screens/Reservation';
import UpComingEvent from '../screens/UpComingEvent';

const stackNavigatorOptions = {
  headerShown: false,
};
const Navigator = createStackNavigator(
  {
    Home: {screen: Home},
    Login: {screen: Login.Login},
    Register: {screen: Register},
    Main: {screen: Main},
    Cafe: {screen: Cafe},
    Loyalty: {screen: Loyalty},
    SDG: {screen: SDG},
    Events: {screen: Events},
    Target: {screen: Target},
    Challenge: {screen: Challenge},
    Tips: {screen: Tips},
    User: {screen: User},
    Reservation: {screen: Reservation},
    UpComingEvent: {screen: UpComingEvent},
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  },
);
export default createAppContainer(Navigator);
