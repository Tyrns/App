import react from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function TelaProd({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>  
            <Image
                style={{ width: 400, height: 300, borderRadius: 15, position: 'absolute'}}
                source={require('../../../assets/Abacaxi2.jpg')}
                resizeMode="contain" />
            <View style={{ borderRadius: 15, backgroundColor: '#1B1B2B', height: 300, width:400, marginTop: 270}}>
                <Text style={{fontSize: 35, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Abacaxi Pérola </Text>
                <Text style={{fontSize: 20, color: 'white', padding:5, marginLeft: 5, fontWeight: 'bold', marginTop: 10}}>Preço: R$9,00 un</Text>
                <Text style={{fontSize: 20, color: 'white', padding:5, marginLeft: 5, fontWeight: 'bold'}}>Categoria: Frutas</Text>
                <Text style={{fontSize: 20, color: 'white', padding:5, marginLeft: 5, fontWeight: 'bold'}}>Descrição: Se tiver sorte, vai ir doce.</Text>
                <Text style={{fontSize: 20, color: 'white', padding:5, marginLeft: 5, fontWeight: 'bold'}}>Restam: 8</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Comprar</Text>
                </TouchableOpacity>
            </View>

            <View style={{ borderRadius: 15, backgroundColor: '#1B1B2B', height: 130, width:400, marginTop: 40}}>
                <Text style={{ color: 'white', padding:5, marginLeft: 5, fontWeight: 'bold', marginTop: 10}}>Vendedor: Carlos Rogério</Text>
                <Text style={{ color: 'white', padding:5, marginLeft: 5, fontWeight: 'bold', marginTop: 10}}>Vendas Realizadas: 14</Text>
                <Text style={{ color: 'white', padding:5, marginLeft: 5, fontWeight: 'bold', marginTop: 10}}>Entrega em até 2h</Text>

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
    button: {
        backgroundColor: '#302b63',
        borderRadius: 5,
        width: 200,
        marginTop: 20,
        height: 47,
        alignSelf: 'center'
    },
    buttontext: {
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 5
    }
})