import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import Profile from '../src/pages/profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Animated from 'react-native-reanimated';
import DashboradStack from './DashboardStackRoute';
import Wallet from '../src/pages/wallet';
import Transaction from '../src/pages/transaction';

const FontIcon = Animated.createAnimatedComponent(FontAwesome);
const MaterialIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);
const EntypoIcon = Animated.createAnimatedComponent(Entypo);

const Tab = createBottomTabNavigator();

const tabs = {
  Home: {
    labelStyle: {
      color: '#3D4DDB',
    },
    icon: {
      component: ({color, size}) => (
        <MaterialIcon size={size} color={color} name="stop-circle-outline" />
      ),
      activeColor: '#3D4DDB',
      inactiveColor: '#fff',
      size: 100,
    },
    background: {
      activeColor: '#fff',
      inactiveColor: '#2234D8',
    },
  },
  Wallet: {
    labelStyle: {
      color: '#3D4DDB',
    },
    icon: {
      component: ({color, size}) => (
        <EntypoIcon size={size} color={color} name="wallet" />
      ),
      activeColor: '#3D4DDB',
      inactiveColor: '#fff',
      size: 30,
    },
    background: {
      activeColor: '#fff',
      inactiveColor: '#2234D8',
    },
  },
  Transaction: {
    labelStyle: {
      color: '#3D4DDB',
    },
    icon: {
      component: ({color, size}) => (
        <MaterialIcon size={size} color={color} name="clipboard-text-outline" />
      ),
      activeColor: '#3D4DDB',
      inactiveColor: '#fff',
      size: 30,
    },
    background: {
      activeColor: '#fff',
      inactiveColor: '#2234D8',
    },
  },
  Profile: {
    labelStyle: {
      color: '#3D4DDB',
    },
    icon: {
      component: ({color, size}) => (
        <FontIcon size={size} color={color} name="user-circle" />
      ),
      activeColor: '#3D4DDB',
      inactiveColor: '#fff',
      size: 30,
    },
    background: {
      activeColor: '#fff',
      inactiveColor: '#2234D8',
    },
  },
};

export default function TabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#2234D8',
          justifyContent: 'space-evenly',
        },
      }}
      tabBar={props => (
        <AnimatedTabBar iconSize={25} duration={750} tabs={tabs} {...props} />
      )}>
      <Tab.Screen name="Home" component={DashboradStack} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
