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

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (!name.trim() || !password.trim() || !confirmPassword.trim()) {
      showMessage({
        message: 'Validation Error',
        description: 'Please fill in all fields.',
        type: 'warning',
        icon: 'warning',
      });
    } else if (password !== confirmPassword) {
      showMessage({
        message: 'Validation Error',
        description: 'Passwords do not match.',
        type: 'warning',
        icon: 'warning',
      });
    } else {
      registerUser({name, password}); // Pass name and password as an object
    }
  };

  const registerUser = async userData => {
    try {
      
      const data = {
        username: userData.name,
        password: userData.password,
      };

      const res = await axios.post('http://192.168.23.83:3300/register', data); // Update the URL as needed
      console.log('ChecktheResponse::KKK',res?.data)
      if (res.data) {
        showMessage({
          message: 'Signup Successful',
          description: 'Your account has been created!',
          type: 'success',
          icon: 'success',
        });
        navigation.navigate('Login'); // Navigate to the Login screen after successful signup
      } else {
        showMessage({
          message: 'Signup Failed',
          description: res.data.message || 'Something went wrong.',
          type: 'danger',
          icon: 'danger',
        });
      }
    } catch (error) {
      console.error(error);
      showMessage({
        message: 'Signup Failed',
        description:
          error.response?.data?.message || 'Network error. Please try again.',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  return (
    <View style={{backgroundColor: 'white', padding: 20, flex: 1}}>
      <Text style={{color: 'red', textAlign: 'center'}}>Signup Form</Text>
      <View style={{gap: 20, justifyContent: 'center', top: 20}}>
        <TextInput
          placeholder="Enter your name"
          style={{
            color: 'black',
            borderWidth: 0.5,
            borderRadius: 8,
            padding: 10,
          }}
          placeholderTextColor={'black'}
          cursorColor={'black'}
          value={name}
          onChangeText={setName}
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
        <TextInput
          placeholder="Confirm your password"
          style={{
            color: 'black',
            borderWidth: 0.5,
            borderRadius: 8,
            padding: 10,
          }}
          placeholderTextColor={'black'}
          cursorColor={'black'}
          secureTextEntry={true} // Hide confirm password input
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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
          onPress={handleSignup}>
          <Text style={{color: 'white'}}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 2}}>
          <Text style={{color: 'black'}}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login'); // Navigate to the Login screen
            }}>
            <Text style={{color: 'green'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
