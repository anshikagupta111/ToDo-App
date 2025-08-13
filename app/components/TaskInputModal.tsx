import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../Styles';
import { SelectList } from 'react-native-dropdown-select-list';
import { TaskInputModalProps } from '../Interfaces/TaskInputModalProps';
import RNTexts from './Texts';
const TaskInputModal:React.FC<TaskInputModalProps>= ({
  visible,
  onClose,
  onSubmit,
  value,
  onChangeText,
  categories,
  selectedCategory,
  setSelectedCategory,
  isEditing = false,
}) => {
  const dropdowndata = categories.map(category => ({
    key: category.id,
    value: category.name,
    color: category.color,
  }));
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View>
          <RNTexts style={styles.todo} value={isEditing ? 'Edit Todo' : 'Add Todo'} />
            
          <TextInput
            multiline={true}
            style={styles.textInput}
            placeholder="Enter your task"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <View>
          <SelectList
            data={dropdowndata}
            setSelected={(selectedValue:String) => {
              const selected = categories.find(c => c.name === selectedValue);
              if (selected) {
                setSelectedCategory(selected);
              }
            }}
            save="value"
            placeholder="Select Category"
            boxStyles={{ marginTop: 10, width: 298, marginLeft: 20 }}
            dropdownStyles={{
              width: 298,
              marginLeft: 20,
              position: 'absolute',
              zIndex: 1000,
              backgroundColor: 'white',
            }}
            defaultOption={
              selectedCategory
                ? { key: selectedCategory.id, value: selectedCategory.name }
                : undefined
            }
          />
        </View>

        <View style={styles.donebutton}>
          <TouchableOpacity style={styles.cancel} onPress={onClose}>
            <RNTexts style={styles.canceltext} value='Cancel' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.done} onPress={onSubmit}>
            <RNTexts style={styles.donetext} value='Done'  />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInputModal;
