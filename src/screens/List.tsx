import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';

type ListScreenParams = RouteProp<RootStackParamList, 'List'>;

const List = () => {
  const route = useRoute<ListScreenParams>();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello List!!</Text>
      <Text style={{fontSize: 30}}>count : {route.params.randomCount}</Text>
      <Button
        title="Go to Home Screen"
        onPress={() =>
          navigation.navigate('Home', {count: route.params.randomCount})
        }
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
