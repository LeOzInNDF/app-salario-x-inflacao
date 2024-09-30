import React from 'react';
import { Text, View } from 'react-native';

import estiloGlobal from '../../assets/estilos/estilos';
import estiloComparacao from './estilos';

export default function ItemComparacao(props) {
    return (
        <View style={[estiloGlobal.container, props.estilo]}>
            <Text style={estiloComparacao.textoComparacao}>{props.ano}</Text>
            <Text style={estiloComparacao.textoComparacao}>{props.salario}</Text>
            <Text style={estiloComparacao.textoComparacao}>{props.inflacao}</Text>
            <Text style={estiloComparacao.textoComparacao}>{props.crescimentoSalarial}</Text>
            <View style={estiloComparacao.setaInflacao}>{props.statusCrescimento}</View>
        </View>
    );
}