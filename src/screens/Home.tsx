import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Home = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log('route', route);
  console.log('navigation', navigation);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello Home!</Text>
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate('List')}
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
