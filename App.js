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
  SafeAreaView
} from 'react-native';
import Dashboard from './src/pages/dashboard';
import Signin from './src/pages/signin';
const { width } = Dimensions.get('screen');

const App = () => {
  return (
    // <Signin/>
    <Dashboard/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFF',
    paddingHorizontal: 24
  },
  
});

export default App;
