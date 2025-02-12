import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      showMessage({
        message: 'Validation Error',
        description: 'Please fill in both username and password.',
        type: 'warning',
        icon: 'warning',
      });
    } else {
      loginUser({username, password});
      setPassword('');
    }
  };

  const loginUser = async userData => {
    try {
      const data = {
        username: userData.username, // Corrected key
        password: userData.password,
      };

      const API_URL = 'http://192.168.23.83:3300/login';
      const res = await axios.post(API_URL, data);

      if (res?.data) {
        showMessage({
          message: 'Login Successful',
          description: 'You have been logged in!',
          type: 'success',
          icon: 'success',
        });
        navigation.navigate('Home');
      } else {
        showMessage({
          message: 'Login Failed',
          description: res.data.message || 'Something went wrong.',
          type: 'danger',
          icon: 'danger',
        });
      }
    } catch (error) {
      console.error(error);
      showMessage({
        message: 'Login Failed',
        description:
          error.response?.data?.message || 'Network error. Please try again.',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  return (
    <View style={{backgroundColor: 'white', padding: 20, flex: 1}}>
      <Text style={{color: 'red', textAlign: 'center'}}>Login Form</Text>
      <View style={{gap: 20, justifyContent: 'center', top: 20}}>
        <TextInput
          placeholder="Enter your username"
          style={{
            color: 'black',
            borderWidth: 0.5,
            borderRadius: 8,
            padding: 10,
          }}
          placeholderTextColor={'black'}
          cursorColor={'black'}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Enter your password"
          style={{
            color: 'black',
            borderWidth: 0.5,
            borderRadius: 8,
            padding: 10,
          }}
          placeholderTextColor={'black'}
          cursorColor={'black'}
          secureTextEntry={true} // Hide password input
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={{
            padding: 14,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderRadius: 8,
            backgroundColor: 'red',
          }}
          onPress={handleLogin}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 2}}>
          <Text style={{color: 'black'}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={{color: 'green'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
