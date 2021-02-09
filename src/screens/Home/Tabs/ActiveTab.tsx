import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const ActiveTab = () => {
  return (
    <SafeAreaView style={styles.TabContainer}>
      <Text>Hello I'm Active Tab</Text>
    </SafeAreaView>
  );
};

export default ActiveTab;

const styles = StyleSheet.create({
  TabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
