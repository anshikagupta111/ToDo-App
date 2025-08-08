import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../Styles'
import { FlatList } from 'react-native-gesture-handler'

export default function HomeScreenList({categories,onListPress}) {
  return (
    <View>
      <FlatList
      data={categories}
      
       renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={()=>onListPress(item)}
          style={[styles.categoryCard,{backgroundColor:item.color}]}
>
      keyExtractor={item=>item.id}
      <Text style={styles.categoryName}>{item.name}</Text>
</TouchableOpacity>
)}
      />
    </View>
  )
}

