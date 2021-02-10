import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import PlusWhite from '@assets/svg/plus_white.svg';
import palette from '@assets/styles/palette';

const AllTab = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.TabContainer}>
      <ScrollView style={{flex: 1}}>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
        <Text>Hello I'm All Tab</Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.ModalTrigger}
        onPress={() => navigation.navigate('Write')}>
        <PlusWhite />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AllTab;

const styles = StyleSheet.create({
  TabContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalTrigger: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.blue_500,
    padding: 10,
    borderRadius: 50,
    transform: [{translateX: -25}],
  },
});
