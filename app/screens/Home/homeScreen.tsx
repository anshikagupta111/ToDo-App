
import { View } from 'react-native';
import React,{useState} from 'react';
import styles from '../../../Styles'
import { Header,TaskList ,TaskInputModal,HomeScreenList,HomeScreenModal} from '../../components/index';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTasks } from '../../hooks/index';
function HomeScreen() {
  const { tasks,
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
    searchTask}=useTasks();
  
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState(false);
  const[taskModalVisile,setTaskModalVisile]=useState(false)

   

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
</View>
</GestureHandlerRootView>
  
  )}
export default HomeScreen;