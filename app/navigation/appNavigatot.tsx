import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { HomeScreen } from "../screens";
import AllTasks from "../screens/AllTasks/AllTasks";
import CompletedTasks from "../screens/Completed/CompletedTasks";
import PendingTasks from "../screens/Pending/PendingTasks";

import { useTasks } from "../hooks";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // Grab all your task state and methods here
 const taskHook=useTasks()
//   console.log("tasks are",tasks)

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: true,
            tabBarStyle: { backgroundColor: '#fff', height: 60 },
            tabBarLabelStyle: { fontSize: 14 },
             tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#1778F2',

            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') iconName = 'home';
              else if (route.name === 'AllTasks') iconName = 'list';
              else if (route.name === 'CompletedTasks') iconName = 'check';
              else if (route.name === 'PendingTasks') iconName = 'schedule';
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home">
            {props => <HomeScreen {...props} {...taskHook} />}
          </Tab.Screen>
          <Tab.Screen name="AllTasks">
            {props => <AllTasks {...props} {...taskHook} />}
          </Tab.Screen>

          <Tab.Screen name="CompletedTasks">
            {props => <CompletedTasks {...props} {...taskHook} />}
          </Tab.Screen>

          <Tab.Screen name="PendingTasks">
            {props => <PendingTasks {...props} {...taskHook} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
