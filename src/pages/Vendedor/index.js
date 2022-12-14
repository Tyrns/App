import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Vendedor({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.logo}>
                <Image style={styles.image}
                    source={require('../../../assets/logo.png')}
                    resizeMode="contain"
                />
            </View >

            <View style={styles.login}>
                <View style={styles.login2}>
                    <Text style={styles.acs}>Torne-se um Vendedor!</Text>
                    <Text style={styles.acs2}>Confirme seu email e senha.</Text>
                    </View>
                    <TextInput placeholder="Digite seu Email:" style={styles.inputbox}>
                    </TextInput>
                    <TextInput placeholder="Digite sua Senha:" style={styles.inputbox}>
                    </TextInput>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Confirmar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttontext2}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        backgroundColor: '#15151F',
        height: 200,
        width: '100%',
        alignItems: 'center'
    },
    image: {
        alignItems: 'center',
        marginTop: 50,
        height: 200,
        width: 200,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#15151F',
        alignItems: 'center',
        height: '100%',
    },
    button: {
        backgroundColor: '#302b63',
        borderRadius: 5,
        width: 200,
        marginTop: 20,
        height: 47
    },
    button2: {
        backgroundColor: '#302b63',
        borderRadius: 5,
        width: 200,
        marginTop: 20,
        height: 30,
    },
    login: {
        backgroundColor: '#1B1B2B',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 25,
        marginTop: 100,
        padding: 10
    },
    login2: {
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'center'
    },
    buttontext: {
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        color: 'white'
    },
    buttontext2: {
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 3,
        color: 'red'
    },
    acs: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center'
    },
    acs2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'

    },
    cad: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: '48%'
    },
    esq: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: '35%'
    },
    inputbox: {
        backgroundColor: '#EEEEEE',
        width: 300,
        height: 46,
        color: 'black',
        borderRadius: 5,
        marginTop: 20
    }
})