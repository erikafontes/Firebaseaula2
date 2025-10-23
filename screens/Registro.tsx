import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import DateTimePicker from 'react-native-modal-datetime-picker';

import { Usuario } from '../model/Usuário';
import Login from './Login';

export default function Registro() {
  const [visivel, setVisivel]  = useState(false);
  
 const confirmado = (dataselecionada) => {  
   setFormUsuario({...formUsuario, datanasc: dataselecionada})
   setVisivel(false);
  }
    
  const [formUsuario, setFormUsuario] = useState<Partial<Usuario>>({})
  const navigation = useNavigation ();

  const cadastrar = () =>{
    auth
    .createUserWithEmailAndPassword (formUsuario.email, formUsuario.senha)
    .then (userCredentials =>{
    console.log('Logado como: ', userCredentials.user.email)

  const refUsuario = firestore.collection("Usuario");
  const idUsuario = refUsuario.doc(auth.currentUser.uid);
    idUsuario.set({
      id       : auth.currentUser.uid,
      nome     : formUsuario.nome,
      datanasc : formUsuario.datanasc,
      email    : formUsuario.email,
      senha    : formUsuario.senha,
      fone     : formUsuario.fone
      })
        navigation.replace('Menu')
   })

  }
     const dataMaxima = () => new Date();
  //  .cath(erro => alert(erro.message))
 

  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../assets/logo.png')}/>   
        <Text style={style.texthome}>Cadastro de Usuário</Text>

      <TextInput  
        style= {style.textlog} 
        placeholder='Nome'  
        onChangeText={ 
        texto => setFormUsuario
        ({...formUsuario,
          nome: texto})
        }
        />
      <TouchableOpacity  style={style.data} onPress={ () => setVisivel (true)} >
        <Text style={style.textdata}> Data de Nascimento</Text>
      </TouchableOpacity>


      

      <TextInput  style= {style.textlog}
        placeholder=''
        value={formUsuario.datanasc ? formUsuario.datanasc.toDateString() : '' }
        />
        <DateTimePicker
        isVisible={visivel}
        mode='date'
        onConfirm={dataselecionada => confirmado(dataselecionada)}
        onCancel={() => setVisivel(false)}
        maximumDate={dataMaxima()}        
        />

      <TextInput  style= {style.textlog}
        placeholder='Email'
        onChangeText={ texto => setFormUsuario
        ({...formUsuario,
        email: texto})
        }
        />

      <TextInput  style= {style.textlog} 
        placeholder='Senha'
        onChangeText={ texto => setFormUsuario
        ({...formUsuario,
        senha: texto})
        }
        />

      <TextInput  style= {style.textlog} 
        placeholder='Fone' 
        onChangeText={ texto =>setFormUsuario
        ({...formUsuario,
          fone: texto})
        }
        />
    
  <TouchableOpacity style={style.reg} onPress={cadastrar} >
    <Text style={style.textbotaocad}>Cadastrar</Text> 
  </TouchableOpacity>

    <TouchableOpacity style={style.ent} onPress={()=> navigation.replace ('Login')} >
      <Text style={style.textbotaoent}>Entrar</Text> 
    </TouchableOpacity>


    
    </View>
   );
  }

