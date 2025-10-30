import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import { Picker } from '@react-native-picker/picker';

import { Criminoso } from '../model/Criminoso';
import { useRoute } from '@react-navigation/native';


export default function criminoso() {

  const [formCriminoso, setFormCriminoso] = useState<Partial<Criminoso>>({})

  const route = useRoute(); //cria a rota oara receber a ocorrencia no editar

  useEffect( () => { ;//recebe o objeto ocorrencia para editar
    if (route.params){
      setFormCriminoso(route.params.criminosos); //preenche o form com a ocorrencia para editar
    }
  }, [route.params])

  const navigation = useNavigation ();

const Registro = () =>{
   const refCriminoso = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Criminosos")

    const novaoco = new Criminoso(formCriminoso);

    if(formCriminoso.id){
       const idCriminoso = refCriminoso.doc(formCriminoso.id);

       idCriminoso.update(novaoco.toFirestore())
       .then( () => {
         alert("Criminoso atualizada!")
       })
    } else{
      const idCriminoso = refCriminoso.doc();
   novaoco.id = idCriminoso.id;
   idCriminoso.set(novaoco.toFirestore())

   alert("Ocorrência finalizada com sucesso.")
   setFormCriminoso({})
    }
}


  return (
    
    <ScrollView style={style.container2}>
      <Image style={style.image} source={require('../assets/logo.png')}/> 
      <Text style={style.texttitulo}>LISTA INTERNA DE CRIMINOSOS</Text>

      <View style = {style.inputview}> 
      <View style={style.picker}>
        
 </View>
 

  
  
    <TextInput  style= {style.textlog} 
      placeholder='Nome:' 
      onChangeText={ texto =>setFormCriminoso
      ({...formCriminoso,
      nome: texto})
      }
      value={formCriminoso.nome}
      />
        <TextInput  style= {style.textlog} 
      placeholder='CPF:' 
      onChangeText={ texto =>setFormCriminoso
      ({...formCriminoso,
      cpf: texto})
      }
      value={formCriminoso.cpf}
      />

    <TextInput  style= {style.textlog} 
      placeholder='Criminoso cometido:' 
      onChangeText={ texto =>setFormCriminoso
      ({...formCriminoso,
      crimecom: texto})
      }
      value={formCriminoso.crimecom}
      />

     </View>
     
    <TouchableOpacity style={style.reg} onPress={Registro} >
          <Text style={style.textbotaocad}>Finalizar</Text> 
         </TouchableOpacity>
    </ScrollView>
  );
}

