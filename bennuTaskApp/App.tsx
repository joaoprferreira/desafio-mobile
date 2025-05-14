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
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Routes />
              <Toast />
            </NavigationContainer>
          </ThemeProvider>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
