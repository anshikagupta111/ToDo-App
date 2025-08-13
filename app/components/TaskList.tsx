import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../Styles';
import { TaskListProps } from '../Interfaces/TaskListProps';
import {Task} from '../Interfaces/TasksContextProps'
import RNTexts from './Texts';
const TaskList:React.FC<TaskListProps>= ({ tasks, onToggle, onEdit, onDelete }) => {
  const renderItem = ({ item }:{item:Task}) => (
    <View style={styles.list}>
      <View style={styles.checkbox}>
        <TouchableOpacity
          onPress={() => onToggle(item.id)}
        >
          <Text>{item.checked ? '✓' : ''}</Text>
        </TouchableOpacity>
      </View>

      <RNTexts
        style={[
          styles.tasklist,
          item.checked && { textDecorationLine: 'line-through' },
        ]} value={item.text} onPress={()=>{}}
      />
       

      <RNTexts style={styles.editButton} value="Edit" onPress={() => onEdit(item.id)} />
      <RNTexts style={styles.editButton} value="Delete"onPress={() => onDelete(item.id)}/>
       

      <View style={[styles.colorButton, { backgroundColor: item.color }]} />
    </View>
  );

  return (
    <FlatList
      keyExtractor={(item) => String(item.id)}
      data={tasks}
      
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.line} />}
    />
  );
};

export default TaskList;
