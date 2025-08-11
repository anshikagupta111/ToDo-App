

import React from "react";
import { View } from "react-native";
import { TaskList } from "../../components";

const CompletedTasks = ({ tasks, toggleTask, deleteTask, editTask }) => {
  const completedTasks = tasks.filter(task => task.checked);
  return (
    <View>
      <TaskList
        tasks={completedTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </View>
  );
};

export default CompletedTasks;
