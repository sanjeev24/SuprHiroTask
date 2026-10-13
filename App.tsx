/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MainNavigation } from "./src/Navigation/MainNavigation";
import { store } from "./src/Store/AppStore";
import { Provider } from "react-redux";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { SystemBars } from "react-native-edge-to-edge";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
      <SafeAreaProvider
        style={{
          flex: 1,
        }}
      >
        <SystemBars style={isDarkMode ? 'light' : 'dark'} />
        
          <Provider store={store}>
              <NavigationContainer>
                <MainNavigation />
              </NavigationContainer>
          </Provider>
      </SafeAreaProvider>
   
  );

}

export default App;
