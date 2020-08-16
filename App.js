import * as React from 'react';
import { Button, View, Text , Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import style from './styles.js'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
     <Image
        style={styles.Capa}
        source={require('./assets/images/capa.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('PaginaCadastro')}
        style = {styles.Botao}
      >Começar</TouchableOpacity>
      
    </View>
  );
}

function Cadastro({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: 'black'}}>
      

      <TextInput placeholder="Local de retirada" 
      style={styles.Input}
      />
      <TextInput placeholder="Data" 
      style={styles.Input}
      />
      <TextInput placeholder="Hora" 
      style={styles.Input}
      />
       <Text style={{color: 'white', padding: 5}}> Ja sou cliente RenCar</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style = {styles.Botao}
      >Voltar</TouchableOpacity>
       <TouchableOpacity
        onPress={() => navigation.navigate('PaginaCatalogo')}
        style = {styles.Botao}
      >Encontrar um carro</TouchableOpacity>
      
     
     
    </View>
  );
}

function Catalogo({ navigation }) {
  return (
    <View style={{backgroundColor: 'white'}}>
    <View style={{ flex: 1, flexDirection: 'row', background:'#0B0A0A', height: 35, width: 320, padding: 5, margin: 5}}>
     <Text style={{color:'white', fontSize: 12, margin: 5, 
}}>16 de Agosto de 2020 / </ Text>
      <Text style={{color:'white', fontSize: 12,  margin: 5}}>20 de Agosto de 2020 </ Text>
</View>

<View> 

<TouchableOpacity
style={styles.Busca}
> Qual carro voce procura?</TouchableOpacity>
<Text style={styles.Resultados}> 23 resultados</Text>
</View>


<View style={{ top: 60,
}}> 


    <View style={styles.Carros}> 
    <Text style ={styles.Modelo}>Fiat Uno </Text>
    <Text style ={styles.Legenda}>Visual FIT 1.0 </Text>

    <Text style ={styles.Valor}> R$75</Text>

    <Image
        style={styles.Carro}
        source={require('./assets/images/car1.png')}
    />
    <TouchableOpacity
      style={styles.Alugar}
      > Alugar</TouchableOpacity>
    </View>

    <View style={styles.Carros}> 
    <Text style ={styles.Modelo}>Chevrolet Onix</Text>
    <Text style ={styles.Legenda}>Joy 1.6 </Text>

    <Text style ={styles.Valor}> R$99</Text>

    <Image
        style={styles.Carro2}
        source={require('./assets/images/car2.png')}
    />
    <TouchableOpacity
      style={styles.Alugar}
      onPress={() => navigation.navigate('PaginaCarro')}

      > Alugar</TouchableOpacity>
    </View>

    <View style={styles.Carros}> 
    <Text style ={styles.Modelo}>Chevrolet Cobalt </Text>
    <Text style ={styles.Legenda}>LTZ 2.0 </Text>

    <Text style ={styles.Valor}> R$120</Text>

    <Image
        style={styles.Carro2}
        source={require('./assets/images/car3.png')}
    />
    <TouchableOpacity
      style={styles.Alugar}
      > Alugar</TouchableOpacity>
    </View>

</View>

    </View>
  );
}

