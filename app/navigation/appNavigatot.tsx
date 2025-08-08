import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AllTasks from "../screens/AllTasks/AllTasks";
import CompletedTasks from "../screens/Completed/CompletedTasks";
import { HomeScreen } from "../screens";
import PendingTasks from "../screens/Pending/PendingTasks";
const Stack=createNativeStackNavigator()
const AppNavigator=()=>{
    return(
        <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='CompletedTasks' component={CompletedTasks}/>
                <Stack.Screen name='AllTasks' component={AllTasks}/>

                <Stack.Screen name='PendingTasks' component={PendingTasks}/>

            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    )
}
export default AppNavigator