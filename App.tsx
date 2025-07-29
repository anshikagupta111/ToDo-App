/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { View ,TouchableOpacity,Text,Modal,TextInput,FlatList} from 'react-native';
import React,{useState} from 'react';
import Header from './components/Header'
import styles from './Styles'
// import {Divider} from 'react-native-paper'




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
// setTasks(prevTask=>prevTask.filter(tasks=>tasks.id!==id))
   }


   const editTask = (taskId) => {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    setNewTask(task.text);
    setSelectedCategory({ color: task.color }); // keep color
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
    <View style={styles.container}>
      <Header onAddPress={()=>setModalVisible(true)}/>
    

<View>
  

     <FlatList
     style={styles.flatlist}
        data={tasks}
        
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
         
          <View style={styles.list} >
           
            <View style={styles.checkbox} >
              <TouchableOpacity style={styles.clickcheck} 
              onPress={()=>toggleTask(item.id)}
              
              >
                
                <Text>{item.checked?"✓":""}</Text>
                
              </TouchableOpacity>
            </View>
            
            <Text style={styles.tasklist}>{item.text}</Text>
            <Text style={styles.editButton} onPress={()=>editTask(item.id)}>Edit</Text>
             <Text style={styles.editButton} onPress={()=>deleteTask(item.id)}>Delete</Text>
            <View style={[styles.colorButton , {backgroundColor:item.color}]}></View>



          </View>
          
          
           
        )}
        
      
       ItemSeparatorComponent={() => (
    <View style={styles.line} />
  )}
      />
      

      </View>


    <Modal
    // animationType="slide"
    animationType="fade"
    transparent={true}
    // backdropColor='white'
    visible={modalVisible}
    onRequestClose={()=>setModalVisible(false)} 
    >
      <View style={styles.modalContainer}>
        <View>
        <Text style={styles.todo}>Add Todo</Text>
        <TextInput
        multiline={true}
        style={styles.textInput}
        placeholder='Enter your task'
        value={newTask}
        onChangeText={setNewTask}
        
        />
        </View >
        <View style={styles.donebutton}>
          <TouchableOpacity  style={styles.cancel}onPress={()=>setModalVisible(false)}>
            <Text style={styles.canceltext}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={AddTask} style={styles.done}>
            <Text style={styles.donetext}>Done</Text>
          </TouchableOpacity>
            
        </View>
              </View>
      

    </Modal>
   
    
    <FlatList
    data={categories}
    keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={[styles.categoryCard,{backgroundColor:item.color}]}
          onPress={()=>AddCategory(item)}
          // onPress={()=>setListModalVisible(true)}
          >
             <Text style={styles.categoryName}>{item.name}</Text>
      {/* <Text style={styles.taskCount}>{item.tasks} </Text> */}
          </TouchableOpacity>


        )}
         
    />
    {/* <Modal
     animationType="fade"
    transparent={true}
    // backdropColor='white'
    visible={listModalVisible}
    onRequestClose={()=>setListModalVisible(false)} >
      <View style={styles.listModal}>
        
      </View>
    </Modal> */}
   
</View>

   
  )
}



export default App;