
import { View } from 'react-native';
import React from 'react';
import { HomeScreen } from './app/screens';
import styles from './Styles';
import AppNavigator from './app/navigation/appNavigatot';
import 'react-native-gesture-handler';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import DrawerNav from './app/navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TasksProvider } from './app/components/TasksContext';
// import { TasksProvider } from './app/components/TasksContext';
function App() {
  return(
    <SafeAreaProvider>
          <SafeAreaView style={styles.centeredview}>
           
            <NavigationContainer>
             <TasksProvider>
  <View style={{flex:1}}>
   
    {/* <DrawerNav/> */}
    <AppNavigator/>
    
  </View>
  </TasksProvider>
 </NavigationContainer>
 
  </SafeAreaView>
    </SafeAreaProvider>

  )
}
// enableScreens();
export default App;