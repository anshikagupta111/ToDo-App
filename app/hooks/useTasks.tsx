import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import React from 'react'
// import styles from '../../Styles';

export default function useTasks() {
    const [isEditing, setIsEditing] = useState(false);
    const [editTaskId, setEditTaskId] = useState(null);
    const [selectedCategory,setSelectedCategory]=useState(null)
    const [searchQuery,setSearchQuery]=useState('')
    const[tasks, setTasks] = useState([]);
    const[newTask,setNewTask]=useState('');
    const[id,setId]=useState(0);
    const[modalVisible, setModalVisible] = useState(false);
    const categories=[
    {id:'1',name:'Work',color:'#61DEA4'},
    {id:'2',name:'Shopping',color:'#F45E6D'},
    {id:'3',name:'Family',color:'#FFE761'},
    {id:'4',name:'Personal',color:'#B678FF'}]
         const addTask = () => {
  if (isEditing) {
    setTasks(prevTask =>
      prevTask.map(task =>
        task.id === editTaskId ? { ...task, text: newTask } : task
      )
    );
    setIsEditing(false);
    setEditTaskId(null);
    setNewTask("");
    setModalVisible(false);
  } else {
    if (newTask!== "" && selectedCategory) {
      const taskItem = {
        id: id.toString(),
        text: newTask,
        color: selectedCategory.color,
        checked: false,
      };
      setTasks(prev => prev.concat(taskItem));
      setId(id + 1);
      setNewTask("");
      setModalVisible(false);
    }
  }
};

  const deleteTask=(delid)=>{
    setTasks(prevTask=>prevTask.filter(tasks=>tasks.id!==delid))
   }
   const toggleTask=(id)=>{
    setTasks(prevTask=>prevTask.map(task=>task.id===id?{...task,checked:!task.checked}:task))
   }

   const searchTask=(query)=>{
    setSearchQuery(query)
   }

     const editTask = (taskId) => {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    setNewTask(task.text);
    setSelectedCategory({ color: task.color }); 
    setIsEditing(true);
    setEditTaskId(taskId);
    setModalVisible(true);
  }
};
  return {
     tasks,
    newTask,
    setNewTask,
    categories,
    selectedCategory,
    setSelectedCategory,
    isEditing,
    searchQuery,
    modalVisible,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    searchTask,
    setModalVisible
  }
}

