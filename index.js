/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './Screens/HomeScreen';
import CafeScreen from './Screens/CafeScreen';

AppRegistry.registerComponent(appName, () => CafeScreen);
