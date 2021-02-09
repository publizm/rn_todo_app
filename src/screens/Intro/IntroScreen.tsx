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
import {useNavigation} from '@react-navigation/native';

console.log(ArrowBlueSVG);

const IntroScreen = () => {
  const navigation = useNavigation();

  const onHandeledPress = () => navigation.navigate('Home');

  return (
    <SafeAreaView style={styles.IntroConatiner}>
      <Text style={styles.IntroTitle}>Hello I'm Intro Screen</Text>
      <TouchableOpacity style={styles.nextPageButton} onPress={onHandeledPress}>
        <Text style={styles.nextPageButtonText}>들어가기</Text>
        <ArrowBlueSVG />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  IntroConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IntroTitle: {
    fontSize: 25,
  },
  nextPageButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nextPageButtonText: {
    color: `${palette.blue_500}`,
    padding: 5,
    fontSize: 20,
  },
});
