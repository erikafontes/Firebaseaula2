import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';
import Registro from './screens/Registro';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import styles from './estilo'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login'    component={Login}     options={{headerShown: false}}  />
        <Stack.Screen name='Home'     component={Home}      options={{headerShown: false}}/>
        <Stack.Screen name='Registro' component={Registro}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

