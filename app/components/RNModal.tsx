import React from 'react';
import { View, Modal, TouchableOpacity} from 'react-native';
import styles from '../../Styles';
import { CustomModalProps } from '../Interfaces/RNModalProps';
const RNModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
  backgroundColor = 'white',
}) => {
  return (
    <Modal style={styles.viewing}animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={[styles.modalBackground, { backgroundColor }]}>
        <TouchableOpacity style={styles.closeArea} onPress={onClose} />
        <View style={styles.content}>{children}</View>
      </View>
    </Modal>
  );
};
export default RNModal