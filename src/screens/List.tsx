import React from 'react';
import {Button, StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import TodoList from '@components/TodoList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type ListScreenParams = RouteProp<RootStackParamList, 'List'>;

export const Feed = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{height: '100%', justifyContent: 'center'}}>
      <Text>Feed</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export const Messages = () => (
  <SafeAreaView style={{height: '100%', justifyContent: 'center'}}>
    <Text>Messages</Text>
  </SafeAreaView>
);

const List = () => {
  const route = useRoute<ListScreenParams>();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello List!!</Text>
      <Text style={{fontSize: 30}}>count : {route.params.randomCount}</Text>
      <TodoList />
      <Button
        title="Go to Home Screen"
        onPress={() =>
          navigation.navigate('Home', {count: route.params.randomCount})
        }
      />
      <Button
        title="Go to Menu Screen"
        onPress={
          () => navigation.navigate('Menu')
          // navigation.navigate('Menu', {screen: 'Messages'})
        }
      />
      <Button
        title="Change Header Title"
        onPress={() => navigation.setOptions({title: 'Changed Title!'})}
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
