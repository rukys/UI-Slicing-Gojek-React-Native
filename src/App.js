import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from './utils';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={colors.green2}
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
