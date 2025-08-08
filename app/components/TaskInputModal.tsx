// components/TaskInputModal.js
import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../Styles';
import { SelectList } from 'react-native-dropdown-select-list';

const TaskInputModal = ({
  visible,onClose,onSubmit,value,onChangeText,categories,selectedCategory,setSelectedCategory,isEditing = false,
}) => {
  const dropdowndata=categories.map(category=>({
    key:category.id,
    value:category.name,
    color:category.color
  }))
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
        <View>
          <SelectList
          
          data={dropdowndata}
          setSelected={(selectedValue)=>{
            const selected=categories.find(c=>c.name===selectedValue)
            if(selected) {setSelectedCategory(selected)}
          }}
           save="value"
  placeholder="Select Category"
  boxStyles={{marginTop:10,width:298,marginLeft:20}}
  dropdownStyles={{width:298,marginLeft:20}}
  defaultOption={
    selectedCategory ? { key: selectedCategory.id, value: selectedCategory.name } : null
  }
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
