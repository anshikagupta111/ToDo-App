import { StyleSheet,TouchableOpacity, Text, View, Alert } from 'react-native'
import React from 'react'
import styles from '../Styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';


export default function Header({onAddPress,onSearchTextChange}) {
  return (
    
    <View style={styles.header}>
          <Text style={styles.headercontent}>Today</Text>
           <TextInput
           placeholder='Search Tasks'
           placeholderTextColor={'grey'}
           style={styles.searchContainer}
           onChangeText={onSearchTextChange}/>
           <TouchableOpacity style={styles.circle} onPress={()=>onAddPress()}>
            <Text style={styles.plus}>+</Text>
           </TouchableOpacity>
        </View>
        
  )
}

