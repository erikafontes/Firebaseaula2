import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import { Picker } from '@react-native-picker/picker';

import { Crime } from '../model/Crime';
import { AccordionItem } from 'react-native-accordion-list-view';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

export default function ListarCrime() {
    const[crimes, setCrimes]= useState<Crime[]>([]); //array das Crimes
    
    const navigation = useNavigation();

   const refCrime = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Crimes")


    useEffect(() => {
        listar();
    })
    const listar = () =>{
        const novosc = refCrime
        .onSnapshot( (query) => {
            const crimes = [];
            query.forEach((documento) =>{
                crimes.push ({
                    ...documento.data(),
                    key: documento.id
               });
            })
            console.log(crimes);
            setCrimes(crimes)
        })
    }

    const excluir = async (item) =>{
      const resultado = await refCrime
      .doc(item.id)
      .delete()
      .then( () => {
        alert('Deletado com sucesso!')
        listar()
      })
    }

    const editar  = (item: Crime) =>{
        navigation.navigate ('Ficha de Crime', {crimes: item});
    }
   return(

     <FlatList
        data={crimes}
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
