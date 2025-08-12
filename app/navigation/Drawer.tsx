import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from "../screens";
import { useTasks } from "../hooks";
import AllTasks from "../screens/AllTasks/AllTasks";
import CompletedTasks from "../screens/Completed/CompletedTasks";
import PendingTasks from "../screens/Pending/PendingTasks";
import AppNavigator from "./appNavigatot";
const Drawer = createDrawerNavigator();
const DrawerNav=()=>{
     const taskHook=useTasks()
    
    return(
<Drawer.Navigator initialRouteName="MainTabs">
          <Drawer.Screen name="MainTabs" component={AppNavigator} options={{ title: 'Main Menu' }} />

    <Drawer.Screen name="Home" >
         {props => <HomeScreen {...props} {...taskHook} />}
    </Drawer.Screen>
 <Drawer.Screen name="All Tasks" >
            {props => <AllTasks {...props} {...taskHook} />}
    </Drawer.Screen> 
    <Drawer.Screen name="Completed Tasks" >
            {props => <CompletedTasks {...props} {...taskHook} />}
    </Drawer.Screen> 
    <Drawer.Screen name="Pending Tasks" >
         {props => <PendingTasks {...props} {...taskHook} />}
    </Drawer.Screen>
</Drawer.Navigator>
    )
}
export default DrawerNav

// import React from "react";
// // import 'react-native-gesture-handler'

// import { useTasks } from "../hooks";
// import { HomeScreen } from "../screens";
// import CompletedTasks from "../screens/Completed/CompletedTasks";
// import AllTasks from "../screens/AllTasks/AllTasks";
// import PendingTasks from "../screens/Pending/PendingTasks";


// // const Drawer=createDrawerNavigator()
// const DrawerNav=()=>{
    
//     return(
//         // <Drawer.Navigator initialRouteName="Home">
//         // <Drawer.Screen name="Home" component={HomeScreen}/>
//         // <Drawer.Screen name="Completed Tasks " component={CompletedTasks}/>
//         // <Drawer.Screen name="All Tasks " component={AllTasks}/>
//         // <Drawer.Screen name="Pending Tasks " component={PendingTasks}/>


//         // </Drawer.Navigator>
//     )

// }
// export default DrawerNav