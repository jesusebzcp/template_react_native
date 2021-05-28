/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Alert, Text} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  useEffect(() => {
    Alert.alert('Powered by:', Config.COPYRIGHT);
  }, []);
  return <Text>Hello word</Text>;
};

export default App;
