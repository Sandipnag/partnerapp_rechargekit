/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';



  
YellowBox.ignoreWarnings([
    'Remote debugger',
    'Debugger and device times',
    // 'componentWillReceiveProps is deprecated',
    // 'componentWillMount is deprecated',
    // 'ViewPagerAndroid',
    // 'Accessing view manager',
    // 'You should only render',
    // 'Network request failed'
]);
AppRegistry.registerComponent(appName, () => App);
