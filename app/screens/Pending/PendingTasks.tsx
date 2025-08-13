import React from 'react';
import { View } from 'react-native';
import { TaskList } from '../../components';
import { useTasksContext } from '../../components/TasksContext';

const PendingTasks = () => {
  const { tasks, toggleTask, editTask, deleteTask } = useTasksContext();
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
