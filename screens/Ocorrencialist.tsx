import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import { Picker } from '@react-native-picker/picker';

import { Ocorrencia } from '../model/Ocorrencia';


export default function ListarOcorrencia() {
    const[ocorrencias, setOcorrencias]= useState<Ocorrencia[]>([]); //array das ocorrencias
   const refOcorrencia = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Ocorrências")

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
   return(
    <View style= {style.container}>
<Button title= "Listar Ocorrências " onPress={listar}/>
        <FlatList
        data={ocorrencias}
        renderItem={({item}) => (
            <View>
                <Text>{item.tipo}</Text>
            </View>

        )}

    />
    </View>

    )
  }
