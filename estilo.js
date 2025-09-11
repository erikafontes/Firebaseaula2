import { StyleSheet} from "react-native";

export default StyleSheet.create({

     container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texthome:{
   color: "#d3c727ff",
     fontSize: 25, 
    fontWeight:400,

  },
  home:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#eff5bdff", //cor do botão
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
    backgroundColor: "#rgba(255, 255, 255, 1)", //cor do botão
    marginTop:15, //espaço externo do botão,
    paddingHorizontal:150
  },
  textlog:{
    color: "#d3c727ff",
    fontSize: 15, 
    fontWeight:800
  },
  textbotao:{

     color: "#d3c727ff",
     fontSize: 15, 
     fontWeight:800
  },

  image:{
     width: "100%",
     height: 165, 
     resizeMode: "contain"

  },
});

