import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Dashboard from '../src/pages/dashboard';
import Recharge from '../src/pages/recharge';

const Stack = createStackNavigator();

export default function DashboradStack() {
    return (
        <Stack.Navigator 
            // initialRouteName={'Recharge'}
            mode={'card'}
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen

                options={{
                    headerShown: false,
                }}
                name="Dashboard"
                component={Dashboard}
            />
            {/* <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Recharge"
                component={Recharge}
            /> */}
        </Stack.Navigator>
    );
}