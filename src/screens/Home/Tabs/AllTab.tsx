import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const AllTab = () => {
  return (
    <SafeAreaView style={styles.TabContainer}>
      <Text>Hello I'm Home Tab</Text>
    </SafeAreaView>
  );
};

export default AllTab;

const styles = StyleSheet.create({
  TabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
