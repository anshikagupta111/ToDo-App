import React from "react";
import { TaskList } from "../../components";
import { View } from "react-native";
// import TaskList from "../../components";
const CompletedTasks=({route})=>{
  const {tasks,toggleTask,deleteTask,editTask}=route.params
    const completedTasks=tasks.filter((task)=>task.checked)
    return(
       <TaskList tasks={completedTasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask}/>
    )
}
export default CompletedTasks