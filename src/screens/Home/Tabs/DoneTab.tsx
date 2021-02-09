import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const DoneTab = () => {
  return (
    <SafeAreaView style={styles.TabContainer}>
      <Text>Hello I'm Done Tab</Text>
    </SafeAreaView>
  );
};

export default DoneTab;

const styles = StyleSheet.create({
  TabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
