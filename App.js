import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome   from '@expo/vector-icons/FontAwesome';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

import Salario from './componentes/Salario';
import Inflacao from './componentes/Inflacao';
import SalarioXInflacao from './componentes/SalarioXInflacao';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tabs.Navigator>
        <Tabs.Screen name='Salário' component = { Salario } options={{
          tabBarIcon: ({ color }) => (
          <FontAwesome name="dollar" size={24} color= { color } />
           ),
           }}/>
      <Tabs.Screen name='Inflação' component = { Inflacao } options={{
          tabBarIcon: ({ color }) => (
          <Ionicons name="trending-up" size={24} color={color} />
        ),
      }}/>
      <Tabs.Screen name='Salário X Inflação' component = { SalarioXInflacao } options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="compare-arrows" size={24} color= { color } />
        ),
      }}/>
      </Tabs.Navigator>
    </NavigationContainer>
   
  );
}
