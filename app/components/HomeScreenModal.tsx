import { View, Text ,TouchableOpacity,Modal,FlatList} from 'react-native'
import React from 'react'
// import { Modal } from 'react-native-paper'
import styles from '../../Styles'
import { SafeAreaProvider ,SafeAreaView} from 'react-native-safe-area-context'
// import { SafeAreaView } from 'react-native/types_generated/index'

export default function HomeScreenModal({visible,onClose,selectedCategory,tasks,onToggle}) {
  const filteredTask=tasks.filter(
    tasks=>tasks.color===selectedCategory.color
  )
 
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredview}>
    <View>
        <Modal
        animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
       
          
                    {/* <Text>Hii</Text> */}

      <View style={[styles.homemodal,{backgroundColor:selectedCategory.color}]}>
        <TouchableOpacity style={styles.modalclose} onPress={onClose}>
           
          </TouchableOpacity>
        <Text style={styles.modalheadercontent}>{selectedCategory.name}</Text>

         
               <FlatList
              data={filteredTask}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                <View style={styles.taskContainer}>
                  <TouchableOpacity
                    style={styles.clickchecks}
                    onPress={() => onToggle(item.id)}
                  >
                    <Text>{item.checked ? '✓' : ''}</Text>
                  </TouchableOpacity>
                  <Text style={styles.taskText}>{item.text}</Text>
                </View>
                 </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.line} />}
              
            />        
                
      </View>
      </Modal>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
    
  )
}