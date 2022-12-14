import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons' //importa ícones do expo//

import Contacts from './src/pages/Contacts'
import Home from './src/pages/Home'
import Senha from './src/pages/Senha'
import Carrinho from './src/pages/Carrinho'
import Calendario from './src/pages/Calendario'
import Perfil from './src/pages/Perfil'
import TelaProd from './src/pages/TelaProd'
import Historico from './src/pages/Historico';
import Perfil2 from './src/pages/Perfil2'
import Vendedor from './src/pages/Vendedor';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: '#FFD700',
      tabBarShowLabel: false,
      tabBarStyle:{
        position: 'absolute',
        backgroundColor: '#302b63',
        borderTopWidth: 0,

        bottom: 14,
        left: 14,
        right: 14,
        elevation: 0,
        borderRadius: 10,
        height: 60
      }
    }}
    >
       <Tab.Screen name="Home" component={Home} options={{headerShown: false,               
       tabBarIcon: ({color, size, focused}) => {
                if(focused){
                  return <Ionicons name="home" size={size} color={color} />
                }
                return <Ionicons name="home-outline" size={size} color={color} />
              }  
      }}
      
      />

       <Tab.Screen name="Calendario" component={Calendario} options={{headerShown: false,
         tabBarIcon: ({color, size, focused}) => {
          if(focused){
            return <Ionicons name="calendar" size={size} color={color} />
          }
          return <Ionicons name="calendar-outline" size={size} color={color} />
        }  
      
      }}/>


        <Tab.Screen name="Carrinho" component={Carrinho} options={{headerShown: false,
        
        tabBarIcon: ({color, size, focused}) => {
          if(focused){
            return <Ionicons name="cart" size={size} color={color} />
          }
          return <Ionicons name="cart-outline" size={size} color={color} />
        }  
        
        
        }}/>


       <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false,
              tabBarIcon: ({color, size, focused}) => {
                if(focused){
                  return <Ionicons name="person" size={size} color={color} />
                }
                return <Ionicons name="person-outline" size={size} color={color} />
              }  
      }}
      />
     </Tab.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator >
       <Stack.Screen name="Contacts" component={Contacts} options={{headerShown: false }}/>

       <Stack.Screen name="Perfil" component={Tabs} options={{headerShown: false}}/>

       <Stack.Screen name="Senha" component={Senha} options={{headerShown: false }}/>

       <Stack.Screen name="Home" component={Tabs} options={{headerShown: false }}/>

       <Stack.Screen name="Calendario" component={Tabs}options={{headerShown: false }}/>

       <Stack.Screen name="Carrinho" component={Tabs} options={{headerShown: false }}/>

       <Stack.Screen name="TelaProd" component={TelaProd} options={{headerShown: false }}/>  

       <Stack.Screen name="Historico" component={Historico} options={{headerShown: false}}/>

       <Stack.Screen name="Perfil2" component={Perfil2} options={{headerShown: false}}/>

       <Stack.Screen name="Vendedor" component={Vendedor} options={{headerShown: false}}/>

       <Stack.Screen name="Sobre" component={Sobre} options={{headerShown: false}}/>


     </Stack.Navigator>
   </NavigationContainer>
  );
}
