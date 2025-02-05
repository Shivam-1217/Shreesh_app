import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Config/Screens';
import {colors} from '../Config/Constants';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        gap: SCREEN_HEIGHT * 0.01,
      }}>
      {header()}
      {allinOne()}
      {helpCenter()}
    </View>
  );

  function header() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.background_theme2,
          justifyContent: 'space-between',
          paddingVertical: SCREEN_HEIGHT * 0.01,
        }}>
        <View
          style={{
            justifyContent: 'center',

            paddingHorizontal: SCREEN_WIDTH * 0.05,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            236 days left
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '45%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Changepassword')}
            style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Change
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.background_theme1,
              borderWidth: 1,
              borderColor: 'white',
              height: SCREEN_HEIGHT * 0.03,
              width: SCREEN_WIDTH * 0.06,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 100,
            }}>
            <FeatherIcon name="refresh-ccw" size={12} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Ionicons name="exit-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function allinOne() {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: SCREEN_WIDTH * 0.02,
          borderWidth: 1,
          borderColor: 'lightgray',

          paddingVertical: SCREEN_HEIGHT * 0.02,
          paddingHorizontal: SCREEN_WIDTH * 0.02,
        }}>
        <Text style={{color: 'black', fontWeight: '500'}}>ALL IN ONE</Text>
      </TouchableOpacity>
    );
  }
  function helpCenter() {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Helpcenter')}
        style={{
          borderWidth: 1,
        }}>
        <Ionicons name="settings" size={40} color={'blue'} />
      </TouchableOpacity>
    );
  }
};

export default Home;

const styles = StyleSheet.create({});
