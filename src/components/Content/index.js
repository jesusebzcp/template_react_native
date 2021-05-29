import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const Content = ({children, background = Colors.background, dark = false}) => {
  const mode = dark ? 'dark-content' : 'light-content';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: background,
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={background} barStyle={mode} animated />
      {children}
    </SafeAreaView>
  );
};

export default Content;
