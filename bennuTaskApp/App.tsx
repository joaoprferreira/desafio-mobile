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
import {StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default App;
