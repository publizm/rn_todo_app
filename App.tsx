import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackHeaderTitleProps,
} from '@react-navigation/stack';
import Home from './src/screens/Home';
import List from './src/screens/List';
import TestImage from '@assets/images/logo.png';

export type RootStackParamList = {
  Home: {
    userName: string;
    count: number;
  };
  List: {
    title: string;
    randomCount: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const LogoTitle = (_props: StackHeaderTitleProps) => (
  <Image style={{width: 50, height: 50}} source={TestImage} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //? screenOptions - 공통 해더 스타일 공유
          headerStyle: {
            backgroundColor: '#FFF',
            borderWidth: 0,
          },
          headerTintColor: '#0c080c',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{userName: 'publee'}}
          options={{headerTitle: (props) => <LogoTitle {...props} />}}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
