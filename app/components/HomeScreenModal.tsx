import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import styles from '../../Styles';
import RNTexts from './Texts';
import RNModal from './RNModal';
import { HomeScreenModalProps } from '../Interfaces/HomeScreenModalProps';

const HomeScreenModal: React.FC<HomeScreenModalProps> = ({
  visible,
  onClose,
  selectedCategory,
  tasks,
  onToggle,
}) => {
  const filteredTask = tasks.filter(task => task.color === selectedCategory.color);

  return (
    <RNModal visible={visible} onClose={onClose} backgroundColor={selectedCategory.color}>
      <RNTexts style={styles.modalheadercontent} value={selectedCategory.name} />

      <FlatList
        data={filteredTask}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.clickchecks} onPress={() => onToggle(item.id)}>
              <RNTexts style={{}} value={item.checked ? '✓' : ''} />
            </TouchableOpacity>
            <Text style={styles.taskText}>{item.text}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />
    </RNModal>
  );
};

export default HomeScreenModal;
