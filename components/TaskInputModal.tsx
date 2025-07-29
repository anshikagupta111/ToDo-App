// components/TaskInputModal.js
import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Styles';

const TaskInputModal = ({
  visible,
  onClose,
  onSubmit,
  value,
  onChangeText,
  isEditing = false,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View>
          <Text style={styles.todo}>{isEditing ? 'Edit Todo' : 'Add Todo'}</Text>
          <TextInput
            multiline={true}
            style={styles.textInput}
            placeholder="Enter your task"
            value={value}
            onChangeText={onChangeText}
          />
        </View>

        <View style={styles.donebutton}>
          <TouchableOpacity style={styles.cancel} onPress={onClose}>
            <Text style={styles.canceltext}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.done} onPress={onSubmit}>
            <Text style={styles.donetext}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInputModal;
