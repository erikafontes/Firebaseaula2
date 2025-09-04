import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"

export default function Home() {
 const navigation = useNavigation();

 const sair = () => {
 auth
 .signOut()
 .then (()=> {
  navigation.replace('Login')
  })
 }
 
  return (
    <View style={style.container}>

      <Text style={style.texthome}> Bem vindo!</Text>


    <TouchableOpacity style={style.home} onPress={sair} >
      <Text style={style.texthome}>Logout</Text> 
     </TouchableOpacity>

    </View>
  );
}
