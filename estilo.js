import { StyleSheet} from "react-native";

export default StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   container2: {
    flex: 1,
    backgroundColor: '#ffffffff',
    padding:15
  },
  texthome:{
   color: "#000000ff",
     fontSize: 25, 
    fontWeight:600,

  },
  home:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#1b8dffff", //cor do botão
    marginTop:15, //espaço externo do botão,
     paddingHorizontal:20,
  },
  ent:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#fff", //cor do botão
    marginTop:15, //espaço externo do botão,
    paddingHorizontal:160,
    borderColor: "#1b8dffff",
    borderWidth:1
  },
  reg:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#1b8dffff", //cor do botão
    marginTop:15, //espaço externo do botão,
    paddingHorizontal:150,
    marginBottom:50
  },
  textlog:{
    color: "#000000ff",
    fontSize: 15, 
    fontWeight:400
  },
  textbotaoent:{

     color: "#000000ff",
     fontSize: 17, 
     fontWeight:500
  },
  textbotaocad:{

     color: "#ffffffff",
     fontSize: 17, 
     fontWeight:500
  },

  image:{
     width: "100%",
     height: 165, 
     resizeMode: "contain"

  },
  inputview:{
   width:"90%",
   marginBottom: 20
  },
  
  picker:{
     paddingLeft:1

   },
   botaorel:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#1b8dffff", //cor do botão
    marginTop:15, //espaço externo do botão,
    paddingHorizontal:150
   },
   texttitulo:{
    fontSize:20,
    alignContent:'center',
    fontWeight:600,
    marginBottom:10,
    justifyContent:'center',
    textAlign:'center',
    marginTop:20
   },
   data:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#e9eaebff", //cor do botão
    marginTop:10, //espaço externo do botão,
    paddingHorizontal:100,
   },
  textdata:{

     color: "#5d5c5cff",
     fontSize: 15, 
  
  },
}); 

