/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {theme} from './src/styles/theme';
import {Routes} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/es/integration/react';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Routes />
              <Toast />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
