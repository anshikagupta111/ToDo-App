
import { View } from 'react-native';
import React from 'react';
import { HomeScreen } from './app/screens';
import styles from './Styles';
import AppNavigator from './app/navigation/appNavigatot';
// import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
function App() {
  return(
    <SafeAreaProvider>
          <SafeAreaView style={styles.centeredview}>
            
  <View style={{flex:1}}>
    <AppNavigator/>
  </View>
 
  </SafeAreaView>
    </SafeAreaProvider>

  )
}
// enableScreens();
export default App;