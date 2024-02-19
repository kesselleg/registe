import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Registers } from './screen/Register';
import { Login } from './screen/Login';
import { Home } from './screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return(
     
<NavigationContainer>
<Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>

        <Stack.Screen name='register' component={Registers}/>
        <Stack.Screen name='home' component={Home}/>
      </Stack.Navigator>
</NavigationContainer>


  )
}

