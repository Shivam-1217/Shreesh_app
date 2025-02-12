import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNavigator from './src/navigations/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
          <FlashMessage position="top" />
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
