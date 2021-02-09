import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllTab from '@screens/Home/Tabs/AllTab';
import ActiveTab from '@screens/Home/Tabs/ActiveTab';
import DoneTab from '@screens/Home/Tabs/DoneTab';

const HomeTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeTabs.Navigator initialRouteName="All">
      <HomeTabs.Screen name="All" component={AllTab} />
      <HomeTabs.Screen name="Active" component={ActiveTab} />
      <HomeTabs.Screen name="Done" component={DoneTab} />
    </HomeTabs.Navigator>
  );
};

export default Home;
