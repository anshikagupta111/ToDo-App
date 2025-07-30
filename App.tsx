
import { View ,TouchableOpacity,Text,Modal,TextInput,FlatList} from 'react-native';
import React,{useState} from 'react';
import Header from './components/Header'
import styles from './Styles'
import TaskList from './components/TaskList'
import TaskInputModal from './components/TaskInputModal';
import TaskCategory from './components/TaskCategories';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const[tasks, setTasks] = useState([]);
  const[newTask,setNewTask]=useState('');
  const[id,setId]=useState(0);
  const[modalVisible, setModalVisible] = useState(false);
  const [listModalVisible,setListModalVisible]=useState(false)
  const [checked,setChecked]=useState(false);
  const [isEditing, setIsEditing] = useState(false);
const [editTaskId, setEditTaskId] = useState(null);
  const [selectedCategory,setSelectedCategory]=useState(null)
  const [searchQuery,setSearchQuery]=useState('')

  const AddTask = () => {
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

   const categories=[
    {id:'1',name:'Work',color:'#61DEA4'},
    {id:'2',name:'Shopping',color:'#F45E6D'},
    {id:'3',name:'Family',color:'#FFE761'},
    {id:'4',name:'Personal',color:'#B678FF'}]
    const AddCategory=(category)=>{
      setSelectedCategory(category);
      setModalVisible(true)
    }

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <Header onAddPress={()=>setModalVisible(true)}
      onSearchTextChange={searchTask}
        />
    
<View>
    <TaskList
  tasks={tasks.filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase()))}
  onToggle={toggleTask}
  onEdit={editTask}
  onDelete={deleteTask}
/>
      </View>

    <TaskInputModal
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
  onSubmit={AddTask}
  value={newTask}
  onChangeText={setNewTask}
  isEditing={isEditing}
/>

    <TaskCategory
  categories={categories}
  onSelect={AddCategory}
/>
</View>

  </GestureHandlerRootView> 
  )}



export default App;