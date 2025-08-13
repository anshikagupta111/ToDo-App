import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens';
import AllTasks from '../screens/AllTasks/AllTasks';
import DrawerNav from './Drawer';
import CompletedTasks from '../screens/Completed/CompletedTasks';
import PendingTasks from '../screens/Pending/PendingTasks';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
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

        <Tab.Screen name="Home" component={DrawerNav} />

        <Tab.Screen name="AllTasks" component={AllTasks} />

        <Tab.Screen name="CompletedTasks" component={CompletedTasks} />

        <Tab.Screen name="PendingTasks" component={PendingTasks} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
