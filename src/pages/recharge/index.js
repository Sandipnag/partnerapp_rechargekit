/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Picker,
} from 'react-native';
import FontFamily from '../../constants/Font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants/colors';
import {
  MOBILE_PREPAID,
  MOBILE_POSTPAID,
} from '../../../redux/RechargeType/Type';
import {connect} from 'react-redux';
import Api from '../../network/apiCall';
import AsyncStorage from '@react-native-community/async-storage';
import {concat} from 'react-native-reanimated';
import RNPickerSelect from 'react-native-picker-select';

const {width, height} = Dimensions.get('screen');

const RecentRecharge = ({data}) => {
  const {icon, mobile, text} = data;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
        paddingVertical: 10,
      }}>
      <Image style={{width: 30, height: 30, marginRight: 15}} source={icon} />
      <View>
        <Text
          style={{
            fontFamily: FontFamily.RobotoBold,
            fontSize: 12,
            lineHeight: 15,
          }}>
          {mobile}
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 15,
            fontFamily: FontFamily.RobotoLight,
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const Coupon = ({data}) => {
  const {title, desc, text} = data;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
        marginBottom: 10,
      }}>
      <View style={{justifyContent: 'space-between', width: '80%'}}>
        <Text
          style={{
            fontFamily: FontFamily.RobotoBold,
            fontSize: 14,
            lineHeight: 16,
            marginBottom: 10,
          }}>
          {title}
        </Text>
        <Text style={{fontSize: 12, marginBottom: 20}}>{desc}</Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16,
            fontFamily: FontFamily.RobotoLight,
            marginBottom: 10,
          }}>
          {text}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: Colors.blue,
          justifyContent: 'center',
          alignItems: 'center',
          width: '20%',
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 13,
            lineHeight: 15,
            fontFamily: FontFamily.RobotoMedium,
          }}>
          Copy
        </Text>
      </View>
    </View>
  );
};

