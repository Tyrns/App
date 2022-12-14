import react from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ color: 'white', fontSize: 15, marginLeft: 30, marginTop: 40 }}>Seja Bem-Vindo</Text>
                <Text style={{ color: 'white', fontSize: 30, marginLeft: 30, fontWeight: 'bold' }}>Carlos Rogério</Text>


                <TextInput placeholder="Pesquisar" style={{ backgroundColor: 'white', marginTop: 40, width: 310, height: 40, alignSelf: 'center', borderRadius: 20, textAlign: 'center' }}></TextInput>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>

                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10, alignSelf: 'center' }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute' }}
                            source={require('../../../assets/abacaxia.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center' }}>Frutas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10, alignSelf: 'center', marginLeft: 15 }} />
                        <Image
                            style={{ width: 80, height: 75, position: 'absolute', marginTop: 5, marginLeft: 15 }}
                            source={require('../../../assets/pao.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Massas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10, alignSelf: 'center', marginLeft: 15 }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute', marginLeft: 15 }}
                            source={require('../../../assets/graos.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Grãos</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', marginTop: 15, alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10 }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute' }}
                            source={require('../../../assets/doce.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Doces</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10, alignSelf: 'center', marginLeft: 15 }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute', marginLeft: 15 }}
                            source={require('../../../assets/salgado.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Refeição</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10, alignSelf: 'center', marginLeft: 15 }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute', marginLeft: 15 }}
                            source={require('../../../assets/drink.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Bebidas</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', marginTop: 15, borderRadius: 10, alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10 }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute' }}
                            source={require('../../../assets/muda.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Mudas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10, alignSelf: 'center', marginLeft: 15 }} />
                        <Image
                            style={{ width: 80, height: 75, position: 'absolute', marginTop: 5, marginLeft: 15 }}
                            source={require('../../../assets/alfacea.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Verduras</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10, alignSelf: 'center', marginLeft: 15 }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute', marginLeft: 15 }}
                            source={require('../../../assets/beterraba.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center', marginLeft: 15 }}>Legumes</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 15, alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <View style={{ width: 80, height: 80, backgroundColor: '#FFD700', borderRadius: 10 }} />
                        <Image
                            style={{ width: 80, height: 80, position: 'absolute' }}
                            source={require('../../../assets/tempero.png')}
                            resizeMode="contain" />
                        <Text style={{ color: 'white', padding: 2, fontSize: 15, textAlign: 'center' }}>Especiarias</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity>
                            <Image style={{ width: 350, height: 250, marginTop: 40, alignSelf: 'center', borderRadius: 10 }}
                                source={require('../../../assets/bananaa.png')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 350, height: 250, marginTop: 40, alignSelf: 'center', borderRadius: 10, marginLeft: 15 }}
                                source={require('../../../assets/carousel1.png')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 350, height: 250, marginTop: 40, alignSelf: 'center', borderRadius: 10, marginLeft: 15 }}
                                source={require('../../../assets/aa.png')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 350, height: 250, marginTop: 40, alignSelf: 'center', borderRadius: 10, marginLeft: 15 }}
                                source={require('../../../assets/bb.jpg')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>Adicionados Recentemente</Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity onPress={() => navigation.navigate('TelaProd')}>
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 15, marginLeft: 8, marginTop: 15 }}
                            source={require('../../../assets/Abacaxi2.jpg')}
                            resizeMode="contain" />
                        <Text style={{
                            fontSize: 20, color: 'white', marginTop: 10, fontWeight: 'bold', textAlign: 'center'
                        }}>Abacaxi Pérola</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 9,00 un</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 15, marginLeft: 8, marginTop: 15 }}
                            source={require('../../../assets/alface.jpeg')}
                            resizeMode="contain" />
                        <Text style={{
                            fontSize: 20, color: 'white', marginTop: 10, fontWeight: 'bold', textAlign: 'center'
                        }}>Alface Fresco</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 2,50 un</Text>

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 15, marginLeft: 8, marginTop: 15 }}
                            source={require('../../../assets/nectarcaju.jpg')}
                            resizeMode="contain" />
                                  <Text style={{
                            fontSize: 20, color: 'white', marginTop: 10, fontWeight: 'bold', textAlign: 'center'
                        }}>Suco de Caju</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 3,50 un</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 15, marginLeft: 8, marginTop: 15 }}
                            source={require('../../../assets/soja.jpg')}
                            resizeMode="contain" />
                                  <Text style={{
                            fontSize: 20, color: 'white', marginTop: 10, fontWeight: 'bold', textAlign: 'center'
                        }}>Soja</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 17,50 un</Text>
                    </TouchableOpacity>
                </ScrollView>

                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop: 30 }}>Ofertas Ativas</Text>

                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', marginTop: 10, marginLeft: 5 }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 188, height: 200, borderRadius: 15, marginLeft: 8, marginTop: 10 }}
                            source={require('../../../assets/cenoura.jpg')}
                            resizeMode="contain" />
                        <Text style={{
                            fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center'
                        }}>Cenoura</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 4,80 kg</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 188, height: 200, borderRadius: 15, marginLeft: 8, marginTop: 10 }}
                            source={require('../../../assets/berinjela.jpg')}
                            resizeMode="contain" />
                        <Text style={{
                            fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center'
                        }}>Berinjela</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 7,50 kg</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', marginTop: 10 ,marginLeft: 5 }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 188, height: 200, borderRadius: 15, marginLeft: 8, marginTop: 10 }}
                            source={require('../../../assets/caldo.jpg')}
                            resizeMode="contain" />
                        <Text style={{
                            fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center'
                        }}>Caldo de Cana</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 8,00 500ml</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 188, height: 200, borderRadius: 15, marginLeft: 8, marginTop: 10}}
                            source={require('../../../assets/eucaliptomuda.jpg')}
                            resizeMode="contain" />
                        <Text style={{
                            fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center'
                        }}>Muda de Eucalipto</Text>
                        <Text style={{
                            fontSize: 20, color: '#1C810C', fontWeight: 'bold', textAlign: 'center'
                        }}>R$ 5,50 kg</Text>
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
        alignItems: 'center',
        height: 150,
        width: 150,
        marginLeft: 135,
        marginTop: 15
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