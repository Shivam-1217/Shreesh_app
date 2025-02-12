import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from '../Screens/Splash';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Changepassword from '../Screens/Changepassword';
import Helpcenter from '../Screens/Helpcenter';
import Music from '../Screens/Music';
import Signup from '../Screens/auth/Signup';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name='Signup'
      component={Signup}
      options={{headerShown:false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Music"
        component={Music}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
