import {View, Text, StatusBar, Platform} from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { colors } from '../Config/Constants';

const MyStatusBar = ({backgroundColor, barStyle, translucent = false }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 0,
        height: translucent ? 0 : insets.top,
        backgroundColor: 'green',
      }}>
      <StatusBar
        translucent={translucent}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
export default MyStatusBar;
