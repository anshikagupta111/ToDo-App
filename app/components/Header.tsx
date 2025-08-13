import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import React from 'react';
import styles from '../../Styles';
import { TextInput } from 'react-native-gesture-handler';
import { HeaderProps } from '../Interfaces/HeaderProps';

import RNTexts from './Texts';
const Header:React.FC<HeaderProps>= ({ onAddPress, onSearchTextChange }) =>{
  return (
    <View style={styles.header}>
      <RNTexts style={styles.headercontent} value="Today"  />
      <TextInput
        placeholder="Search Tasks"
        placeholderTextColor={'grey'}
        style={styles.searchContainer}
        onChangeText={onSearchTextChange}
      />
      <TouchableOpacity style={styles.circle} onPress={onAddPress}>
        <RNTexts style={styles.plus} value="+"  />
      </TouchableOpacity>
    </View>
  );
}
export default Header
