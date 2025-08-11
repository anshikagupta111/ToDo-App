
import { View } from 'react-native';
import React,{useState} from 'react';
import styles from '../../../Styles'
import { Header,TaskList ,TaskInputModal,HomeScreenList,HomeScreenModal} from '../../components/index';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useTasks } from '../../hooks/index';
import { TouchableOpacity,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AllTasks from '../AllTasks/AllTasks';
import NavButton from '../../components/navButton';
function HomeScreen({ tasks,
    newTask,
    setNewTask,
    categories,
    selectedCategory,
    setSelectedCategory,
    isEditing,
    searchQuery,
    setModalVisible,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    modalVisible,
    searchTask}) {
  const navigation=useNavigation()
  
  
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState(false);
  const[taskModalVisile,setTaskModalVisile]=useState(false)

   

  return (
      <GestureHandlerRootView>
        <ScrollView>
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
  onSubmit={addTask}
  value={newTask}
  onChangeText={setNewTask}
  isEditing={isEditing}
  categories={categories}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
 <HomeScreenList
  categories={categories}
  onListPress={(category) => {
    setSelectedCategoryForModal(category);
    setTaskModalVisile(true);
  }}
/>
<HomeScreenModal
  visible={taskModalVisile}
  selectedCategory={selectedCategoryForModal}
  tasks={tasks}
  onToggle={toggleTask}
  onClose={() => setTaskModalVisile(false)}
/>

      {/* <NavButton
      title='all Tasks'
      onPress={() => navigation.navigate('AllTasks',{
          tasks,
        toggleTask,
        deleteTask,
        editTask
      })}
      />
       <NavButton
      title='Completed Tasks'
      onPress={() => navigation.navigate('CompletedTasks',{
          tasks,
        toggleTask,
        deleteTask,
        editTask
      })}
      />
       <NavButton
      title='Pending Tasks'
      onPress={() => navigation.navigate('PendingTasks',{
          tasks,
        toggleTask,
        deleteTask,
        editTask
      })}
      /> */}

      
</View>
</ScrollView>
</GestureHandlerRootView>
  
  )}
export default HomeScreen;