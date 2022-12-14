import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Contacts({navigation}){
    return(
        <View style={styles.container}>

        <View style={styles.logo}>
            <Image style={styles.image}
                source={require('../../../assets/logo.png')}
                resizeMode="contain"
            />
        </View >

        <View style={styles.login}>
            <View style={styles.login2}>
                <Text style={styles.acs}>Acesse sua conta</Text>

            <View  style={{flexDirection: 'row', padding: 10}}>
            <View style={{ marginLeft: 15}}>
                <TouchableOpacity>
                    <Image
                        style={{height: 50, width:50,}}
                        source={require('../../../assets/google.png')}
                    />
                </TouchableOpacity>
                </View> 

                <View style={{ marginLeft: 15}}>
                <TouchableOpacity>
                    <Image
                        style={{height: 50, width:50,}}
                        source={require('../../../assets/instagram.png')}
                    />
                </TouchableOpacity>
                </View> 

                <View style={{ marginLeft: 15}}>
                <TouchableOpacity>
                    <Image
                        style={{height: 50, width:50,}}
                        source={require('../../../assets/facebook.png')}
                    />
                </TouchableOpacity>
                </View> 

                </View>

                <TextInput placeholder="Email:" style={styles.inputbox}>
                </TextInput>
                <TextInput placeholder="Senha:" style={styles.inputbox}>
                </TextInput>
                <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
                    <Text style={styles.esq}>Esqueceu a Senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
                    <Text style={styles.cad}>Cadastrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttontext}>Acessar</Text>
                </TouchableOpacity>
            </View>
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
    marginTop: 10,
    justifyContent: 'center'
},
buttontext: {
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 5
},
acs: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
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
    marginTop: 20,
    borderRadius: 5
}
})