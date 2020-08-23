import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';

import Signin from '../src/pages/signin';
import DrawerNav from './DrawerNav';
import Recharge from '../src/pages/recharge';
import AllPlans from '../src/pages/allplans';

import {connect} from 'react-redux';
const Stack = createStackNavigator();

const StackNav = props => {
  // const [status, setStatus] = useState(true);
  return (
    <Stack.Navigator
      mode={'card'}
      // initialRouteName={'AllPlans'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {!props.userStore.loggedInStatus ? (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signin"
          component={Signin}
        />
      ) : (
        <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={DrawerNav}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Recharge"
            component={Recharge}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="AllPlans"
            component={AllPlans}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    userStore: state.userStore,
  };
};

export default connect(
  mapStateToProps,
  null,
)(StackNav);
