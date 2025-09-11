import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"

export default function Registro() {
const navigation = useNavigation ();

const[nome, setNome]   = useState('');
const[email, setEmail] = useState('');
const[senha, setSenha] = useState('');
const[fone, setFone]   = useState('');

const cadastrar = () =>{
  auth
  .createUserWithEmailAndPassword (email,senha)
  .then (userCredentials =>{
  console.log('Logado como: ', userCredentials.user.email)
  navigation.replace('Home')
   })

}
  return (
    <View style={style.container}>
          <Image style={style.image} source={require('../assets/borbsf.png')}/> 
          
      <Text style={style.texthome}>Cadastro de Usuário</Text>

      <TextInput  style= {style.textlog} placeholder='Nome'  onChangeText={ texto => setNome(texto)} />
      <TextInput  style= {style.textlog}  placeholder='Email' onChangeText={ texto => setEmail(texto)}/>
      <TextInput  style= {style.textlog}  placeholder='Senha' onChangeText={ texto => setSenha(texto)}/>
      <TextInput  style= {style.textlog} placeholder='Fone'  onChangeText={ texto => setFone(texto)}/>
    
    <TouchableOpacity style={style.home} onPress={cadastrar} >
          <Text style={style.textbotao}>Cadastrar</Text> 
         </TouchableOpacity>
    </View>
  );
}
