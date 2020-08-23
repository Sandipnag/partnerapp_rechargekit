import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import TabNav from './TabNav';
import {Dimensions, Text, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../src/constants/colors';
import FontFamily from '../src/constants/Font';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [drawerItems, setDrawerItem] = React.useState([
    {
      icon: <Entypo color={Colors.blue} name="wallet" size={34} />,
      itemName: 'Recharge Offers',
      hint: 'Vouchers, Cupons',
      amount: 254.0,
    },
    {
      icon: <Entypo color={Colors.blue} name="wallet" size={34} />,
      itemName: 'Recharge Offers',
      hint: 'Vouchers, Cupons',
      amount: 254.0,
    },
  ]);
  return (
    <DrawerContentScrollView
      style={{backgroundColor: Colors.pageBackground, padding: 15}}
      {...props}>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginBottom: 10}}
        onPress={() => props.navigation.toggleDrawer()}>
        <Entypo name="cross" size={30} />
      </TouchableOpacity>
      {drawerItems.map((single, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 15,
            backgroundColor: Colors.white,
            justifyContent: 'space-around',
            marginBottom: 10,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}>
          <View style={{flexDirection: 'row'}}>
            {single.icon}
            <View style={{marginHorizontal: 16}}>
              <Text
                style={{
                  fontFamily: FontFamily.RobotoMedium,
                  fontSize: 14,
                  lineHeight: 16,
                }}>
                {single.itemName}
              </Text>
              <Text
                style={{
                  fontFamily: FontFamily.RobotoThin,
                  fontSize: 14,
                  lineHeight: 16,
                }}>
                {single.hint}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome color={Colors.pureBlack} name="inr" size={14} />
            <Text
              style={{
                fontFamily: FontFamily.RobotoBold,
                fontSize: 14,
                lineHeight: 16,
                marginLeft: 5,
              }}>
              {single.amount}
            </Text>
          </View>
        </View>
      ))}
    </DrawerContentScrollView>
  );
}

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerType={'back'}
      drawerPosition={'left'}
      drawerStyle={{
        width: Dimensions.get('screen').width,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="TabNav" component={TabNav} />
    </Drawer.Navigator>
  );
}
