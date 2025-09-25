import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"

import { Ocorrencia } from '../model/Ocorrencia';

export default function ocorrencia() {

  const [formOcorrencia, setFormOcorrencia] = useState<Partial<Ocorrencia>>({})

  const navigation = useNavigation ();

const Registrar = () =>{
   const refOcorrencia = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Ocorrências")

const novaoco = new Ocorrencia(formOcorrencia);

  const idOcorrencia = refOcorrencia.doc();
   novaoco.id = idOcorrencia.id;
   idOcorrencia.set(novaoco.toFirestore())

   alert("Ocorrência registrada com sucesso.")

   setFormOcorrencia({})
}


  return (
    <View style={style.container}>
         <Image style={style.image} source={require('../assets/logo.png')}/> 
          
      <Text style={style.texthome}>Registro de Ocorrência</Text>

      <TextInput  
        style= {style.textlog} 
        placeholder='Data'  
        onChangeText={ texto => setFormOcorrencia
        ({...formOcorrencia,
        data: texto})
       }
        value={formOcorrencia.data}
       />

      <TextInput 
        style= {style.textlog}
        placeholder='Hora'
        onChangeText={ texto => setFormOcorrencia
        ({...formOcorrencia,
        hora: texto})
        }
         value={formOcorrencia.hora}
         />

      <TextInput  style= {style.textlog} 
        placeholder='Tipo'
        onChangeText={ texto => setFormOcorrencia
        ({...formOcorrencia,
        tipo: texto})
        }
         value={formOcorrencia.tipo}
        />

      <TextInput  style= {style.textlog} 
        placeholdeenderecor='Vítima' 
        onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
        vitima: texto})
        }
         value={formOcorrencia.vitima}
       />

        <TextInput  style= {style.textlog} 
      placeholder='Tipo de Ocorrência' 
       onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
          tipooc: texto})
        }
         value={formOcorrencia.tipooc}
       />
        <TextInput  style= {style.textlog} 
      placeholder='Endereço' 
       onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
          endereco: texto})
        }
         value={formOcorrencia.endereco}
       />

        <TextInput  style= {style.textlog} 
      placeholder='Agressor' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       agressor: texto})
      }
       value={formOcorrencia.agressor}
       />
    
    <TouchableOpacity style={style.home} onPress={Registrar} >
          <Text style={style.textbotao}>Cadastrar</Text> 
         </TouchableOpacity>

          {/* <TouchableOpacity style={style.ent} onPress={sair} >
                     <Text style={style.textbotao}>Entrar</Text> 
                      </TouchableOpacity>
                  */}
         
    </View>
  );
}

