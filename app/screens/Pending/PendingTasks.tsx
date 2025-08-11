

import React from "react";
import { View } from "react-native";
import { TaskList } from "../../components";

const PendingTasks = ({ tasks, toggleTask, editTask, deleteTask }) => {
  const pendingTasks = tasks.filter(task => !task.checked);
  return (
    <View>
      <TaskList
        tasks={pendingTasks}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </View>
  );
};

export default PendingTasks;
