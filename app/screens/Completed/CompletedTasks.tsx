import React from "react";
import { TaskList } from "../../components";
import { View } from "react-native";
const CompletedTasks=({tasks=[],onToggle,onEdit,onDelete})=>{
    const completedTasks=tasks.filter((task)=>task.checked)
    return(
        <View>
      <TaskList
        tasks={completedTasks}
        onToggle={onToggle}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </View>
    )
}
export default CompletedTasks