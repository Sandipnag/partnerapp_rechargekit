import React from 'react';
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
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('screen');

const Signin = () => {

  const onPress = () => alert('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />

      <SafeAreaView style={styles.logoContainer}>
        <View style={styles.logo}></View>
      </SafeAreaView>
      <KeyboardAvoidingView
        enabled={true}
        behavior='padding'
        keyboardVerticalOffset={50}
        style={{ flex: .5,justifyContent:'flex-end',}}
      >
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1,justifyContent:'flex-end' }}
        >
          <View>
            <Text style={styles.textLabel}>Email</Text>
            <TextInput 
              style={styles.textInput} 
              placeholder={'Email'} 
            />
          </View>

          <View>
            <Text style={[styles.textLabel, { marginTop: 15 }]}>Password</Text>
            <TextInput style={styles.textInput} placeholder={'Password'} />
          </View>

          <View style={[styles.signin, { marginTop: 30, }]}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>
      <View style={{ flex: .25}}>
        <Text style={styles.forgetText}>Forgot Password</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, alignItems: 'center' }}>
          <View style={[styles.divider, { border: StyleSheet.hairlineWidth, height: 1, flex: 1 }]}></View>
          <Text style={styles.connectWith}>OR CONNECT WITH</Text>
          <View style={[styles.divider, { border: StyleSheet.hairlineWidth, height: 1, flex: 1 }]}></View>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            onPress={onPress}
            style={[styles.socialLogin, { backgroundColor: '#385998' }]}>
            <Feather
              color={'#fff'}
              name="facebook" size={20}
              style={{ position: 'absolute', left: 13 }}
            />

            <Text style={styles.socialLoginText}>Facebook</Text>
          </TouchableOpacity>
          <View style={[styles.socialLogin, { backgroundColor: '#DB4A39' }]}>
            <AntDesign
              color={'#fff'}
              name="google" size={20}
              style={{ position: 'absolute', left: 13 }}
            />
            <Text style={styles.socialLoginText}>Google</Text>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFF',
    paddingHorizontal: 24
  },
  logoContainer: {
    flex: .25,
    justifyContent:'center'
  },
  logo: {
    width: (width-48) * .50,
    height: (width-48) * .50,
    backgroundColor: '#021BFF',
    borderRadius: ((width-48) * .50) / 2,
    alignSelf: 'center',
    marginTop: 40
  },
  textLabel: {
    color: '#77798B',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: (width-48) * .05,
    fontSize: (width-48) * .05,
    marginLeft: 15
  },
  textInput: {
    overflow:'hidden',
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginTop: 7,
    paddingLeft: 15,
    fontSize:(width-48) * .05
  },
  signin: {
    backgroundColor: '#263BFC',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center'
  },
  loginButtonText: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    // lineHeight: (width-48) * .05,
    fontSize: (width-48) * .05,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 16
  },
  forgetText: {
    color: '#828497',
    fontStyle: 'normal',
    fontWeight: 'normal',
    // lineHeight: (width-48) * .05,
    fontSize: (width-48) * .05,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 20
  },
  divider: {
    backgroundColor: '#77798B'
  },
  connectWith: {
    color: '#3C3C44',
    fontStyle: 'normal',
    fontWeight: 'normal',
    // lineHeight: (width-48) * .05,
    fontSize: (width-48) * .05,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  socialLogin: {
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center',
    height: 50,
    width: (width - 48) * .45
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  socialLoginText: {
    alignSelf: 'center',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: (width-48) * .05,
    // lineHeight: (width-48) * .05
  }
});

export default Signin;
