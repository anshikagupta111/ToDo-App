/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { View ,TouchableOpacity,Text,Modal,TextInput,FlatList} from 'react-native';
import React,{useState} from 'react';
import styles from './Styles'
// import {Divider} from 'react-native-paper'




function App() {
  const[tasks, setTasks] = useState([]);
  const[newTask,setNewTask]=useState('');
  const[id,setId]=useState(0);
  const[modalVisible, setModalVisible] = useState(false);
  const [checked,setChecked]=useState(false);
  const AddTask=()=> {
    if(newTask!==""){
      const taskItem={
        id:id.toString(),
        text:newTask,
      };
      setTasks(tasks.concat(taskItem))
setNewTask("");
setModalVisible(false)
setId(id+1);
    }
   
    


  };
  const deleteTask=(delid)=>{
    setTasks(prevTask=>prevTask.filter(tasks=>tasks.id!==delid))
   }
   const toggleTask=(id)=>{
    setTasks(prevTask=>prevTask.map(task=>task.id===id?{...task,checked:!task.checked}:task))
// setTasks(prevTask=>prevTask.filter(tasks=>tasks.id!==id))
   }
   const categories=[
    {id:'1',name:'Work',color:'#61DEA4'},
    {id:'2',name:'Shopping',color:'#F45E6D'},
    {id:'3',name:'Family',color:'#FFE761'},
    {id:'4',name:'Personal',color:'#B678FF'}]


    const itemCategory=()=>{
      
    }
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headercontent}>Today</Text>
       <TouchableOpacity style={styles.circle} onPress={()=>setModalVisible(true)}>
        <Text style={styles.plus}>+</Text>
       </TouchableOpacity>
    </View>

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
              onLongPress={()=>deleteTask(item.id)}
              >
                
                <Text>{item.checked?"✓":""}</Text>
                
              </TouchableOpacity>
            </View>
            
            <Text style={styles.tasklist}>{item.text}</Text>
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
    <View >
      
    </View>
    <FlatList
    data={categories}
    keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={[styles.categoryCard,{backgroundColor:item.color}]}
          onPress={()=>itemCategory()}
          >
             <Text style={styles.categoryName}>{item.name}</Text>
      {/* <Text style={styles.taskCount}>{item.tasks} </Text> */}
          </TouchableOpacity>


        )}
    />
   
</View>

   
  )
}



export default App;
