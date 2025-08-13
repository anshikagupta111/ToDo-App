import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../Styles';
import { FlatList } from 'react-native-gesture-handler';
import RNTexts from './Texts';
import { HomeScreenListProps } from '../Interfaces/HomeScreenListProps';

const HomeScreenList:React.FC<HomeScreenListProps>=({ categories, onListPress })=> {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onListPress(item)}
            style={[styles.categoryCard, { backgroundColor: item.color }]}
          >
            
            <RNTexts style={styles.categoryName} value={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
export default HomeScreenList
