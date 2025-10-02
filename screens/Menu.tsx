import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Home"
import Ocorrencia from "./Ocorrencia";
import ListarOcorrencia from "./Ocorrencialist";
const Drawer = createDrawerNavigator();

export default function Menu(){
return(
    <Drawer.Navigator initialRouteName="Página Inicial">
        <Drawer.Screen name= 'Página Inicial' component = {Home}/>
        <Drawer.Screen name="Ficha de Ocorrência" component={Ocorrencia}/>
        <Drawer.Screen name="Relatório" component={ListarOcorrencia}/>

    </Drawer.Navigator>


)

}