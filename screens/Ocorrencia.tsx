import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import style from "../estilo"
import { Picker } from '@react-native-picker/picker';

import { Ocorrencia } from '../model/Ocorrencia';
import { useRoute } from '@react-navigation/native';


export default function ocorrencia() {

  const [formOcorrencia, setFormOcorrencia] = useState<Partial<Ocorrencia>>({})

  const route = useRoute(); //cria a rota oara receber a ocorrencia no editar

  useEffect( () => { ;//recebe o objeto ocorrencia para editar
    if (route.params){
      setFormOcorrencia(route.params.ocorrencias); //preenche o form com a ocorrencia para editar
    }
  }, [route.params])

  const navigation = useNavigation ();

const Registro = () =>{
   const refOcorrencia = firestore.collection("Usuario")
    .doc(auth.currentUser?.uid)
    .collection("Ocorrências")

    const novaoco = new Ocorrencia(formOcorrencia);

    if(formOcorrencia.id){
       const idOcorrencia = refOcorrencia.doc(formOcorrencia.id);

       idOcorrencia.update(novaoco.toFirestore())
       .then( () => {
         alert("Ocorrencia atualizada!")
       })
    } else{
      const idOcorrencia = refOcorrencia.doc();
   novaoco.id = idOcorrencia.id;
   idOcorrencia.set(novaoco.toFirestore())

   alert("Ocorrência finalizada com sucesso.")
   setFormOcorrencia({})
    }
}


  return (
    
    <View style={style.container}>
         <Image style={style.image} source={require('../assets/logo.png')}/> 
          <Text style={style.textbotaoent}>FORMULÁRIO INTERNO PARA CONTROLE </Text>
          <Text style={style.textbotaoent}>DE DENÚNCIAS DE MAUS-TRATOS AOS ANIMAIS</Text>
   <View style = {style.inputview}> 
     
    <View style={style.picker}>
          <Picker mode='dropdown'
          prompt= "Fonte da denúncia"
          onValueChange={ texto => setFormOcorrencia
        ({...formOcorrencia,
        origem: texto})}
        //selectedValue={formOcorrencia.}
          >
            <Picker.Item label = "1. Fonte da denúncia" value="0" />
            <Picker.Item label = "Via WhatsApp"   value= "Via WhatsApp" />
            <Picker.Item label = "Via Telefonema" value= "Telefonema"   />
            <Picker.Item label = "Via Email"      value= "Via Email"    />
            <Picker.Item label = "Presencial"     value= "Presencial"   />
          </Picker>  
  
           <TextInput  
        style= {style.textlog} 
        placeholder='1.2. Data e hora do recebimento:'  
        onChangeText={ texto => setFormOcorrencia
        ({...formOcorrencia,
        data: texto})
       }
        value={formOcorrencia.data}
       />

<Text style={style.textbotaoent}>                     2. DADOS DA DENÚNCIA:</Text>
         
        <TextInput  style= {style.textlog} 
      placeholder='2.1. Endereço:' 
       onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
          endereco: texto})
        }
         value={formOcorrencia.endereco}
       />

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
        
  <Picker mode='dropdown'
          prompt="Espécie de animais"
          onValueChange={ texto => setFormOcorrencia
        ({...formOcorrencia,
        origem: texto})}
          >
            <Picker.Item label = "2.2. Espécie de animais" value="0" />
            <Picker.Item label = "Cães"   value= "Cães" />
            <Picker.Item label = "Gatos" value= "Gatos"   />
            <Picker.Item label = "Equinos"      value= "Equinos"    />
            <Picker.Item label = "Aves"     value= "Aves"   />
            <Picker.Item label = "Outros"     value= "Outros"   />
          </Picker>  
         

      <TextInput  style= {style.textlog} 
        placeholder='2.3. Quantidade:' 
        onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
       quantidade: texto})
        }
         value={formOcorrencia.quantidade}
       />

        <TextInput  style= {style.textlog} 
        placeholder='2.4. Situação denunciada:' 
        onChangeText={ texto =>setFormOcorrencia
        ({...formOcorrencia,
        denuncia: texto})
        }
         value={formOcorrencia.denuncia}
       />

        <TextInput  style= {style.textlog} 
      placeholder='Fotos do Ocorrido:' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       foto: texto})
      }
       value={formOcorrencia.foto}
       />
       <Text style={style.textbotaoent}>                  3. DADOS DO PROPRIETÀRIO:</Text>

 <TextInput  style= {style.textlog} 
      placeholder='Nome:' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       nome: texto})
      }
       value={formOcorrencia.nome}
       />

       <TextInput  style= {style.textlog} 
      placeholder='RG:' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       rg: texto})
      }
       value={formOcorrencia.rg}
       />

       <TextInput  style= {style.textlog} 
      placeholder='CPF:' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       cpf: texto})
      }
       value={formOcorrencia.cpf}
       />

       <TextInput  style= {style.textlog} 
      placeholder='Telefone:' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       telefone: texto})
      }
       value={formOcorrencia.telefone}
       />

<TextInput  style= {style.textlog} 
      placeholder='Endereço:' 
       onChangeText={ texto =>setFormOcorrencia
       ({...formOcorrencia,
       enderecop: texto})
      }
       value={formOcorrencia.enderecop}
       />
       
     </View>
     
    <TouchableOpacity style={style.reg} onPress={Registro} >
          <Text style={style.textbotaocad}>Finalizar</Text> 
         </TouchableOpacity>
    </View>
  );
}

