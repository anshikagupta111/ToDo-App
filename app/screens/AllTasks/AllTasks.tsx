import React from "react";
import { TaskList } from "../../components";
import { View,TouchableOpacity,Text } from "react-native";
import { FlatList } from "react-native";
import styles from "../../../Styles";

const AllTasks=({ route, onToggle, onEdit, onDelete })=>{
    const {tasks}=route.params
     const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => onToggle(item.id)}>
        <Text>
          {item.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonItem}>
        <TouchableOpacity onPress={() => onEdit(item.id)}>
          <Text >Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
    return(
        
       <View>
        <FlatList 
        
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No tasks available</Text>}
      />
       </View>
    )
}
export default AllTasks