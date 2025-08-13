import React from 'react';
import { TaskList } from '../../components';
import { useTasksContext } from '../../components/TasksContext';

const AllTasks = () => {
  const { tasks, toggleTask, deleteTask, editTask } = useTasksContext();
  return (
    <TaskList
      tasks={tasks}
      onToggle={toggleTask}
      onEdit={editTask}
      onDelete={deleteTask}
    />
  );
};
export default AllTasks
