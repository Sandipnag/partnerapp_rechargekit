/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontFamily from '../../constants/Font';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {Colors} from '../../constants/colors';
import {
  MOBILE_PREPAID,
  MOBILE_POSTPAID,
} from '../../../redux/RechargeType/Type';
import {connect} from 'react-redux';
import {changeLoggedInStatus} from '../../../redux/user/userActions';

const {width} = Dimensions.get('screen');
const items = [
  {name: 'bell', code: 'Mobile Prepaid'},
  {name: 'bell', code: 'DTH'},
  {name: 'bell', code: 'Electricity'},
  {name: 'bell', code: 'Book A Cyclinder'},
  {name: 'bell', code: 'Mobile Postpaid'},
  {name: 'bell', code: 'Broadband'},
];
const Dashboard = props => {
  const [boxsize, setBoxsize] = useState(0);
  const [data, setData] = useState(items);
  const [modalStatus, setModalStatus] = useState(false);

  calculate = e => {
    totalData = items.length;
    const numOfitemsPerRow = 4;
    mumberOfRow = Math.ceil(totalData / numOfitemsPerRow);
    setBoxsize((e.nativeEvent.layout.width - 3 * 10) / numOfitemsPerRow);
    let numberOfElementsLastRow = totalData - mumberOfRow * numOfitemsPerRow;
    while (
      numberOfElementsLastRow !== numOfitemsPerRow &&
      numberOfElementsLastRow !== 0
    ) {
      items.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    setData(items);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalStatus}
        onRequestClose={() => {
          setModalStatus(false);
        }}
      />
      <SafeAreaView>
        <View style={styles.appBar}>
          <View style={styles.user}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Ionicons
                color={Colors.pureBlack}
                name="md-menu"
                size={30}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            <View style={styles.userAvatar}>
              <Image
                resizeMode={'contain'}
                style={{width: null, height: null, flex: 1}}
                source={require('../../assets/images/demo_user.png')}
              />
            </View>
            <Text style={styles.userName}>Hi, Subrata</Text>
          </View>
          <View style={styles.rightIcon}>
            <AntDesign
              color={Colors.blackishBlue}
              name="questioncircleo"
              size={30}
            />
            <TouchableOpacity onPress={() => props.changeLoggedInStatus()}>
              <EvilIcons
                color={Colors.blackishBlue}
                name="bell"
                size={35}
                style={{marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView
        style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.walletContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo color={Colors.white} name="wallet" size={25} />
            <FontAwesome
              color={Colors.white}
              name="inr"
              size={25}
              style={{marginLeft: 10}}>
              <Text style={{fontSize: width * 0.06}}> 254.00</Text>
            </FontAwesome>
          </View>

          <View style={styles.addMoney}>
            <Ionicons
              color={Colors.white}
              name="md-add-circle-outline"
              size={25}
              style={{marginHorizontal: 10}}
            />
            <Text style={styles.addMoneyText}>Add</Text>
          </View>
        </View>

        {/* Recharge & Bills Pay */}

        <Text style={styles.sectionHeader}>Recharge & Bills Pay</Text>

        <View
          // onLayout={e => {
          //   this.calculate(e);
          // }}
          style={styles.gridContainer}>

            <TouchableOpacity
              onPress={() => {
               props.setPrepaid(true);
                props.navigation.push('Recharge');
              }}
              style={styles.recharge_bill_innerContainer}>
              <EvilIcons color={'#7F11B5'} name="bell" size={30} style={{alignSelf:"center"}} />
              <Text
                style={styles.recharge_bill_text}>
                Mobile Prepaid
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
              //  props.setPrepaid(true);
              //   props.navigation.push('Recharge');
              }}
              style={styles.recharge_bill_innerContainer}>
              <EvilIcons color={'#7F11B5'} name="bell" size={30} style={{alignSelf:"center"}} />
              <Text
                style={styles.recharge_bill_text}>
                DTH
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
              //  props.setPrepaid(true);
              //   props.navigation.push('Recharge');
              }}
              style={styles.recharge_bill_innerContainer}>
              <EvilIcons color={'#7F11B5'} name="bell" size={30} style={{alignSelf:"center"}} />
              <Text
                style={styles.recharge_bill_text}>
                Electricity
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
              //  props.setPrepaid(true);
              //   props.navigation.push('Recharge');
              }}
              style={styles.recharge_bill_innerContainer}>
              <EvilIcons color={'#7F11B5'} name="bell" size={30} style={{alignSelf:"center"}} />
              <Text
                style={styles.recharge_bill_text}>
                Book A Cyclinder
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
               props.setPostpaid(true);
                props.navigation.push('Recharge');
              }}
              style={styles.recharge_bill_innerContainer}>
              <EvilIcons color={'#7F11B5'} name="bell" size={30} style={{alignSelf:"center"}} />
              <Text
                style={styles.recharge_bill_text}>
                Mobile Postpaid
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // props.navigation.push('Recharge');
              }}
              style={styles.recharge_bill_innerContainer}>
              <EvilIcons color={'#7F11B5'} name="bell" size={30} style={{alignSelf:"center"}} />
              <Text
                style={styles.recharge_bill_text}>
                Broadband
              </Text>
            </TouchableOpacity>
          
        </View>

        <View style={{marginHorizontal: 15, height: 100}}>
          <Image
            source={require('../../assets/images/new_arrival.png')}
            resizeMode="stretch"
            style={{width: null, height: null, flex: 1}}
          />
        </View>

        {/* Recharge & Bills Pay History */}


        <View style={styles.planListing}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                color: '#404858',
                fontSize: 15,
                lineHeight: 18,
                fontFamily: FontFamily.RobotoMedium,
              }}>
              Recharge & Bills Pay History
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Transaction')}>
              <Text
                style={{
                  color: Colors.blue,
                  fontSize: 12,
                  lineHeight: 14,
                  fontFamily: FontFamily.RobotoMedium,
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.singlePlan, {marginBottom: 10}]}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E67E22',
                borderRadius: 5,
                padding: 5,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/battery.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                Prepaid Mobile Rechage
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                +919932985137
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: FontFamily.RobotoBold,
                }}>
                ₹299
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                UPI Payment
              </Text>
            </View>
          </View>
          <View style={[styles.singlePlan, {marginBottom: 10}]}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E67E22',
                borderRadius: 5,
                padding: 5,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/battery.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                Prepaid Mobile Rechage
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                +919932985137
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: FontFamily.RobotoBold,
                }}>
                ₹299
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                UPI Payment
              </Text>
            </View>
          </View>
          <View style={[styles.singlePlan, {marginBottom: 10}]}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E67E22',
                borderRadius: 5,
                padding: 5,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/battery.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                Prepaid Mobile Rechage
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                +919932985137
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: FontFamily.RobotoBold,
                }}>
                ₹299
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                UPI Payment
              </Text>
            </View>
          </View>
          <View style={[styles.singlePlan, {marginBottom: 10}]}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E67E22',
                borderRadius: 5,
                padding: 5,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/battery.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                Prepaid Mobile Rechage
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                +919932985137
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: FontFamily.RobotoBold,
                }}>
                ₹299
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                UPI Payment
              </Text>
            </View>
          </View>
          <View style={[styles.singlePlan, {marginBottom: 10}]}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E67E22',
                borderRadius: 5,
                padding: 5,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/battery.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                Prepaid Mobile Rechage
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                +919932985137
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: FontFamily.RobotoBold,
                }}>
                ₹299
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                UPI Payment
              </Text>
            </View>
          </View>
          <View style={[styles.singlePlan, {marginBottom: 10}]}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E67E22',
                borderRadius: 5,
                padding: 5,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/battery.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                Prepaid Mobile Rechage
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                +919932985137
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: FontFamily.RobotoBold,
                }}>
                ₹299
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                UPI Payment
              </Text>
            </View>
          </View>
          <View style={[styles.singlePlan, {marginBottom: 10}]}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E67E22',
                borderRadius: 5,
                padding: 5,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/battery.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                Prepaid Mobile Rechage
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                +919932985137
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: FontFamily.RobotoBold,
                }}>
                ₹299
              </Text>
              <Text
                style={{
                  color: Colors.fadeBlack200,
                  fontSize: 12,
                  lineHeight: 15,
                  marginTop: 5,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                UPI Payment
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  appBar: {
    width: width,
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  user: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  userName: {
    color: Colors.pureBlack,
    fontSize: width * 0.04,
    marginLeft: 10,
    fontFamily: FontFamily.RobotoBold,
  },
  rightIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sectionHeader: {
    color: Colors.pureBlack,
    fontSize: width * 0.05,
    marginLeft: 15,
    fontFamily: FontFamily.RobotoMedium,
  },
  gridContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  recharge_bill_innerContainer: {
    backgroundColor: Colors.fadeMagenta,
    width: (width - 200) * 0.4,
    height: (width - 200) * 0.4,
    justifyContent: 'space-around',
    marginBottom: 10,
    marginHorizontal: (width - 200) * 0.025,
  },
  recharge_bill_text: {
    textAlign: 'center',
    color: Colors.fadeBlack200,
    fontSize: (width - 200) * 0.058,
    fontFamily: FontFamily.RobotoMedium,
  },
  item: {
    backgroundColor: Colors.fadeMagenta,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.deepMagenta,
  },
  walletContainer: {
    marginHorizontal: 15,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.deepBlue,
    paddingVertical: 20,
  },
  addMoney: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  addMoneyText: {
    color: Colors.white,
    textTransform: 'capitalize',
    fontSize: (width - 48) * 0.05,
    marginHorizontal: 10,
    fontFamily: FontFamily.RobotoBold,
  },
  planListing: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop: 15,
    shadowColor: Colors.pureBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingVertical: 10,
  },
  singlePlan: {
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    changeLoggedInStatus: () => {
      dispatch(changeLoggedInStatus(false));
    },
    setPrepaid: async no =>
      await dispatch({type: MOBILE_PREPAID, payload: no}),
    setPostpaid: async no =>
      await dispatch({type: MOBILE_POSTPAID, payload: no}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Dashboard);
