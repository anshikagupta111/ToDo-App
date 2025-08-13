import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../../Styles';
import { Text } from 'react-native';
import { NavButtonProps } from '../Interfaces/NavButtonProps';
const NavButton:React.FC<NavButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity  onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default NavButton;
