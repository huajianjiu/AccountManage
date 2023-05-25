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

export default () => {
  return <View style={styles.root}></View>;
};
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});
