import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet, Image,TouchableOpacity,TextInput,ScrollView,FlatList} from 'react-native';

export default function Calendario({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.legenda}>Calendário de Safra</Text>
      </View>

      <View style={styles.body}>
        <View style={{padding: 8}}>
          <TextInput 
            style={styles.pesquisa} 
            placeholder={'Estou procurando...'} 
            placeholderTextColor={'white'}
          />
        </View>
        
        <ScrollView style={{width: '100%'}}>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Janeiro</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacaxi, carambola, coco verde, figo, framboesa,
                      fruta do conde, laranja-pera, mamão, maracujá, melancia, nectarina e uva. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      alface, cebolinha, couve e salsa. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, abobrinha, beterraba, pepino, pimentão, quiabo e tomate.
                    </Text>
                </View>                
              </View>                
            </View>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Fevereiro</Text>
                  <View style={styles.capsula2}>
                    <Text style={styles.legenda2}>Frutas</Text>
                      <Text style={styles.legenda4}>
                        abacate, ameixa, carambola, coco verde,
                        figo, fruta do conde, goiaba, jaca, maçã, pera, pêssego, seriguela e uva.
                      </Text>                    
                  </View>
                  <View style={styles.capsula2}>
                    <Text style={styles.legenda2}>Verduras</Text>
                      <Text style={styles.legenda4}>
                        escarola, hortelã e repolho.
                      </Text>
                  </View>
                  <View style={styles.capsula2}>
                    <Text style={styles.legenda2}>Legumes</Text>
                      <Text style={styles.legenda4}>
                        abóbora, gengibre, milho verde, pepino, pimentão, quiabo e tomate.
                      </Text>
                  </View>
              </View>                
            </View>  

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Março</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacate, abacaxi, ameixa, banana-maçã, banana-nanica, coco verde, 
                      figo, fruta do conde, goiaba, jaca, limão, maçã, mamão, mangostão, 
                      nectarina, pera, uva, pêssego, seriguela e tangerina. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      acelga, alface, alho-poró, coentro, endívia, escarola, repolho, rúcula e salsa. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, abobrinha, berinjela, beterraba, cará, chuchu, gengibre, 
                      inhame, jiló, milho-verde, nabo, pepino, quiabo e tomate.
                    </Text>
                </View>                
              </View>                
            </View>   

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Abril</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacate, ameixa, banana-maçã, caqui, cidra, jaca, kiwi, maçã, mamão, pera, tangerina e uva. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      alface, alho-poró, almeirão, catalonha, escarola e repolho. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, abrobrinha, berinjela, beterraba, cará, chuchu, gengibre, inhame, nabo, pepino e tomate.
                    </Text>
                </View>                
              </View>                
            </View>  

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Maio</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacate, banana-maçã, caqui, jaca, kiwi, maçã, pera, tangerina e uva. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      alho-poró, almeirão, erva-doce, louro, nabo. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, abobrinha, batata-doce, berinjela, beterraba, cará, cenoura, 
                      chuchu, inhame, mandioca, mandioquinha, nabo e rabanete.
                    </Text>
                </View>                
              </View>                
            </View> 

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Junho</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      carambola, kiwi, laranja-lima, mangostão, marmelo, mexerica e tangerina. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      agrião, alho-poró, almeirão, brócolis e erva-doce. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, batata-doce, berinjela, cará, cenoura, ervilha, gengibre, inhame, mandioca,
                      mandioquinha, milho-verde e palmito.
                    </Text>
                </View>                
              </View>                
            </View>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Julho</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      carambola, kiwi, laranja-lima, mexerica e tangerina.
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      agrião, alho-poró, chicória, coentro, couve, erva-doce, espinafre, mostarda e salsão. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      cenoura, abóbora, batata-doce, cará, cogumelo, ervilha, inhame, mandioca, 
                      mandioquinha, milho-verde, nabo, palmito, pepino e rabanete.
                    </Text>
                </View>                
              </View>                
            </View>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Agosto</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      banana-nanica, caju, carambola, kiwi, laranja-pera, lima, maçã, mamão, mexerica, morango e tangerina.
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      agrião, alho-poró, brócolis, chicória, coentro, couve, couve-flor, erva-doce, escarola, espinafre, mostarda e rúcula. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, abobrinha, cará, cenoura, ervilha, fava, inhame, mandioca, mandioquinha, nabo, pimentão e rabanete.
                    </Text>
                </View>                
              </View>                
            </View>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Setembro</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacaxi, banana-nanica, caju, jabuticaba, laranja-lima, laranja-pera, maçã, mexerica, nêspera, tamarindo e tangerina.
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      alho-poró, almeirão, brócolis, chicória, couve, couve-flor, erva-doce, espinafre, louro e orégano. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, abobrinha, cará, cogumelo, ervilha, fava, inhame, pimentão e rabanete.
                    </Text>
                </View>                
              </View>                
            </View>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Outubro</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacaxi, acerola, banana-nanica, banana-prata, caju, manga, 
                      coco-verde, jabuticaba, laranja-pera, lima, maçã, mamão, nêspera e tangerina.
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      alho-poró, almeirão, brócolis, catalonha, cebolinha, chicória, coentro, 
                      couve-flor, erva-doce, espinafre, folha de uva, hortelã, mostarda e orégano. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abóbora, abobrinha, alcachofra, aspargos, batata-doce, berinjela, 
                      beterraba, cenoura, cogumelo, ervilha, fava, inhame, pepino, pimentão, rabanete, tomate e tomate-caqui.
                    </Text>
                </View>                
              </View>                
            </View>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Novembro</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacaxi, acerola, banana-nanica, banana-prata, caju, coco verde, 
                      framboesa, jaca, laranja-pera, maçã, mamão, manga, maracujá, melancia, 
                      melão, nectarina, pêssego e tangerina.
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      alho-poró, almeirão, brócolis, cebolinha, endívia, erva-doce, espinafre e folha de uva. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abobrinha, aspargos, berinjela, beterraba, cenoura, inhame, maxixe, nabo, pepino, pimentão e tomate.
                    </Text>
                </View>                
              </View>                
            </View>

            <View style={styles.vertical}>
              <View style={styles.capsula}>
                <Text style={styles.legenda3}>Dezembro</Text>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Frutas</Text>
                    <Text style={styles.legenda4}>
                      abacaxi, ameixa, banana-prata, cereja, coco verde, damasco, figo,
                      framboesa, graviola, kiwi, laranja-pera, limão, lichia, maçã, 
                      manga, maracujá, melancia, melão, nectarina, pêssego, romã e uva.
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Verduras</Text>
                    <Text style={styles.legenda4}>
                      almeirão, cebolinha, endívias, erva-doce, folha de uva, hortelã, orégano, rúcula, salsa e salsão. 
                    </Text>
                </View>
                <View style={styles.capsula2}>
                  <Text style={styles.legenda2}>Legumes</Text>
                    <Text style={styles.legenda4}> 
                      abobrinha, beterraba, cenoura, cogumelo, pimentão, tomate e vagem macarrão.
                    </Text>
                </View>                
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

  body: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#1b1b2b',
    width: '100%',
    height: '100%',
    marginBottom: -5,
    borderRadius: 15,
    paddingTop: 5,
    borderColor: 'white',
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
    width: '100%',
  },

  pesquisa: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    margin: 15,
  },

  capsula: {
    width: '100%',
    margin: 8,
    borderColor: 'white',
    borderWidth: 5,
    padding: 10,
  },

  capsula2: {
    width: '98%',
    margin: 0,
    borderColor: 'white',
    borderWidth: 5,
    padding: 10,
  },

  image: {
    alignItems: 'center',
    height: 100,
    width: 100,
    marginTop: 25,
    marginBottom: -20,
  },

  legenda: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 33,
    marginTop:40
  },

  legenda2: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center'
  },

  legenda3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign:'center'
  },

  legenda4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
});
