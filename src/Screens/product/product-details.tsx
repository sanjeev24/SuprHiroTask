
//import liraries
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  StackNavigationProps
} from '@react-navigation/stack';

import {RootStackParamsList} from '../Navigation/MainNavigation';

interface DetailsScreenProps{
  navigation: StackNavigationProps<RootStackParamsList,'ProductDetails'>
}

const { height, width } = Dimensions.get('screen');


// create a component
const ProductDetails = ({navigation}:DetailsScreenProps) => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const item = route.params.item;

  return (   
      
    <View
      style={{
        ...styles.container,
        backgroundColor: Colors.backgroundColor,
        paddingTop: insets.top,
      }}
    >
      <View
        style={{
          ...styles.top_view,
          backgroundColor: Colors.primaryThemeColor,
        }}
      >
         <View style={styles.header_one}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{
                ...styles.title_txt,
                color:
                  Colors.black,
              }}>{'< Back'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.header_two}>  
            <Text
              style={{
                ...styles.title_txt,
                color:
                  Colors.black,
              }}
            >
              {item.title.length > 28 ? item.title.slice(0, 28) + '...' : item.title}
            </Text>
          </View>
     </View>

     <View style={{ ...styles.container_item,
          borderColor: Colors.CardBorder,
          backgroundColor: Colors.secondaryThemeColor,
     }}  >    
    
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {item.thumbnail != null ? (
          <Image style={styles.item_img} source={{ uri: item.thumbnail }} />
        ) : null}

        <View
          style={{
            marginLeft: moderateScale(10),
            minHeight: item.thumbnail == null ? moderateScale(60) : null,
            width: moderateScale(210),
          }}
        >
          <Text
            style={{
              ...styles.res_txt,
              color: Colors.subFontcolor,
            }}
          >
            {item.title}
          </Text>
          <View style={styles.main_view}>
            <Text
              style={{
                ...styles.price_txt,
                color: Colors.primaryFontColor,
              }}
            >
              {"Price"}
            </Text>
            <Text
              style={{
                ...styles.location_txt,
                color: Colors.secondaryFontColor,
              }}
            >
              {"\u20B9"} {parseFloat(item.price).toFixed(2)}
            </Text>
          </View>
          <View style={styles.main_view}>
            <Text
              style={{
                ...styles.price_txt,
                color: Colors.primaryFontColor,
              }}
            >
              {"SKU"}
            </Text>
            <Text
              style={{
                ...styles.location_txt,
                color: Colors.secondaryFontColor,
              }}
            >
              {item.sku}
            </Text>
          </View>
        </View>
      </View>
      </View>

      <View style={{paddingHorizontal: moderateScale(10)}}>
        <Text style={{fontFamily: FONTS.Poppins.semibold, color: Colors.black}}>Description:</Text>
        <Text style={{fontFamily: FONTS.Poppins.regular, color: Colors.black}}>{item.description}</Text>
      </View>

       </View>   
           
   
  );
};

// define your styles
const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  top_view: {
    width: width,
    height: moderateScale(40),
    paddingHorizontal: moderateScale(15),
    flexDirection: 'row',
    
  },
  title_txt:{
    fontSize: responsiveFontSize(1.8)
  },
  header_one: {
    width: '15%',
    alignItems: 'center',
    
  },
  header_two: {
    width: '80%',
    alignItems: 'center',
  },

 container_item: {
    padding: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item_img: {
    height: moderateScale(60),
    width: moderateScale(60),
  },
  res_txt: {
    fontFamily: FONTS.Poppins.semibold,
    fontSize: moderateScale(12),
  },
  main_view: {
    flexDirection: "row",
    alignItems: "center",
  },
  price_txt: {
    fontFamily: FONTS.Poppins.regular,
    fontSize: moderateScale(11),
    width: moderateScale(62),
  },
  location_txt: {
    fontFamily: FONTS.Poppins.medium,
    fontSize: moderateScale(11),
    marginLeft: moderateScale(7),
  },
  edit_img: {
    resizeMode: "contain",
  },
  priceOriginal_txt: {
    fontFamily: FONTS.Poppins.semibold,
    fontSize: moderateScale(11),
    marginLeft: moderateScale(7),
  },
});

//make this component available to the app
export default ProductDetails;
