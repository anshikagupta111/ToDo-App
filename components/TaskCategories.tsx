// components/CategoryList.js
import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import styles from '../Styles';

const TaskCategory = ({ categories, onSelect }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => onSelect(item)}
    >
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default TaskCategory;
