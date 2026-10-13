import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
  Initial,
  ProductList,
  ProductDetails
} from "../Screens";

export type RootStackParamsList = {
  Initial: undefined,
  ProductList: undefined
  ProductDetails: {id: Number}
}

const Stack = createStackNavigator<RootStackParamsList>();

const MainNavigation = () => { 

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // animationEnabled: Platform.OS === "android" ? false : true,
        gestureEnabled: Platform.OS === "android" ? false : true,
        headerShadowVisible: false,
        // detachInactiveScreens: true,
      }}
      initialRouteName="Initial"
    >
      <Stack.Screen
        name="Initial"
        component={Initial}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
      />  
       <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
      />          
    </Stack.Navigator>
  );
};

export { MainNavigation };
