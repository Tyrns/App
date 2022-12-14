import * as react from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView,} from 'react-native';

export default function Historico(){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.legenda}>Histórico de Compras</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.horizontal}>
              <Image
                style={{ height: 130, width: 130 }}
                source={require('../../../assets/perfilnovo.png')}
              />
                <Text style={styles.legenda2}>Carlos Rogério</Text>
        </View>
          
        <ScrollView>

          <View style={styles.vertical}>
            <View style={styles.lista}>
              <Text>Data: 03/11/2022</Text>
              <Text>Forma de Pagamento: Cartão de Débito</Text>
              <Text>Status: Entregue</Text>
              <Text>-------------------------------</Text>
              <Text>Loja/Tenda: Os Tesouros do Sr José</Text>
              <Text>-------------------------------</Text>
              <Text>Frutas: </Text>
                <Text> --Maçã (x6) - R$4,28 </Text>
                <Text> --Laranja (x12) - R$6,00 </Text>
                <Text> --Mixirica (x6) - R$4,00 </Text>
              <Text>-------------------------------</Text>
              <Text>Legumes: </Text>
                <Text> -- Beterraba(x6) - R$8,00 </Text>
              <Text>-------------------------------</Text>
              <Text>Total:R$22,28 + Frete*</Text> 
              <Text>Valor Total: R$26,78 </Text>
            </View>
          </View>

          <View style={styles.vertical}>
            <View style={styles.lista}>
              <Text>Data: 27/10/2022</Text>
              <Text>Forma de Pagamento: Cartão de Débito</Text>
              <Text>Status: Cancelado/Estornado </Text>
              <Text>-------------------------------</Text>
              <Text>Loja/Tenda: Rei Mel!</Text>
              <Text>-------------------------------</Text>
              <Text>Doces: </Text>
                <Text> --Mel Silvestre (x6) - R$14,98 </Text>
              <Text>-------------------------------</Text>
              <Text>Total:R$14,98 + Frete*</Text> 
              <Text>Valor Total: R$18,78 </Text>
            </View>
          </View>

          <View style={styles.vertical}>
            <View style={styles.lista}>
              <Text>Data: 27/10/2022</Text>
              <Text>Forma de Pagamento: Cartão de Débito</Text>
              <Text>Status: Entregue </Text>
              <Text>-------------------------------</Text>
              <Text>Loja/Tenda: A Sinhá da Bahia</Text>
              <Text>-------------------------------</Text>
              <Text>Especiarias: </Text>
                <Text> --Tempero Baiano (x2) - R$2,98 </Text>
              <Text>-------------------------------</Text>
              <Text>Loja/Tenda: Silk Roots</Text>
              <Text>-------------------------------</Text>
              <Text>Verduras: </Text>
                <Text> --Alface Americana (x5) - R$4,78 </Text>
                <Text> --Alface Crespa (x5) - R$3,58 </Text>
                <Text> --Couve-Flor (x2) - R$2,49</Text>
              <Text>Legumes: </Text>
                <Text> --Berinjela (x6) - R$5,72 </Text>
                <Text> --Pimentão Amarelo (x3) - R$2,52 </Text>
                <Text> --Pimentão Verde (x3) - R$2,25 </Text>  

              <Text>-------------------------------</Text>
              <Text>Total:R$24,32 + Frete*</Text> 
              <Text>Valor Total: R$28,68 </Text>
            </View>
          </View>

        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15151F',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 30,
    marginTop: 15,
  },

  body: {
    flex: 1,
    backgroundColor: '#1b1b2b',
    width: '100%',
    height: '100%',
    marginBottom: -3,
    borderRadius: 15,
    padding: 20,
    borderColor: '#FFD700',
    borderStyle: 'solid',
    border: 'solid',
    borderWidth: 5,
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vertical: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },

  lista: {
    backgroundColor: '#fffdd0',
    textAlign:'justify',
    padding: 5,
    marginTop:10
  },

  legenda: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 33,
  },

    legenda2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});