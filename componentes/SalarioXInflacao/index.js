import React from 'react';
import { ScrollView, SafeAreaView, View, Text } from 'react-native';
import ItemComparacao from '../ItemComparacao';

import estiloGlobal from '../../assets/estilos/estilos';
import estiloComparacao from '../ItemComparacao/estilos';

import { AntDesign } from '@expo/vector-icons';

export default function SalarioInflacao() {

      const arrowUp = <AntDesign name="arrowup" size={24} color="green" />;
      const arrowDown = <AntDesign name="arrowdown" size={24} color="red" />;

      return (
            <SafeAreaView>
                  <ScrollView>
                        <View style={[estiloGlobal.container, estiloGlobal.odd]}>
                              <Text style={estiloComparacao.textoComparacao}>Ano</Text>
                              <Text style={estiloComparacao.textoComparacao}>Salário</Text>
                              <Text style={estiloComparacao.textoComparacao}>Inflação</Text>
                              <Text style={estiloComparacao.textoComparacao}>Cresc. Salarial</Text>
                              <Text style={estiloComparacao.setaInflacao}>Status Salário</Text>
                        </View>
                        <ItemComparacao ano="2010" salario="R$ 510,00" inflacao="5,91%" crescimentoSalarial="-" statusCrescimento=""/>
                        <ItemComparacao estilo={estiloGlobal.odd} ano="2011" salario="R$ 545,00" inflacao="6,50%" crescimentoSalarial="6,86%" statusCrescimento={arrowUp}/>
                        <ItemComparacao ano="2012" salario="R$ 622,00" inflacao="5,84%" crescimentoSalarial="14,13%" statusCrescimento={arrowUp}/>
                        <ItemComparacao estilo={estiloGlobal.odd} ano="2013" salario="R$ 678,00" inflacao="5,91%" crescimentoSalarial="9,00%" statusCrescimento={arrowUp}/>
                        <ItemComparacao ano="2014" salario="R$ 724,00" inflacao="6,41%" crescimentoSalarial="6,78%" statusCrescimento={arrowUp}/>
                        <ItemComparacao estilo={estiloGlobal.odd} ano="2015" salario="R$ 788,00" inflacao="10,67%" crescimentoSalarial="8,84%" statusCrescimento={arrowDown}/>
                        <ItemComparacao ano="2016" salario="R$ 880,00" inflacao="6,29%" crescimentoSalarial="11,68%" statusCrescimento={arrowUp}/>
                        <ItemComparacao estilo={estiloGlobal.odd} ano="2017" salario="R$ 937,00" inflacao="2,95%" crescimentoSalarial="6,48%" statusCrescimento={arrowUp}/>
                        <ItemComparacao ano="2018" salario="R$ 954,00" inflacao="3,75%" crescimentoSalarial="1,81%" statusCrescimento={arrowDown}/>
                        <ItemComparacao estilo={estiloGlobal.odd} ano="2019" salario="R$ 998,00" inflacao="4,31%" crescimentoSalarial="4,61%" statusCrescimento={arrowUp}/>
                        <ItemComparacao ano="2020" salario="R$ 1045,00" inflacao="4,52%" crescimentoSalarial="4,71%" statusCrescimento={arrowUp}/>
                  </ScrollView>
            </SafeAreaView>
      );
}