const Recharge = props => {
  // const onPress = () => alert('');

  const [recentRecharge, setRecentRecharge] = useState([
    {
      id: 1,
      icon: require('../../assets/images/airtel.png'),
      mobile: '9163100531',
      text: 'Recharge ₹ 299 done on 25 Apr, 2020',
    },
    {
      id: 2,
      icon: require('../../assets/images/airtel.png'),
      mobile: '9163100531',
      text: 'Recharge ₹ 299 done on 25 Apr, 2020',
    },
    {
      id: 3,
      icon: require('../../assets/images/airtel.png'),
      mobile: '9163100531',
      text: 'Recharge ₹ 299 done on 25 Apr, 2020',
    },
  ]);
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: 'RECHARGEFIRST125',
      desc:
        'Get Flat Rs.125 cashback on subscribing to Recharge App membership, Use promocode RECHARGEFIRST125',
      text: '* Term and Conditions',
    },
    {
      id: 2,
      title: 'RECHARGEFIRST125',
      desc:
        'Get Flat Rs.125 cashback on subscribing to Recharge App membership, Use promocode RECHARGEFIRST125',
      text: '* Term and Conditions',
    },
    {
      id: 3,
      title: 'RECHARGEFIRST125',
      desc:
        'Get Flat Rs.125 cashback on subscribing to Recharge App membership, Use promocode RECHARGEFIRST125',
      text: '* Term and Conditions',
    },
  ]);

  const [OperatorList, setOperatorList] = useState([]);
  const [Circlelist, setCirclelist] = useState([]);
  const [MobileNo, setMobileNo] = useState('');
  const [Price, setPrice] = useState('');
  const [operator, setoperator] = useState('operator');
  const [Circle, setCircle] = useState('Circle');

  useEffect(async () => {
    const userLogin = await AsyncStorage.getItem('userLoginData');
    const auth = userLogin ? userLogin.token : null;

    console.log('lkhiefeiowh', operator, Circle, Price, MobileNo);
    if (props.prepaid) {
      Api.prepaidOperatorlist(auth).then(res => {
        console.log('res === > ', res);
        if (res.status == 200) {
          setOperatorList(res.data);
        }
      });
      Api.prepaidCirclelist(auth).then(res => {
        console.log('res === > ', res);
        if (res.status == 200) {
          setCirclelist(res.data);
        }
      });
    }

    if (props.postpaid) {
      Api.postpaidoperatorlist(auth).then(res => {
        console.log('res === > ', res);
        if (res.status == 200) {
          setOperatorList(res.data);
        }
      });
      Api.postpaidcirclelist(auth).then(res => {
        console.log('res === > ', res);
        if (res.status == 200) {
          setCirclelist(res.data);
        }
      });
    }
  });

  const SubmitRecharge = async () => {
    const userLogin = await AsyncStorage.getItem('userLoginData');
    const auth = userLogin.token;

    if (props.prepaid) {
      const data = {
        mobile_no: MobileNo,
        mobile_operator: operator,
        recharge_type: 'normal',
        circle_code: Circle,
        trans_pin: 123,
        price: Price,
      };
      Api.prepaidRecharge(auth, data).then(res => {
        console.log('res === > ', res);
        if (res.status == 200) {
          console.log('success response === > ', res);
        }
      });
    }

    if (props.postpaid) {
      const data = {
        mobile_no: MobileNo,
        mobile_operator: operator,
        recharge_type: 'normal',
        circle_code: Circle,
        trans_pin: 123,
        price: Price,
      };
      Api.postpaidRecharge(auth, data).then(res => {
        console.log('res === > ', res);
        if (res.status == 200) {
          console.log('success response === > ', res);
        }
      });
    }
  };

  const storePrice = no => {
    setPrice(no);
  };
  const storeMobileNo = no => {
    setMobileNo(no);
  };

  const handleSelectedoperator = value => {
    console.log(value);
    setoperator(value);
  };

  const handleSelectedCircle = value => {
    setCircle(value);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons
                color={Colors.blackishBlue}
                name={'ios-arrow-round-back'}
                size={30}
                style={{marginRight: 13}}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: FontFamily.RobotoMedium,
                fontSize: 15,
                lineHeight: 18,
              }}>
              Mobile Recharge
            </Text>
          </View>
          <AntDesign
            color={Colors.blackishBlue}
            name={'questioncircleo'}
            size={30}
          />
        </View>
      </SafeAreaView>
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 20}}
          style={{flexGrow: 1, marginTop: 10}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.radioContainer, {marginRight: 20}]}>
                <View style={styles.radioOuterCircle}>
                  {props.prepaid && <View style={styles.radioInnerCircle} />}
                </View>
                <Text style={{marginLeft: 9}}>Prepaid</Text>
              </View>
              <View style={styles.radioContainer}>
                <View style={styles.radioOuterCircle}>
                  {props.postpaid && <View style={styles.radioInnerCircle} />}
                </View>
                <Text style={{marginLeft: 9}}>Postpaid</Text>
              </View>
            </View>
            <View style={styles.numberContainer}>
              <TextInput
                placeholder={'Enter Number'}
                // value={MobileNo}
                onChangeText={no => setMobileNo(no)}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoMedium,
                    fontSize: 10,
                    lineHeight: 12,
                    color: Colors.blue,
                  }}>
                  Change
                </Text>
                <Image
                  style={{width: 20, height: 20, marginLeft: 10}}
                  source={require('../../assets/images/airtel.png')}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: 'rgba(2, 27, 255, 0.1)',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  width: '45%',
                }}>
                <Picker
                  selectedValue={operator}
                  // value={"operator"}
                  style={{height: 20, width: '45%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    handleSelectedoperator(itemValue)
                  }>
                  <Picker.Item label="Select operator" value="operator" />
                  {OperatorList &&
                    OperatorList.map((OperatorItem, OperatorIndex) => (
                      <Picker.Item
                        label={OperatorItem.operator_name}
                        value={OperatorItem.operator_id}
                      />
                    ))}
                </Picker>
                {/* <Text
                  style={{
                    fontFamily: FontFamily.RobotoMedium,
                    fontSize: 12,
                    lineHeight: 14,
                    color: '#828497',
                  }}>
                  Airtel
                </Text>
                <AntDesign color={'#34495E'} name={'downcircle'} size={15} /> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: 'rgba(2, 27, 255, 0.1)',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  width: '45%',
                }}>
                <Picker
                  selectedValue={Circle}
                  // value={Circle}
                  style={{height: 20, width: '45%'}}
                  importantForAccessibility={
                    <AntDesign
                      color={'#34495E'}
                      name={'downcircle'}
                      size={15}
                    />
                  }
                  onValueChange={(itemValue, itemIndex) =>
                    handleSelectedCircle(itemValue)
                  }>
                  <Picker.Item label="Select circle" value={'Circle'} />
                  {Circlelist &&
                    Circlelist.map((CircleItem, CircleIndex) => (
                      <Picker.Item
                        label={CircleItem.circle_name}
                        value={CircleItem.circle_code}
                      />
                    ))}
                </Picker>

                {/* <Text
                  style={{
                    fontFamily: FontFamily.RobotoMedium,
                    fontSize: 12,
                    lineHeight: 14,
                    color: '#828497',
                  }}>
                  West Bengal
                </Text>
                <AntDesign color={'#34495E'} name={'downcircle'} size={15} /> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#CDCDCD',
                  width: '65%',
                  paddingHorizontal: 15,
                }}>
                <FontAwesome
                  color={Colors.blue}
                  name={'inr'}
                  size={20}
                  style={{marginRight: 11}}
                />
                <TextInput
                  placeholder={'Enter Amount'}
                  // value={Price}
                  onChangeText={no => setPrice(no)}
                />
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('AllPlans')}
                style={{
                  backgroundColor: '#828497',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoMedium,
                    fontSize: 12,
                    lineHeight: 14,
                    color: Colors.white,
                  }}>
                  View Plan
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <Text
              style={{
                fontFamily: FontFamily.RobotoMedium,
                fontSize: 12,
                lineHeight: 14,
                color: '#828497',
                marginBottom: 10,
              }}>
              SELECT ONE FROM RECENTS
            </Text>
            <FlatList
              data={recentRecharge}
              renderItem={({item}) => <RecentRecharge data={item} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.scrollContainer}>
            <Text
              style={{
                fontFamily: FontFamily.RobotoMedium,
                fontSize: 12,
                lineHeight: 14,
                color: '#828497',
                marginBottom: 10,
              }}>
              Coupons
            </Text>
            <FlatList
              data={coupons}
              renderItem={({item}) => <Coupon data={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#2234D8',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={SubmitRecharge}>
        <Text
          style={{
            fontFamily: FontFamily.RobotoBold,
            color: Colors.white,
            fontSize: 17,
            lineHeight: 20,
            paddingVertical: 10,
            textTransform: 'uppercase',
          }}>
          Recharge
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  header: {
    height: 50,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 18,
    paddingVertical: 23,
    shadowColor: Colors.pureBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuterCircle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 2,
    borderColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: Colors.blue,
  },
  numberContainer: {
    marginTop: 20,
    borderColor: 'rgba(2,27,255,0.1)',
    borderWidth: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  // console.log('state', state.rechargeTypeReducer.prepaid);
  return {
    prepaid: state.rechargeTypeReducer.prepaid,
    postpaid: state.rechargeTypeReducer.postpaid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // changeLoggedInStatus: () => {
    //   dispatch(changeLoggedInStatus(false));
    // },
    // setPrepaid: async no =>
    //   await dispatch({type: MOBILE_PREPAID, payload: no}),
    // setPostpaid: async no =>
    //   await dispatch({type: MOBILE_POSTPAID, payload: no}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recharge);
