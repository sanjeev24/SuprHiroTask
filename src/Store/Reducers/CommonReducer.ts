import { createSlice, payloadAction } from '@reduxjs/toolkit';

import {RootState} from "../AppStore";

const initialState = {
  isDarkMode: false,
  userData: null,
  userToken: '',
  deviceToken: '',
  baseUrl: 'https://demo-api.nexordr.cloud/api/',
  siteUrl: 'https://demo-api.nexordr.cloud/',
  tempEmailorMobile: '',
  google_api_key: 'AIzaSyBpSkj0NweCwl-KDpFQ-U3mVYIl0-6qtWo',
  google_auto_complete_country: 'country:in',
  //Navigation state
  isStackHeaderVisible: false,
  LangValue: {},
  selectedLang: 1,
  newOrder: 0,
  newOrderNotification: {},
  newOrderData: {},
  orderid: null,
  user_slug: 'KRXPWDOZUFLN',
  appSettings: null,
  tabselection: 1,
  notes: []
};

export const commonReducer = createSlice({
  name: 'common',
  initialState,
  reducers: {
    addNotes: (state, action) => {
      console.log(action.payload);
      state.notes.push(action.payload);
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },

    saveOrderId: (state, action) => {
      console.log('order_id set');
      state.orderid = action.payload;
    },

    deleteOrderId: (state, action) => {
      console.log('order_id set');
      state.orderid = action.payload;
    },

    saveData: (state, action) => {
      console.log('csdkbcsdkbcdsbck');
      // state.userData = action.payload;
    },

    setTempEmail: (state, action) => {
      state.tempEmailorMobile = action.payload;
    },

    setUserData: (state, action) => {
      console.log('action data : ', action.payload.token);
      state.userData = action.payload.data;
      state.userToken = action.payload.token;
    },
    setUserDataAfterLogin: (state, action) => {
      state.userData = action.payload;
    },

    clearUserData: state => {
      state.userData = null;
      state.userToken = '';
      state.orderid = null;
    },

    localstorage_DeviceTokenAdd: (state, action) => {
      console.log('common:' + action.payload);
      state.deviceToken = action.payload;
    },

    localstorage_TokenAdd: (state, action) => {
      state.userToken = action.payload;
    },
    localstorage_UserdetailsAdd: (state, action) => {
      state.userData = action.payload;
    },

    //Navigation State
    setIsStackHeaderVisible: (state, action) => {
      state.isStackHeaderVisible = action.payload;
    },

    setLanguage: (state, action) => {
      state.selectedLang = action.payload;
    },
    setLanguageValue: (state, action) => {
      state.LangValue = action.payload;
    },
    setNewOrder: (state, action) => {
      state.newOrder = action.payload;
    },
    setNewOrderNotification: (state, action) => {
      state.newOrderNotification = action.payload;
    },
    setNewOrderData: (state, action) => {
      state.newOrderData = action.payload;
    },
    SetAppSettings: (state, action) => {
      console.log('appSettings:' + action.payload);
      state.appSettings = action.payload;
    },
    SetTabSelection: (state, action) => {
      console.log('tabselection:' + action.payload);
      state.tabselection = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsDarkMode,
  saveData,
  setTempEmail,
  setUserData,
  clearUserData,
  localstorage_TokenAdd,
  localstorage_UserdetailsAdd,
  setUserDataAfterLogin,
  localstorage_DeviceTokenAdd,
  setLanguage,
  setLanguageValue,
  //Navigation State
  setIsStackHeaderVisible,
  // advertisement for tab screens
  setNewOrder,
  setNewOrderNotification,
  setNewOrderData,
  saveOrderId,
  deleteOrderId,
  SetAppSettings,
  SetTabSelection,
  addNotes
} = commonReducer.actions;

export const commonSelector = (state:RootState) => state.common;

export default commonReducer.reducer;
