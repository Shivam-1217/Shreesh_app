import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const MusicList = ({item, index, data = []}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 20,
        gap: 20,
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
        height: 80,
        marginBottom: index === data.length - 1 ? 30 : 0,
      }}
      onPress={() => {
        navigation.navigate('Music', {
          data: item,
          index: index,
        });
      }}>
      <Image
        source={item.image}
        style={{width: 40, height: 40, borderWidth: 2}}
      />
      <View>
        <Text style={{color: 'black'}}>{item.title}</Text>
        <Text style={{color: 'black'}}>{item.artist}</Text>
      </View>
      <Image
        source={require('../Assets/Images/play.png')}
        resizeMode="contain"
        style={{height: 20, width: 20}}
      />
    </TouchableOpacity>
  );
};

export default MusicList;

const styles = StyleSheet.create({});
