import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

const TodoList = () => {
  const TodoItem = ({item}: {item: {id: number; test: string}}) => {
    console.log(item);
    return <Text>{item.test}</Text>;
  };
  return (
    <FlatList
      bounces={false}
      data={[
        {id: 1, test: '1'},
        {id: 2, test: '2'},
        {id: 3, test: '3'},
      ]}
      renderItem={TodoItem}
      keyExtractor={(item) => item.test}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({});
