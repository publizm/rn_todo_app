import React from 'react';
import {StyleSheet, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
  StackHeaderTitleProps,
} from '@react-navigation/stack';
import Home from '@screens/Home';
import List, {Feed, Messages} from '@screens/List';
import TestImage from '@assets/images/logo.png';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: {
    userName: string;
    count: number;
  };
  List: {
    title: string;
    randomCount: number;
  };
  Menu: {};
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const LogoTitle = (_props: StackHeaderTitleProps) => (
  <Image style={{width: 50, height: 50}} source={TestImage} />
);

const Menu = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Messages" component={Messages} />
  </Tab.Navigator>
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
          headerTransparent: true,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{userName: 'publee'}}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                label="backing" //? 오버라이딩 텍스트
                onPress={() => {
                  // Do something
                }}
              />
            ),
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            ),
          }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
