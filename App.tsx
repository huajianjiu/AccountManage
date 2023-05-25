/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8'
  }
});

export default App;