function Carro({ navigation }) {
  return (
    <View style={{backgroundColor:'white'}}>
       <View style={{ flex: 1, flexDirection: 'row', background:'#0B0A0A', height: 35, width: 320, padding: 5, margin: 5}}>
     <Text style={{color:'white', fontSize: 12, margin: 5, 
}}>16 de Agosto de 2020 / </ Text>
      <Text style={{color:'white', fontSize: 12,  margin: 5}}>20 de Agosto de 2020 </ Text>
</View>

<Text style={styles.NomeCarro}> Chevrolet Onix</Text>
<Text> Joy 1.6</Text>

<Image
        style={styles.FotoCarro}
        source={require('./assets/images/car2.png')}
    />

  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 5}}>
    <View style={styles.Menu}> 
      <Image
        style={styles.Icones}
        source={require('./assets/images/cambio.png')}
      />
      <Text style={styles.Caracteristica}>Cambio</Text>
      <Text style={styles.Tipo}>Automatico</Text>

    </View>
    <View style={styles.Menu}> 
      <Image
        style={styles.Icones}
        source={require('./assets/images/combustivel.png')}
      />
      <Text style={styles.Caracteristica}>Combustivel</Text>
      <Text style={styles.Tipo}>Gasolina</Text>

    </View>

    <View style={styles.Menu}> 
      <Image
        style={styles.Icones}
        source={require('./assets/images/acentos.png')}
      />
      <Text style={styles.Caracteristica}>Acentos</Text>
      <Text style={styles.Tipo}>5 pessoas</Text>

    </View>
   

  </View>
   <TouchableOpacity
        onPress={() => navigation.navigate('PaginaCadastro')}
        style = {styles.BotaoSeguro}
      >Adicionar seguro</TouchableOpacity>

        <View style={{ flex: 1,background:'#0B0A0A', height: 35, width: 300, padding: 5, margin: 5, textAlign: 'center'}}>
     <Text style={{color:'white', fontSize: 10, margin: 2, 
}}>
Total </ Text>
      <Text style={{color:'#1AE148', fontSize: 14,  margin: 2, fontWeight: 'bold'}}>
      R$396 </ Text>
</View>
      </View>
  )
  
  }
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PaginaCadastro" component={Cadastro} />
      <Stack.Screen name="PaginaCatalogo" component={Catalogo} />
      <Stack.Screen name="PaginaCarro" component={Carro} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  Capa:{
    width: 280,
    height: 210
  },
  Botao:{
width: 252,
height: 61,
color: 'white',
background: '#1AE148',
borderRadius: 20,
textAlign: 'center',
padding: 15,
    marginBottom: 20,

  },//Pagina cadastro
  Input:{
    backgroundColor: 'white', 
    borderRadius: 20, 
    width: 280,
    padding: 15,
    marginBottom: 20,
        margin: 5


  }, //Catalogo
  Busca: {
  background: 'black',
    width: 217, 
  height: 40,
  color:'white', 
  borderRadius: 20,
  margin: 5,
  fontSize: 12,
  position: "absolute",
  padding: 10,
  textAlign: 'center',
  top: 20,
  left: 40
 
  },
  Resultados:{
    fontWeight:'bold', 
    padding: 10,
    fontSize: 12,
    position: 'relative',
    top: 60,
    color: 'gray'
  },
  Carro:{
    top: -20,
width: 140,
    height: 120,
left: 80
  },
  Carro2:{
    top: -20,
width: 180,
    height: 120,
left: 80
  },

  Carros:{
background: '#F2FFF5',
borderRadius: 10,
width: 300,
height: 160,
margin: 10
  },
  Alugar:{
left:180,
top: -70,
background:'#1AE148', 
width: 107,
height: 47,
textAlign: 'center',
padding: 10,
borderRadius: 20,
color: 'white',
fontWeight: 'bold'


  },
  Modelo:{
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5
},
Legenda:{
  fontSize: 10,
  textAlign: 'left'
},
  Valor:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
        padding: 5


 },//Pagina Carro
 FotoCarro: {
   width: 253,
   height:150,
   left: 56,
 },
 NomeCarro:{
   fontSize: 20,
   fontWeight: 'bold',
   marginTop: 20
 },
 Menu:{margin: 5},

 Icones:{
   width:42, 
   height: 42,
   left: 20
 },
 Caracteristica:{
   color: '#8E8383',
   fontSize: 10,
   textAlign: 'center'

 },
 Tipo:{
   fontSize: 12,
   fontWeight: 'bold',
      textAlign: 'center'

 },
 BotaoSeguro:{
   marginTop:15,
   width: 177,
height: 47,
padding: 8,
left: 70,
textAlign: 'center',
color: 'white',
background: '#1AE148',
borderRadius: 20
 }
})


