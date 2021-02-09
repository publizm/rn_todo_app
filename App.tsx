import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '@screens/Intro/IntroScreen';

const RootStack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Intro" component={IntroScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
