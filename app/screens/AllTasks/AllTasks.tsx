

import React from "react";
import { TaskList } from "../../components";

export default AllTasks = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <TaskList
      tasks={tasks}
      onToggle={toggleTask}
      onEdit={editTask}
      onDelete={deleteTask}
    />
  );
};


