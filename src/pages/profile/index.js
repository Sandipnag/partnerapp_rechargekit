/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import FontFamily from '../../constants/Font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/colors';
import Api from '../../network/apiCall';
import AsyncStorage from '@react-native-community/async-storage';

const {width} = Dimensions.get('screen');

const Profile = props => {
  const [name, setName] = useState('');
  const [phone_no, setPhone_no] = useState(0);
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState('');
  const [DOB, setDOB] = useState('');
  const [photo, setPhoto] = useState('');
  const [address, setAddress] = useState('');

  useEffect(async () => {
    const userLogin = await AsyncStorage.getItem('userLoginData');
    const auth = userLogin.token;

    Api.profileView(auth).then(res => {
      console.log('res === > ', res);
      if (res.status == 200) {
        setName(res.data.member_name);
        setPhone_no(res.data.member_mobile);
        setEmail(res.data.member_email);
        setPassword(res.data.member_name);
        // setDOB(res.data.member_name);
        setPhoto(res.data.member_photo);
        setAddress(
          `City = ${res.data.member_city_name}, State = ${
            res.data.member_state_name
          }`,
        );
      } else {
      }
    });
  });

  const signin = () => props.navigation.navigate('Home');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />
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
              Profile
            </Text>
          </View>
          <AntDesign
            color={Colors.blackishBlue}
            name={'questioncircleo'}
            size={30}
          />
        </View>
      </SafeAreaView>
      <View style={styles.profileSnap}>
        <Image
          source={{uri: photo}}
          style={{width: 60, height: 60, borderRadius: 60 / 2}}
        />
        <View>
          <Text
            style={{
              color: Colors.white,
              fontFamily: FontFamily.RobotoBold,
              fontSize: 20,
              lineHeight: 24,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontFamily: FontFamily.RobotoMedium,
              fontSize: 14,
            }}>
            {phone_no}
          </Text>
        </View>
        <View style={styles.editButton}>
          <Text
            style={{
              color: Colors.white,
              textTransform: 'uppercase',
              fontSize: 12,
              lineHeight: 14,
            }}>
            Edit
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView
        enabled={true}
        behavior="padding"
        keyboardVerticalOffset={20}
        style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 25,
            paddingBottom: 20,
          }}>
          <View style={{marginBottom: 10}}>
            <Text
              style={{marginLeft: 15, marginBottom: 10, color: Colors.gray200}}>
              Email ID
            </Text>
            <TextInput
              style={{backgroundColor: Colors.white, borderRadius: 10}}
              value={email}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{marginLeft: 15, marginBottom: 10, color: Colors.gray200}}>
              Phone Number
            </Text>
            <TextInput
              style={{backgroundColor: Colors.white, borderRadius: 10}}
              value={phone_no}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{marginLeft: 15, marginBottom: 10, color: Colors.gray200}}>
              Password
            </Text>
            <TextInput
              style={{backgroundColor: Colors.white, borderRadius: 10}}
              value={password}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{marginLeft: 15, marginBottom: 10, color: Colors.gray200}}>
              Date of Birth
            </Text>
            <TextInput
              style={{backgroundColor: Colors.white, borderRadius: 10}}
              value={DOB}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{marginLeft: 15, marginBottom: 10, color: Colors.gray200}}>
              Address
            </Text>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Description"
              placeholderTextColor="grey"
              multiline={true}
              numberOfLines={2}
              textAlignVertical="top"
              value={address}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    backgroundColor: Colors.blue,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  profileSnap: {
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  textArea: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingLeft: 15,
  },
});

export default Profile;
