import react from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';

export default function Pesquisa({navigation}){
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity>     
        <Image style={styles.image}
                        source={require('../../../assets/search.png')}
                        resizeMode="contain"
                    />
        </TouchableOpacity>     
    </View >
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFD700', 
        height: 100,
        width: 450,
        borderRadius: 60
    },
    image:{
        height: 45,
        width: 60,
        marginTop: 35,
        marginLeft:360
    }
})