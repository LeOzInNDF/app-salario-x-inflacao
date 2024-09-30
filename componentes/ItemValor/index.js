import React from "react";
import { View, Text } from "react-native";

import estiloGlobal from "../../assets/estilos/estilos";
import estiloValor from './estilos';


export default function ItemValor (props) {
  return (
    <View style={[estiloGlobal.container, props.estilo]}>
            <Text style={estiloValor.textoValores}>{props.ano}</Text>
            <Text style={estiloValor.textoValores}>{props.valor}</Text>
        </View>
    );
}