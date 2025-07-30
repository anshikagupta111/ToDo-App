import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Modal } from 'react-native-paper'
import styles from '../Styles'

export default function HomeScreenModal({visible,onClose}) {
  return (
    <View>
        <Modal
        animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Text>Hii</Text>
      </View>
      </Modal>
    </View>
    
  )
}