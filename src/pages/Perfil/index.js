import * as react from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Perfil({navigation}){
    return(
        <View style={styles.container}>
        <ScrollView>
        <View style={styles.logo}>
            <Image style={styles.image}
                source={require('../../../assets/perfilnovo.png')}
                resizeMode="contain"
            />
        </View >
          <Text style={styles.legenda}>Carlos Rogério</Text>
      
        <View style={styles.body}>
        <TouchableOpacity onPress={()=>navigation.navigate('Perfil2')} style={styles.capsula}>        
          <View>          
              <Text style={styles.legenda2}>Editar Perfil</Text>
          </View>            
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Historico')} style={styles.capsula}> 
          <View>
            <Text style={styles.legenda2}>Histórico de Compras</Text>
          </View>
          </TouchableOpacity>  

          <TouchableOpacity style={styles.capsula}>
          <View>
          <Text style={styles.legenda2}>Carteira</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.capsula}>
          <View>
          <Text style={styles.legenda2}>Configurações</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.capsula}>
          <View>
          <Text style={styles.legenda2}>Ajuda</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.capsula}>
          <View >
          <Text style={styles.legenda2}>Termos de Uso</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.capsula} onPress={() => navigation.navigate('Sobre')}>
          <View >
          <Text style={styles.legenda2}>Sobre</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.capsula} onPress={() => navigation.navigate('Vendedor')}>
          <View >
          <Text style={styles.legenda2}>Tornar-se um Vendedor</Text>
          </View>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15151F',
        alignItems: 'center'
    },
    
    image: {
        marginTop: 25,
        alignSelf: 'center',
        height: 150,
        width: 150,
        marginTop: 20
    },

    legenda: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 28,
      textAlign: 'center'
    },
    
    legenda2: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },

    body: {
      marginTop: 25,
      padding: 30,
      borderRadius: 20,
      backgroundColor: '#1B1B2B',
      alignItems:'center',
      width: '100%'
    },

    capsula: {
      margin: 10,
      marginBottom: 4,
      padding: 25,
      borderRadius: 5,
      width: '100%',
      backgroundColor:'#FFD700' ,

    },
    header: {
        backgroundColor: '#FFD700',
        height: 80,
        width: 405,
        borderRadius: 10
    },
    titulo: {
        fontSize: 45,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: 10
    }

})