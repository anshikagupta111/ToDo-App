import React from "react";
import { View } from "react-native";
import { TaskList } from "../../components";

const PendingTasks = ({ tasks=[], onToggle, onEdit, onDelete }) => {
  const pendingTasks = tasks.filter((task) => !task.completed);
  return (
    <View>
      <TaskList
        tasks={pendingTasks}
        onToggle={onToggle}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </View>
  );
};

export default PendingTasks;