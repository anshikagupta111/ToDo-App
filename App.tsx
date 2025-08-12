
import { View } from 'react-native';
import React from 'react';
import { HomeScreen } from './app/screens';
import styles from './Styles';
import AppNavigator from './app/navigation/appNavigatot';
import 'react-native-gesture-handler';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import DrawerNav from './app/navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return(
    <SafeAreaProvider>
          <SafeAreaView style={styles.centeredview}>
            <NavigationContainer>
  <View style={{flex:1}}>
    <DrawerNav/>
    {/* <AppNavigator/> */}
  </View>
 </NavigationContainer>
  </SafeAreaView>
    </SafeAreaProvider>

  )
}
// enableScreens();
export default App;