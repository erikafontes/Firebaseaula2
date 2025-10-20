import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';

import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"

export default function Login() {
  const[email,setEmail] = useState('');
  const[senha,setSenha] = useState('');

  const navigation = useNavigation();

  const Login = () => {
    auth
    .signInWithEmailAndPassword(email,senha)
    .then (userCredentials => {
      console.log('Logado como: ', userCredentials.user.email)
      navigation.replace("Menu");
    })
    .catch(erro => alert(erro.message))
  }

  return (
    <View style={style.container}>

      52
          <Image style={style.image} source={require('../assets/logo.png')}/> 

      <Text style= {style.texthome}>Tela de Login</Text>
      
      <TextInput style= {style.textlog} 
        placeholder='Email' 
        onChangeText={email => setEmail(email)} 
      /> 

      <TextInput style= {style.textlog} 
        placeholder='Senha' 
        secureTextEntry = {true}
        onChangeText={senha => setSenha(senha)}
      /> 
    <TouchableOpacity style={style.ent} onPress={Login} >
            <Text style={style.textbotaoent}>Entrar</Text> 
             </TouchableOpacity>
        

        
         <TouchableOpacity style={style.reg} onPress={()=> navigation.replace ('Registro')} >
            <Text style={style.textbotaocad}>Registrar</Text> 
             </TouchableOpacity>
        
       

    </View>
  );
}
