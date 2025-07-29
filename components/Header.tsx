import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from '../Styles'

export default function Header({onAddPress}) {
  return (
    <View style={styles.header}>
          <Text style={styles.headercontent}>Today</Text>
           <TouchableOpacity style={styles.circle} onPress={()=>onAddPress()}>
            <Text style={styles.plus}>+</Text>
           </TouchableOpacity>
        </View>
  )
}

