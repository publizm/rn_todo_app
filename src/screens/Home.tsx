import React, {useLayoutEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

//? RootStackParam에 있는 Home의 params 타입을 지정
type HomeScreenParams = RouteProp<RootStackParamList, 'Home'>;

const Home = () => {
  const route = useRoute<HomeScreenParams>();
  const [localCount, setLocalCount] = useState(0);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    //? Stack.Screen에서 localCount라는 변수를 내려줄 수 없어서 LayoutEffect로 만들어준다?
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setLocalCount((c) => c + 1)}
          title="Update count"
        />
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>localCount: {localCount}</Text>
      <Text>Hello {route.params.userName}!</Text>
      {route.params.count && (
        <>
          <Text style={{fontSize: 20}}>두둥 등장ggg!gggg!</Text>
          <Text style={{fontSize: 30}}>{route.params.count}</Text>
        </>
      )}
      <Button
        title="Go to List Screen"
        onPress={() =>
          navigation.navigate('List', {
            randomCount: Math.floor(Math.random() * 100),
            title: 'hello world',
          })
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
