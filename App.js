/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './src/store/reducers/user'
import videoReducer from './src/store/reducers/videos'
import AppNavigator from './src/navigation/AppNavigator'
import ReduxThunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
 // whitelist: ['bookmarks']
};

const rootReducer = combineReducers({
  user : persistReducer(persistConfig, userReducer),
  videos : videoReducer
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
const persistor = persistStore(store);

const App = () => {
  return(
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App;
