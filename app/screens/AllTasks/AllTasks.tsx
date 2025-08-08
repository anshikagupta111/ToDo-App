import React from "react";
import { TaskList } from "../../components";
import { View,TouchableOpacity,Text } from "react-native";
import { FlatList } from "react-native";
import styles from "../../../Styles";

const AllTasks=({ route, toggleTask, editTask , deleteTask })=>{
    const {tasks}=route.params
     const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Text>
          {item.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonItem}>
        <TouchableOpacity onPress={() => editTask (item.id)}>
          <Text >Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>deleteTask(item.id)}>
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