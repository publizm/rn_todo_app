import palette from '@assets/styles/palette';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import ArrowBlueSVG from '@assets/svg/icon_arrow_right.svg';
import Logo from '@assets/images/logo.png';

console.log(ArrowBlueSVG);

const IntroScreen = () => {
  const onHandeledPress = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => {
            alert('Ask me later');
            console.log('Ask me later pressed');
          },
        },
        {
          text: 'Cancel',
          onPress: () => {
            alert('Cancel');
            console.log('Cancel Pressed');
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            alert('OK');
            console.log('OK Pressed');
          },
        },
      ],
      {cancelable: false},
    );

  return (
    <SafeAreaView style={styles.introConatiner}>
      <Text>Hello I'm Intro Screen</Text>
      <TouchableOpacity onPress={onHandeledPress}>
        <Text style={styles.StartTodoListButton}>들어가기</Text>
        <ArrowBlueSVG />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  introConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  StartTodoListButton: {
    color: `${palette.blue_500}`,
    padding: 5,
  },
});
