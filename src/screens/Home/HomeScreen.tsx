import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AllTab from '@screens/Home/Tabs/AllTab';
import ActiveTab from '@screens/Home/Tabs/ActiveTab';
import DoneTab from '@screens/Home/Tabs/DoneTab';
import HomeTabBar from '@screens/Home/HomeTabBar';

const HomeTabs = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <HomeTabs.Navigator
        initialRouteName="All"
        tabBar={(props) => <HomeTabBar {...props} />}>
        <HomeTabs.Screen name="All" component={AllTab} />
        <HomeTabs.Screen name="Active" component={ActiveTab} />
        <HomeTabs.Screen name="Done" component={DoneTab} />
      </HomeTabs.Navigator>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
