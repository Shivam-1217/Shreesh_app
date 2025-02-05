import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Config/Screens';
import { colors } from '../Config/Constants'
import { useNavigation } from '@react-navigation/native';





const Splash = ({navigation}) => {
    // const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
         navigation.navigate('Login')
        }, 4000);
      }, []);
    return (
        <View style={{ height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: colors.background_theme1, }}>
               
            {Imageview()}
        </View>
    );
    function Imageview() {
        return (
            <View style={{ height: SCREEN_WIDTH * 0.4, width: SCREEN_WIDTH * 0.4, overflow: "hidden", borderRadius: 10,elevation:2 }}>

                <Image source={require('../Assets/Images/magictv_logo.png')}
                    style={{ height: SCREEN_WIDTH * 0.4, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                />

            </View>
        )
    }
}

export default Splash