import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { Colors } from '../../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontFamily from '../../constants/Font';
const { width } = Dimensions.get('screen');

const Transaction = (props) => {

  const onPress = () => alert('');

  const signin = () => props.navigation.navigate('Home');

  const [history, setHistory] = useState([
    {
      id: '1',
      icon: require('../../assets/images/battery.png'),
      name: 'Prepaid Mobile Rechage',
      phone: '+919932985137',
      date: '3th Apr 2020',
      amount: 299,
      paymentType: 'UPI Payment',
      orderNo: 'Order No - 158794463'
    },
    {
      id: '2',
      icon: require('../../assets/images/battery.png'),
      name: 'Prepaid Mobile Rechage',
      phone: '+919932985137',
      date: '3th Apr 2020',
      amount: 299,
      paymentType: 'UPI Payment',
      orderNo: 'Order No - 158794463'
    },
    {
      id: '3',
      icon: require('../../assets/images/battery.png'),
      name: 'Prepaid Mobile Rechage',
      phone: '+919932985137',
      date: '3th Apr 2020',
      amount: 299,
      paymentType: 'Axis Bank',
      orderNo: 'Order No - 158794463'
    }
  ])

  const History = ({ data }) => {
    const { icon, name, phone, date, amount, paymentType, orderNo } = data;
    return (
      <View style={styles.singleHistory}>
        <View style={{
          flexDirection: 'row', flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{
            width: 50,
            height: 50,
            backgroundColor: Colors.white,
            marginRight: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E67E22',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image style={{ width: 30, height: 30 }} source={icon} />
          </View>
          <View style={{ flex: 1, height: 50, marginRight: 10 }}>
            <Text style={{ fontFamily: FontFamily.RobotoRegular, fontSize: 10 }}>{name}</Text>
            <Text style={{ fontFamily: FontFamily.RobotoRegular, fontSize: 10, color: Colors.gray200 }}>{phone}</Text>
            <Text style={{ fontFamily: FontFamily.RobotoRegular, fontSize: 10 }}>{date}</Text>
          </View>
          <View style={{ flex: 1, height: 50 }}>
            <Text style={{ fontFamily: FontFamily.RobotoRegular, fontSize: 10, textAlign: 'right' }}>{amount}</Text>
            <Text style={{ fontFamily: FontFamily.RobotoRegular, fontSize: 10, lineHeight: 16, color: Colors.gray200, textAlign: 'right' }}>
              {paymentType}
            </Text>
            <Text style={{ fontFamily: FontFamily.RobotoRegular, fontSize: 10, lineHeight: 16, textAlign: 'right' }}>
              {orderNo}
            </Text>
          </View>
        </View>
        <AntDesign
          color={Colors.blackishBlue}
          name={'downcircleo'}
          size={20}
          style={{ alignSelf: 'center' }}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />
      <SafeAreaView>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons
                color={Colors.blackishBlue}
                name={'ios-arrow-round-back'}
                size={30}
                style={{ marginRight: 13 }}
              />
            </TouchableOpacity>

            <Text style={{ fontFamily: FontFamily.RobotoMedium, fontSize: 15, lineHeight: 18 }}>
              Recharge & Bills Pay History
            </Text>
          </View>
          <AntDesign
            color={Colors.blackishBlue}
            name={'questioncircleo'}
            size={30}
          />
        </View>
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        <FlatList
          data={history}
          renderItem={({ item }) => <History data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground
  },
  header: {
    height: 50,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  singleHistory: {
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  }
});

export default Transaction;
