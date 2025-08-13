import React from 'react';
import { View } from 'react-native';
import { TaskList } from '../../components';
import { useTasksContext } from '../../components/TasksContext';

const CompletedTasks = () => {
  const { tasks, toggleTask, deleteTask, editTask } = useTasksContext();
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
