import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import { Picker } from '@react-native-picker/picker';

import { Ocorrencia } from '../model/Ocorrencia';
import { AccordionItem } from 'react-native-accordion-list-view';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

export default function ListarOcorrencia() {
    const[ocorrencias, setOcorrencias]= useState<Ocorrencia[]>([]); //array das ocorrencias
    
    const navigation = useNavigation();

   const refOcorrencia = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Ocorrências")


    useEffect(() => {
        listar();
    })
    const listar = () =>{
        const relatorio = refOcorrencia
        .onSnapshot( (query) => {
            const ocorrencias = [];
            query.forEach((documento) =>{
                ocorrencias.push ({
                    ...documento.data(),
                    key: documento.id
               });
            })
            setOcorrencias(ocorrencias)
        })
    }

    const excluir = async (item) =>{
      const resultado = await refOcorrencia
      .doc(item.id)
      .delete()
      .then( () => {
        alert('Deletado com sucesso!')
        listar()
      })
    }

    const editar  = (item: Ocorrencia) =>{
        navigation.navigate ('Ficha de Ocorrência', {ocorrencias: item});
    }
   return(

     <FlatList
        data={ocorrencias}
        renderItem={({item}) => (
            <TouchableOpacity style= {style.botaorel} 
            onPress={ () => editar (item)}
            onLongPress={ () => excluir(item)}
            >
                <Text>{item.tipo}</Text>
           </TouchableOpacity>

             )}
             
/>
 
    
    )
}
