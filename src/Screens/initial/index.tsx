//import liraries
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Animated,
  StatusBar,
  Alert,
  PermissionsAndroid,
  Modal,
  TouchableOpacity,
  Linking,
} from 'react-native';
// import Styles from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getData, setData, removeData } from '../../Service/localStorage';
import { postWithOutToken } from '../../Service/service';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { FONTS } from '../../Constants/Fonts';
import { Colors } from '../../Constants/Colors';
import { moderateScale } from '../../Constants/PixelRatio';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamsList} from '../Navigation/MainNavigation';
interface InitialScreenProps{
  navigation: StackNavigationProp<RootStackParamsList,'Initial'>
} 

// create a component
const Initial = ({navigation}:InitialScreenProps) => {

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('ProductList');      
    }, 500);

  },[])


  return (  
       
          <View
            style={{
              ...styles.container,
              backgroundColor:
                 Colors.backgroundColor,
            }}
          >
            <View
              style={{
                ...styles.img_background,
              }}
            >
             <Text style={{color: Colors.primaryFont, fontSize: responsiveFontSize(5)}}>Welcome</Text>
            </View>
          </View>
   
  );
};

// define your styles
const styles = StyleSheet.create({
   container: {
      flex: 1,
    },
    img_background: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
});

//make this component available to the app
export default Initial;
