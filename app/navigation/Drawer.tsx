import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllTasks from '../screens/AllTasks/AllTasks';
import CompletedTasks from '../screens/Completed/CompletedTasks';
import PendingTasks from '../screens/Pending/PendingTasks';
import AppNavigator from './appNavigatot';
import { HomeScreen } from '../screens';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {/* <Drawer.Screen
        name="MainTabs"
        component={AppNavigator}
        options={{ title: 'Main Menu' }}
      /> */}
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name="All Tasks" component={AllTasks} />
      <Drawer.Screen name="Completed Tasks" component={CompletedTasks} />
      <Drawer.Screen name="Pending Tasks" component={PendingTasks} />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
