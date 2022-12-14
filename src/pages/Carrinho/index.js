import react from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Carrinho({ navigation }) {
    return (
        <View style={styles.container}>
             <ScrollView>  
            <TouchableOpacity>
                        <Image
                        style={{alignSelf: 'center', marginTop: 40}}
                            source={require('../../../assets/produto.jpg')}
                            resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Comprar</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15151F',
        alignItems: 'center'
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
    },
})