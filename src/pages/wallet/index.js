import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constants/colors';
import FontFamily from '../../constants/Font';
const { width } = Dimensions.get('screen');

const Wallet = (props) => {

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
              Wallet
            </Text>
          </View>
          <AntDesign
            color={Colors.blackishBlue}
            name={'questioncircleo'}
            size={30}
          />
        </View>
      </SafeAreaView>
      <View style={styles.walletContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo
            color={Colors.white}
            name="wallet"
            size={25}
          />
          <FontAwesome
            color={Colors.white}
            name="inr"
            size={25}
            style={{ marginLeft: 10 }}
          >
            <Text style={{ fontSize: width * .06 }}> 254.00</Text>
          </FontAwesome>
        </View>

        <View style={styles.addMoney}>
          <Ionicons
            color={Colors.white}
            name="md-add-circle-outline"
            size={25}
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.addMoneyText}>Add</Text>
        </View>
      </View>
      <View style={styles.planListing}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
          <Text style={{ color: '#404858', fontSize: 15, lineHeight: 18, fontFamily: FontFamily.RobotoMedium }}>Recharge & Bills Pay History</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Transaction')}>
            <Text style={{
              color: Colors.blue,
              fontSize: 12,
              lineHeight: 14,
              fontFamily: FontFamily.RobotoMedium
            }}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.singlePlan, { marginBottom: 10 }]}>
          <View style={{ borderWidth: 1, borderColor: '#E67E22', borderRadius: 5, padding: 5 }}>
            <Image
              style={{ width: 25, height: 25, }}
              source={require('../../assets/images/battery.png')}
            />
          </View>
          <View>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, fontFamily: FontFamily.RobotoRegular }}>
              Prepaid Mobile Rechage
                            </Text>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, marginTop: 5, fontFamily: FontFamily.RobotoRegular }}>
              +919932985137
                            </Text>
          </View>
          <View>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, fontWeight: 'bold', textAlign: 'right', fontFamily: FontFamily.RobotoBold }}>
              ₹299
                            </Text>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, marginTop: 5, fontFamily: FontFamily.RobotoRegular }}>
              UPI Payment
                            </Text>
          </View>
        </View>
        <View style={[styles.singlePlan, { marginBottom: 10 }]}>
          <View style={{ borderWidth: 1, borderColor: '#E67E22', borderRadius: 5, padding: 5 }}>
            <Image
              style={{ width: 25, height: 25, }}
              source={require('../../assets/images/battery.png')}
            />
          </View>
          <View>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, fontFamily: FontFamily.RobotoRegular }}>
              Prepaid Mobile Rechage
                            </Text>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, marginTop: 5, fontFamily: FontFamily.RobotoRegular }}>
              +919932985137
                            </Text>
          </View>
          <View>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, fontWeight: 'bold', textAlign: 'right', fontFamily: FontFamily.RobotoBold }}>
              ₹299
                            </Text>
            <Text style={{ color: Colors.fadeBlack200, fontSize: 12, lineHeight: 15, marginTop: 5, fontFamily: FontFamily.RobotoRegular }}>
              UPI Payment
                            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    marginTop: 20
  },
  addMoney: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'space-between'
  },
  header: {
    height: 50,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
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
    paddingVertical: 10
  },
  singlePlan: {
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addMoneyText: {
    color: Colors.white,
    textTransform: 'capitalize',
    fontSize: (width - 48) * .05,
    marginHorizontal: 10,
    fontFamily: FontFamily.RobotoBold
  },
});

export default Wallet;
