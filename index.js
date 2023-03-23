/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export const API_BASE_URL = 'http://3.37.21.121:8080/api';
export const JWT_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY4MDE0NjAwMX0.YZp0AUy5guQEj6l_J2vFetFyHZx1kk1yw6omtQZnEQc';
AppRegistry.registerComponent(appName, () => App);
