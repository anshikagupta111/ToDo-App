import React from "react";
import { TaskList } from "../../components";
import { View,TouchableOpacity,Text } from "react-native";
import { FlatList } from "react-native";
import styles from "../../../Styles";
import { useTasks } from "../../hooks";
const AllTasks=({route})=>{
  const {tasks,toggleTask,deleteTask,editTask}=route.params
  // const {tasks,editTask,deleteTask,toggleTask}=useTasks()

  
    return(
        
      
<TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
   
    )
}
export default AllTasks