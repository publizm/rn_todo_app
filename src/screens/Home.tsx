import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

//? RootStackParam에 있는 Home의 params 타입을 지정
type HomeScreenParams = RouteProp<RootStackParamList, 'Home'>;

const Home = () => {
  const route = useRoute<HomeScreenParams>();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello {route.params.userName}!</Text>
      {route.params.count && (
        <>
          <Text style={{fontSize: 20}}>두둥 등장!!</Text>
          <Text style={{fontSize: 30}}>{route.params.count}</Text>
        </>
      )}
      <Button
        title="Go to List Screen"
        onPress={() =>
          navigation.navigate('List', {
            randomCount: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
