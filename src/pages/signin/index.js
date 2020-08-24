/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontFamily from '../../constants/Font';
import {Colors} from '../../constants/colors';
import Api from '../../network/apiCall';
import axios from 'axios';
import {connect} from 'react-redux';
import {changeLoggedInStatus} from '../../../redux/user/userActions';
import {LOGIN_SUCCESS_DATA, TOKEN} from '../../../redux/user/userTypes';
import AsyncStorage from '@react-native-community/async-storage';

const {width} = Dimensions.get('screen');

const Signin = props => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const onPress = () => alert('');

  const signin = () => {
    const data = {
      mobile: memberId,
      password: password,
    };

    Api.login(data).then(async res => {
      console.log('res === > ', res);
      if (res.status == 200) {
        await AsyncStorage.setItem('userLoginData', res);

        // props.setToken(res.token);
        // props.setLOGIN_SUCCESS_DATA(res.member);
        props.changeLoggedInStatus(true);
      } else {
        setError(res.msg);
        
      }
    });

    // This is used because api server is off
    props.changeLoggedInStatus(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />

      <SafeAreaView style={styles.logoContainer}>
        <View style={styles.logo} />
      </SafeAreaView>
      <KeyboardAvoidingView
        enabled={true}
        behavior="padding"
        keyboardVerticalOffset={50}
        style={{flex: 0.5, justifyContent: 'flex-end'}}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}>
          <View style={{marginBottom: 10}}>
            <Text style={[styles.textLabel, {marginBottom: 10}]}>
              Member Id
            </Text>
            <View
              style={[
                styles.inputContainer,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  borderRadius: 30,
                  paddingLeft: 8,
                },
              ]}>
              <MaterialCommunityIcons
                color={Colors.fadeSilver}
                name="mail-ru"
                size={20}
              />
              <TextInput
                style={{paddingLeft: 10}}
                placeholder={'Member Id'}
                onChangeText={val => setMemberId(val)}
              />
            </View>
          </View>

          <View>
            <Text style={[styles.textLabel, {marginBottom: 10}]}>Password</Text>
            <View
              style={[
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  borderRadius: 30,
                  paddingLeft: 8,
                },
                styles.inputContainer,
              ]}>
              <MaterialCommunityIcons
                color={Colors.fadeSilver}
                name="lock"
                size={20}
              />
              <TextInput
                secureTextEntry={true}
                style={{paddingLeft: 10}}
                placeholder={'Password'}
                onChangeText={val => setPassword(val)}
              />
            </View>
          </View>

          {errorMessage ? (
            <View style={{marginTop: 30, marginLeft: 20}}>
              <Text
                style={{
                  color: 'red',
                  fontSize: (width - 48) * 0.05,
                  fontFamily: FontFamily.RobotoRegular,
                }}>
                {errorMessage}
              </Text>
            </View>
          ) : null}
          
          <TouchableOpacity
            onPress={signin}
            style={[styles.signin, {marginTop: 30}]}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* <View style={{ flex: .25 }}>
        <Text style={styles.forgetText}>Forgot Password</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, alignItems: 'center' }}>
          <View style={[styles.divider, { border: StyleSheet.hairlineWidth, height: 1, flex: 1 }]}></View>
          <Text style={styles.connectWith}>OR CONNECT WITH</Text>
          <View style={[styles.divider, { border: StyleSheet.hairlineWidth, height: 1, flex: 1 }]}></View>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.socialLogin, { backgroundColor: Colors.facebookBlue }]}>
            <Feather
              color={Colors.white}
              name="facebook" size={20}
              style={{ marginRight: 7 }}
            />

            <Text style={styles.socialLoginText}>Facebook</Text>
          </TouchableOpacity>
          <View style={[styles.socialLogin, { backgroundColor: Colors.googleRed }]}>
            <AntDesign
              color={Colors.white}
              name="google" size={20}
              style={{ marginRight: 7 }}
            />
            <Text style={styles.socialLoginText}>Google</Text>
          </View>

        </View>
      </View> */}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userStore: state.userStore,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeLoggedInStatus: () => {
      dispatch(changeLoggedInStatus(true));
    },
    setToken: async no =>
      await dispatch({type: TOKEN, payload: no}),
    setLOGIN_SUCCESS_DATA: async no =>
      await dispatch({type: LOGIN_SUCCESS_DATA, payload: no}),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    paddingHorizontal: 24,
  },
  logoContainer: {
    flex: 0.25,
    justifyContent: 'center',
  },
  logo: {
    width: (width - 48) * 0.5,
    height: (width - 48) * 0.5,
    backgroundColor: '#021BFF',
    borderRadius: ((width - 48) * 0.5) / 2,
    alignSelf: 'center',
    marginTop: 40,
  },
  textLabel: {
    color: Colors.fadeBlack100,
    fontFamily: FontFamily.RobotoRegular,
    lineHeight: (width - 48) * 0.05,
    fontSize: (width - 48) * 0.05,
    marginLeft: 15,
  },
  inputContainer: {
    shadowColor: Colors.pureBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  signin: {
    backgroundColor: Colors.blue,
    borderRadius: 30,
    shadowColor: Colors.pureBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: Colors.white,
    fontFamily: FontFamily.RobotoMedium,
    fontSize: (width - 48) * 0.05,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 16,
  },
  forgetText: {
    color: Colors.gray200,
    fontFamily: FontFamily.RobotoRegular,
    fontSize: (width - 48) * 0.05,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 20,
  },
  divider: {
    backgroundColor: Colors.fadeBlack100,
  },
  connectWith: {
    color: Colors.fadeBlack200,
    fontFamily: FontFamily.RobotoRegular,
    fontSize: (width - 48) * 0.05,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  socialLogin: {
    borderRadius: 30,
    shadowColor: Colors.pureBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 13,
    width: (width - 48) * 0.45,
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialLoginText: {
    alignSelf: 'center',
    color: Colors.white,
    textTransform: 'capitalize',
    fontSize: (width - 48) * 0.05,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
