import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeTabBar from '@screens/Home/HomeTabBar';
import {createStackNavigator} from '@react-navigation/stack';
import WriteModal from '@screens/Home/WriteModal';

const HomeStack = createStackNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <HomeStack.Navigator
        initialRouteName="Home"
        mode="modal"
        screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={HomeTabBar} />
        <HomeStack.Screen name="Write" component={WriteModal} />
      </HomeStack.Navigator>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
