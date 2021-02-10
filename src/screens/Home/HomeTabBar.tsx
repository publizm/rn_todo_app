import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import palette from '@assets/styles/palette';
import AllTab from './Tabs/AllTab';
import ActiveTab from './Tabs/ActiveTab';
import DoneTab from './Tabs/DoneTab';
import {SafeAreaProvider} from 'react-native-safe-area-view';

const HomeTabBarList = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
  return (
    //? 컨테이너 역할
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        //? 해당 라우터의 키 값으로 옵션을 가져온다.
        const {options} = descriptors[route.key];

        //? 스크린에 노출될 label
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        //? 열린 탭 체크
        const isFocused = state.index === index;

        const onPress = () => {
          //? navigation.emit함수는 특정이벤트를 감지하는
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const styles = StyleSheet.create({
          TabTouchableButton: {
            flex: 1,
          },
          TabText: {
            textAlign: 'center',
            backgroundColor: isFocused ? palette.blue_500 : '#fff',
            paddingVertical: 10,
            fontWeight: isFocused ? '700' : '400',
            fontSize: 16,
            color: isFocused ? '#fff' : '#222',
          },
        });

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.TabTouchableButton}>
            <Text style={styles.TabText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const HomeTab = createBottomTabNavigator();

const HomeTabBar = () => {
  return (
    <SafeAreaProvider>
      <HomeTab.Navigator
        initialRouteName="All"
        tabBar={(props) => <HomeTabBarList {...props} />}>
        <HomeTab.Screen name="All" component={AllTab} />
        <HomeTab.Screen name="Active" component={ActiveTab} />
        <HomeTab.Screen name="Done" component={DoneTab} />
      </HomeTab.Navigator>
    </SafeAreaProvider>
  );
};

export default HomeTabBar;
