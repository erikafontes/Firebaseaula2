import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import { Picker } from '@react-native-picker/picker';

import { Crime } from '../model/Crime';
import { useRoute } from '@react-navigation/native';


export default function crime() {

  const [formCrime, setFormCrime] = useState<Partial<Crime>>({})

  const route = useRoute(); //cria a rota oara receber a ocorrencia no editar

  useEffect( () => { ;//recebe o objeto ocorrencia para editar
    if (route.params){
      setFormCrime(route.params.crimes); //preenche o form com a ocorrencia para editar
    }
  }, [route.params])

  const navigation = useNavigation ();

const Registro = () =>{
   const refCrime = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Crimes")

    const novaoco = new Crime(formCrime);

    if(formCrime.id){
       const idCrime = refCrime.doc(formCrime.id);

       idCrime.update(novaoco.toFirestore())
       .then( () => {
         alert("Crime atualizada!")
       })
    } else{
      const idCrime = refCrime.doc();
   novaoco.id = idCrime.id;
   idCrime.set(novaoco.toFirestore())

   alert("Ocorrência finalizada com sucesso.")
   setFormCrime({})
    }
}


  return (
    
    <ScrollView style={style.container2}>
      <Image style={style.image} source={require('../assets/logo.png')}/> 
      <Text style={style.texttitulo}>FORMULÁRIO INTERNO PARA CONTROLE  DE CRIMES DE MAUS-TRATOS AOS ANIMAIS</Text>

      <View style = {style.inputview}> 
      <View style={style.picker}>
        
 </View>
 

  
  
    <TextInput  style= {style.textlog} 
      placeholder='Nome:' 
      onChangeText={ texto =>setFormCrime
      ({...formCrime,
      nome: texto})
      }
      value={formCrime.nome}
      />

    <TextInput  style= {style.textlog} 
      placeholder='No que consiste o crime:' 
      onChangeText={ texto =>setFormCrime
      ({...formCrime,
      tipo: texto})
      }
      value={formCrime.tipo}
      />

     </View>
     
    <TouchableOpacity style={style.reg} onPress={Registro} >
          <Text style={style.textbotaocad}>Finalizar</Text> 
         </TouchableOpacity>
    </ScrollView>
  );
}

