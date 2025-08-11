

import React from "react";
import { TaskList } from "../../components";

const AllTasks = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <TaskList
      tasks={tasks}
      onToggle={toggleTask}
      onEdit={editTask}
      onDelete={deleteTask}
    />
  );
};

export default AllTasks;
