import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CourseScreen from './src/screens/CourseScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen.js';

const Stack=createNativeStackNavigator();
export default 
function App() {

  
  return (
    
      <NavigationContainer initialrouteName="Home">
        <Stack.Navigator>
          <Stack.Screen name="Ana sayfa" component={HomeScreen} />
          <Stack.Screen name="Kurslarim" component={CourseScreen} />
          <Stack.Screen name="KursBilgilerim" component={CoursesInformationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
     
    
  

}

const styles = StyleSheet.create({
  
  
});
