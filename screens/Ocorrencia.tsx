import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import { Picker } from '@react-native-picker/picker';

import { Ocorrencia } from '../model/Ocorrencia';

export default function ocorrencia() {

  const [formOcorrencia, setFormOcorrencia] = useState<Partial<Ocorrencia>>({})

  const navigation = useNavigation ();

const Registro = () =>{
   const refOcorrencia = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Ocorrências")

const novaoco = new Ocorrencia(formOcorrencia);

  const idOcorrencia = refOcorrencia.doc();
   novaoco.id = idOcorrencia.id;
   idOcorrencia.set(novaoco.toFirestore())

   alert("Ocorrência finalizada com sucesso.")

   setFormOcorrencia({})
}


  return (
    
    <View style={style.container}>
         <Image style={style.image} source={require('../assets/logo.png')}/> 
          

   <View style = {style.inputview}> 
      <TextInput  
        style= {style.textlog} 
        placeholder='Data'  
        onChangeText={ texto => setFormOcorrencia
        ({...formOcorrencia,
        data: texto})
       }
        value={formOcorrencia.data}
       />

    <View style={style.picker}>
          <Picker mode='dropdown'
          prompt="Selecione a origem da Denúncia"
          onValueChange={ texto => setFormOcorrencia
        ({...formOcorrencia,
        origem: texto})}
          >
            <Picker.Item label = "Selecione a origem da denúncia" value="0" />
            <Picker.Item label = "Via WhatsApp"   value= "Via WhatsApp" />
            <Picker.Item label = "Via Telefonema" value= "Telefonema"   />
            <Picker.Item label = "Via Email"      value= "Via Email"    />
            <Picker.Item label = "Presencial"     value= "Presencial"   />
          </Picker>  
          </View>
  <Picker mode='dropdown'
          prompt="Selecione a origem da Denúncia"
          onValueChange={ texto => setFormOcorrencia
        ({...formOcorrencia,
        tipo: texto})}
          >
            <Picker.Item label = "Selecione o tipo de crime" value="0" />
            <Picker.Item label = "Crime Ambiental"   value= "Crime Ambiental" />
            <Picker.Item label = "Crime Animal" value= "Crime Animal"   />
          </Picker>  
        




        <TextInput  style= {style.textlog} 
      placeholder='Endereço' 
       onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
          endereco: texto})
        }
         value={formOcorrencia.endereco}
       />


      <TextInput  style= {style.textlog} 
        placeholder='Denúncia' 
        onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
        denuncia: texto})
        }
         value={formOcorrencia.denuncia}
       />

        <TextInput  style= {style.textlog} 
      placeholder='Fotos' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       foto: texto})
      }
       value={formOcorrencia.foto}
       />
     </View>
    <TouchableOpacity style={style.reg} onPress={Registro} >
          <Text style={style.textbotaocad}>Finalizar</Text> 
         </TouchableOpacity>
    </View>
  );
}

