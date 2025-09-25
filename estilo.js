import { StyleSheet} from "react-native";

export default StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texthome:{
   color: "#000000ff",
     fontSize: 25, 
    fontWeight:600,

  },
  home:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#000000ff", //cor do botão
    marginTop:15, //espaço externo do botão,
     paddingHorizontal:20,
  },
  ent:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "rgba(255, 255, 255, 1)", //cor do botão
    marginTop:15, //espaço externo do botão,
    paddingHorizontal:160,
  },
  reg:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#1b8dffff", //cor do botão
    marginTop:15, //espaço externo do botão,
    paddingHorizontal:150
  },
  textlog:{
    color: "#000000ff",
    fontSize: 15, 
    fontWeight:800
  },
  textbotao:{

     color: "#ffffffff",
     fontSize: 17, 
     fontWeight:500
  },

  image:{
     width: "100%",
     height: 165, 
     resizeMode: "contain"

  },
});

