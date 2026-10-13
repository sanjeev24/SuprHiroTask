//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "../../Constants/PixelRatio";
import { FONTS } from "../../Constants/Fonts";
import { Colors } from "../../Constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

// create a component
const ProductCard = ({ index, item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          id: item.id,
          item: item,
        })
      }
      style={{
        ...styles.container,
        borderColor: Colors.CardBorder,
        backgroundColor: Colors.secondaryThemeColor,
      }}
    >
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
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    borderWidth: 1,
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
export default ProductCard;
