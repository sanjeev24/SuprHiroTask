
//import liraries
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Alert,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { postWithOutToken, getDataWithOutToken } from '../../Service/service';
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
import ProductCardSkeleton from '../../Component/skeleton/ProductCardSkeleton';
import ProductCard from '../../Component/product/ProductCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  StackNavigationProps
} from '@react-navigation/stack';

import {RootStackParamsList} from '../Navigation/MainNavigation';

interface ProductListScreenProps{
  navigation: StackNavigationProps<RootStackParamsList,'ProductList'>
}

const { height, width } = Dimensions.get('screen');

// create a component
const ProductList = ({navigation}:ProductListScreenProps) => {

   const insets = useSafeAreaInsets();

  const [viewloader, setLoader] = useState(false);
  const [product_list, setProductList] = useState({
    isLoading: true,
    list: [],
  });
  const [viewmoreloader, setMoreLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMsg, setError] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      fetchProductList();  
    }, []),
  );

  const fetchProductList = () => {
    setMoreLoader(true);
    const nextPage = 10;
    getDataWithOutToken('https://dummyjson.com/' , `products?skip=${currentPage}&limit=10`)
      .then(response => {
        setMoreLoader(false);  
        setError(null);
        
        if (response.products.length > 0) {
          setCurrentPage(nextPage);
          setProductList({
            isLoading: false,
            list: response.products,
          });
          
        } else {
          setProductList({
            isLoading: false,
            list: [],
          });
        }
       
      })
      .catch(error => {
        setMoreLoader(false);
        setError('Failed to load data. Please try again.');
      })
     
  };

  const fetchProductListRefresh = () => {
    setMoreLoader(true);
    const nextPage = currentPage + 10;
    getDataWithOutToken('https://dummyjson.com/' , `products?skip=${currentPage}&limit=10`)
      .then(response => {
          setMoreLoader(false);
          setError(null);
        
          if (response.products.length > 0) {
            setCurrentPage(nextPage);
            setProductList({
              isLoading: false,
              list: [...product_list.list, ...response.products],
            });
          } else {
            setProductList({ isLoading: false, list: product_list.list });
          }
      })
      .catch(error => {
        setMoreLoader(false);
        setError('Failed to load data. Please try again.');
        console.log('Error : ', error);
      });
  };

  const renderLoader = () => {
    return (
      <>
        {viewmoreloader === true
          ? Array.from({ length: 3 }).map((_, index) => (
              <ProductCardSkeleton key={'skeleton_lo' + index} />
            ))
          : null}
      </>
    );
  };

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
        <View style={styles.drawer_view}>
          <Text
            style={{
              ...styles.title_txt,
              color:Colors.secondaryThemeColor,
            }}
          >
            {'Product List'}
          </Text>
        </View>
        <View style={{ height: height }}>
          {product_list.isLoading === false && product_list.list.length > 0 ? (
            <View style={{ flex: 1, zIndex: 9999 }}>
              <FlatList
                data={product_list.list}
                ListFooterComponent={renderLoader}
                onMomentumScrollEnd={() => {
                  fetchProductListRefresh();
                }}
                onEndReachedThreshold={0.1}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <ProductCard
                    index={index}
                    item={item}
                  />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: moderateScale(180) }}
                removeClippedSubviews={false}
              />
            </View>
          ) : product_list.isLoading === true &&
            product_list.list.length == 0 && errorMsg == null ? (
            Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={'skeleton_' + index} />
            ))
          ): errorMsg != null ? (
            <View style={{alignItems: 'center'}}>
            <Text
              style={{
                marginTop: responsiveHeight(30),
                alignSelf: 'center',
                fontFamily: FONTS.Poppins.bold,
                fontSize: responsiveFontSize(2.2),
                color: Colors.red
              }}
            >
              {errorMsg}
            </Text>
            <TouchableOpacity onPress={() => {fetchProductList()}} style={{
                    ...styles.Button_choose,
                    borderColor:
                      Colors.buttonColor,
                    
                  }}>
                <Text>Try Again</Text>
            </TouchableOpacity>
            </View>
          ) : product_list.isLoading === false &&
            product_list.list.length == 0 ? (
            <Text
              style={{
                marginTop: responsiveHeight(30),
                alignSelf: 'center',
                fontFamily: FONTS.Poppins.bold,
                fontSize: responsiveFontSize(2.2),
                color: Colors.red
              }}
            >
              {'No Product Found'}
            </Text>
          ) : null}
        </View>
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
    height: moderateScale(170),
    paddingHorizontal: moderateScale(15),
  },
  drawer_view: {
    alignItems: 'center',
    marginTop: moderateScale(10),
    paddingHorizontal : responsiveScreenHeight(10)
  },
  
  title_txt: {
    fontFamily: FONTS.Poppins.semibold,
    fontSize: moderateScale(14),
  },
   Button_choose: {
    height: responsiveHeight(5),
    width: responsiveWidth(70),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(4),
    backgroundColor: '#FFFFFF',
    borderWidth: responsiveWidth(0.5),
    paddingHorizontal: responsiveWidth(4),
  },
  
});

export default ProductList;
