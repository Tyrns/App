import * as react from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView,} from 'react-native';

export default function Perfil2() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.legenda}>Dados Pessoais</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.vertical}>

            <View style={styles.horizontal}>
              <Image
                style={{ height: 130, width: 130 }}
                source={require('../../../assets/perfilnovo.png')}
              />
              <TouchableOpacity onClick={() => navigation.navigate()}>
                <Text style={styles.legenda2}>Trocar foto</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.descri}>
              <TextInput
                style={styles.textoarea}
                placeholder="Diga algo sobre você"
                maxLength={50}
              />
            </View>

            <View style={styles.dados1}>
              <View style={styles.horizontal}>
                <Text style={styles.legenda3}>Nome: </Text>
                <TextInput style={styles.legenda4} value={'Carlos'} />
              </View>

              <View style={styles.horizontal}>
                <Text style={styles.legenda3}>CPF: </Text>
                <TextInput style={styles.legenda4} value={'45131746962'} />
              </View>

              <View style={styles.horizontal}>
                <Text style={styles.legenda3}>Telefone: </Text>
                <TextInput style={styles.legenda4} value={'(11) 998764535'} />
              </View>

              <View style={styles.horizontal}>
                <Text style={styles.legenda3}>Endereço: </Text>
                <TextInput style={styles.legenda4} value={'Rua das Amizades, 55'} /> 
              </View>

              <View style={styles.horizontal}>
                <Text style={styles.legenda3}>Email: </Text>
                <TextInput style={styles.legenda4} value={'antonio@email.com'} /> 
              </View>
            </View>

            <View style={{marginTop: 13}}>
              <TouchableOpacity onClick={() => navigation.navigate()}>
                <Text style={styles.legenda2}>Editar dados</Text>
              </TouchableOpacity>
            </View>

        </View>

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
    borderColor: 'white',
    borderStyle: 'solid',
    border: 'solid',
    borderWidth: 5,
  },

  legenda: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },

  legenda2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#ffd700',
    borderRadius: 20,
    padding: 15,
  },

  legenda3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 6,
  },

  legenda4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    textAlign: 'center',
    alignItems: 'center'
  },

  textoarea: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 4,
    justifyContent:'flex-start',
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vertical: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  descri: {
    width: '75%',
    height: 120,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'white',
    margin: 5,
    alignContent: 'flex-start',
    textAlign:'justify'
  },

  dados1: {
    marginTop: 10,
    padding: 8,
    color: 'white',
    fontWeight: 'bold',
    alignSelf:'center'
  },
});
