/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export const API_BASE_URL = 'http://3.37.21.121:8080/api';

AppRegistry.registerComponent(appName, () => App);
