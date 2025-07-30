// components/TaskList.js
import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import Icon from 'react-native-vector-icons';

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
  const renderItem = ({ item }) => (
    <View style={styles.list}>
      <View style={styles.checkbox}>
        <TouchableOpacity
          style={styles.clickcheck}
          onPress={() => onToggle(item.id)}
        >
          <Text>{item.checked ? '✓' : ''}</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={[
          styles.tasklist,
          item.checked && { textDecorationLine: 'line-through' },
        ]}
      >
        {item.text}
      </Text>

      <Text style={styles.editButton} onPress={() => onEdit(item.id)}>
        Edit
        
      </Text>
      {/* <Icon name='delete' color='green' size={22} type='MaterialIcons'/> */}
      
      <Text style={styles.editButton} onPress={() => onDelete(item.id)}>
        Delete
      </Text>

      <View
        style={[styles.colorButton, { backgroundColor: item.color }]}
      />
    </View>
  );

  return (
    <FlatList
      style={styles.flatlist}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.line} />}
    />
  );
};

export default TaskList;
