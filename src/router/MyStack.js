import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS_STACK} from '../config/screens';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {SCREENS_STACK.map((screen, index) => {
          const {Screen, name} = screen;
          return (
            <Stack.Screen
              options={{headerShown: false}}
              name={name}
              component={Screen}
              key={index}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
