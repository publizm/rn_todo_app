import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const WriteModal = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightpink',
      }}>
      <Text style={{fontSize: 18}}>글쓰기 영역!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default WriteModal;

const styles = StyleSheet.create({});
