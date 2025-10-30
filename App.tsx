import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login';
import Registro from './screens/Registro';
import Menu from './screens/Menu';
import Crime from './screens/Crime';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import styles from './estilo'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login'    component={Login}     options={{headerShown: false}}  />
        <Stack.Screen name='Registro' component={Registro}  options={{headerShown: false}} />
        <Stack.Screen name='Menu'     component={Menu}      options={{headerShown: false}}/>
        <Stack.Screen name='Crime'   component={Crime}    options={{headerShown: false}}/>   

      </Stack.Navigator>
    </NavigationContainer>    
  );
}

