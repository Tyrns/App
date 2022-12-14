import * as react from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView,} from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <View style={styles.header}>
        <Text style={styles.legenda}>Sobre</Text>
      </View>
    <View style={styles.body}>
    <Text style={{color:'orange', fontSize: 30, textAlign: 'center'}}>Quem somos?</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>A S.Plant é um sistema para que você cliente possa comprar diversos produtos orgânicos de qualidade, incluindo Frutas, Verduras, Grãos e todas as suas variedades como sucos, doces, etc. Tendo o conforto de receber esses ótimo produtos na porta de sua casa. Nós da S.Plant temos como intuito de ligar os praticantes da agricultura orgânica com a intenção de vende-la a possíveis clientes que gostariam de consumir produtos de maior qualidade, ou seja, sem a utilização de agrótoxicos, desta forma garantindo uma saúde ao próprio consumidor e também a nossa querida mãe Terra por não infectar seu solo. Opite por um bom alimento, afinal você é o que você come.</Text> 
    
    <Text style={{color:'orange', fontSize: 30, textAlign: 'center', marginTop: 10}}>O que seriam os agrotóxicos?</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>Agrotóxicos são produtos químicos sintéticos usados para matar insetos, larvas, fungos, carrapatos sob a justificativa de controlar as doenças provocadaspor esses vetores e de regular o crescimento da vegetação, tanto no ambiente rural quanto urbano (BRASIL, 2002; INCA, 2021). Estes produtos tem seu uso tanto em atividades agrícolas como não agrícolas. As agrícolas são relacionadas ao setor de produção, seja na limpeza do terreno e preparação do solo, na etapa de acompanhamento da lavoura, no deposito e no beneficiamento de produtos agrícolas, nas pastagens e nas florestas plantadas. O uso não agrícola é feito em florestas nativas ou outros ecossistemas, como lagos e açudes, por exemplo.</Text> 

    <Text style={{color:'orange', fontSize: 30, textAlign: 'center', marginTop: 10}}>Principais efeitos à saúde</Text> 
    <Text style={{color:'orange', fontSize: 20, textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>Efeitos Agudos</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>- Através da pele: Irritação na pele, ardência, desidratação, alergias;</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>- Através da respiração: Ardência do nariz e boca, tosse, coriza, dor no peito, dificuldade de respirar;</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>- Através da boca: Irritação da boca e garganta, dor de estômago, náuseas, vômitos, diarreia; Outros sintomas inespecíficos também podem ocorrer, tais como: dor de cabeça, transpiração anor.</Text> 

    <Text style={{color:'orange', fontSize: 20, textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>Efeitos Crônicos</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>- Dificuldade para dormir, esquecimento, aborto, impotência, depressão, problemas respiratórios graves, alteração do funcionamento do fígado e dos rins, anormalidade da produção de hormônios da tireoide, dos ovários e da próstata, incapacidade de gerar filhos, malformação e problemas no desenvolvimento intelectual e físico das crianças. Estudos apontam grupos de agrotóxicos como prováveis e possíveis carcinogênicos (ANVISA, 2018);</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>- A associação entre exposição a agrotóxicos e desenvolvimento de câncer ainda gera polêmicas, principalmente porque os indivíduos estão expostos a diversas substâncias, sem contar outros fatores genéticos. Porém, é importante salientar que estudos vêm mostrando o potencial de desenvolvimento de câncer relacionado a diversos agrotóxicos, justificando a recomendação de precaução para com o uso e contato.</Text> 

    <Text style={{color:'orange', fontSize: 30, textAlign: 'center', marginTop: 10}}>O que é agricultura orgânica?</Text> 
    <Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>Mas, afinal, o que é agricultura orgânica? A produção orgânica, como também é conhecida, tem como princípio o respeito ao meio ambiente. Esse fundamento ajuda a entender um pouco sobre as técnicas usadas no manejo orgânico, que usa culturas baseadas nos processos biológicos presentes na natureza. Ou seja, a agricultura orgânica consiste em um processo de plantio o mais natural possível e livre de produtos sintéticos, como fertilizantes ou agrotóxicos. Para isso, são utilizados adubos orgânicos gerados pela compostagem, racionamento de água, entre outros métodos. A princípio, o que era um estilo adotado exclusivamente por produtores de frutas e hortaliças se popularizou pouco a pouco como alternativa sustentável à produção convencional. Por isso, vemos, com mais frequência, a presença de alimentos orgânicos nas prateleiras dos mercados.</Text> 

    <Text style={{color:'orange', fontSize: 30, textAlign: 'center', marginTop: 10}}>Como ocorre a agricultura orgânica?
</Text> 
<Text style={{color:'white', fontSize: 15, textAlign: 'justify', marginTop: 10}}>Agora que você já sabe qual o objetivo da agricultura orgânica é hora de entender mais sobre como esse sistema funciona. Um dos pontos que define a agricultura orgânica é a adaptação da produção às condições climáticas e espaciais que determinado ambiente oferece. O uso de fertilizantes e produtos naturais, por exemplo, é bem-vindo nesse estilo. Além disso, a rotação de cultivo é outro pilar, variando o máximo possível o que é plantado na região. Durante a produção, são utilizados adubos e fertilizantes naturais, e não há uso de pesticidas e outros componentes químicos.
</Text> 

<Text style={{color:'orange', fontSize: 30, textAlign: 'center', marginTop: 10}}>Contato</Text>
<Text style={{color: '#e982e0', fontSize: 25, marginTop: 10}}>MeltedBrain</Text>
<Text style={{color: 'white', fontSize: 20}}>Telefone: (11) 4002-8922</Text>
<Text style={{color: 'white', fontSize: 20, marginTop: 10}}>Endereço: 
R. Cristóbal Cláudio Elilo, 88
Guarulhos, São Paulo</Text>
<Text style={{color: '#FFD700', fontSize: 20,marginTop: 10}}>meltedbrain@gmail.com</Text>





    </View>
    </ScrollView>
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
  legenda:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,  }
});
