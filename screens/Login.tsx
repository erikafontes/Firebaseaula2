import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"

export default function Login() {
  const[email,setEmail] = useState('');
  const[senha,setSenha] = useState('');

  const navigation = useNavigation();

  const logar = () => {
    auth
    .signInWithEmailAndPassword(email,senha)
    .then (userCredentials => {
      console.log('Logado como: ', userCredentials.user.email)
      navigation.replace("Home");
    })
    .catch(erro => alert(erro.message))
  }

  return (
    <View style={style.container}>
      <Text style= {style.texthome}>Tela de Login</Text>
      
      <TextInput style= {style.textlog} 
        placeholder='Email' 
        onChangeText={email => setEmail(email)} 
      /> 

      <TextInput style= {style.textlog} 
        placeholder='Senha' 
        onChangeText={senha => setSenha(senha)}
      /> 
    <TouchableOpacity style={style.ent} onPress={logar} >
            <Text style={style.texthome}>Entrar</Text> 
             </TouchableOpacity>
        

        
         <TouchableOpacity style={style.reg} onPress={()=> navigation.replace ('Registro')} >
            <Text style={style.texthome}>Registrar</Text> 
             </TouchableOpacity>
        
       

    </View>
  );
}
