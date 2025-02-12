import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <Text style={{color: 'black', textAlign: 'center'}}>Home</Text>
      <TouchableOpacity
        style={{padding: 16, borderRadius: 8, borderWidth: 0.5}}>
        <Text style={{color: 'red'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
