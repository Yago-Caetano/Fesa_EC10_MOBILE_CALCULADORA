import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';

export default function App() {

  const [valor1,setValor1] = useState(0)
  const [valor2,setValor2] = useState(0)
  const [resultado,setResultado] = useState(0)

  function check_fields()
  {
    if(valor1 == '' || valor2 == '')
    {
      Alert.alert("Preencha os campos!!")
      return false
    }

    Keyboard.dismiss()
    return true
  }

  function clear_fields()
  {
    setValor1(0)
    setValor2(0)
    setResultado(0)
  }

  function calcula(operacao)
  {
    if(check_fields() == false)
    {
      return
    }

    switch(operacao)
    {
      case '+':
        setResultado(Number.parseFloat(valor1) + Number.parseFloat(valor2))
        break;

      case '-':
          setResultado(Number.parseFloat(valor1) - Number.parseFloat(valor2))
        break;

      case '*':
          setResultado(Number.parseFloat(valor1) * Number.parseFloat(valor2))
      break;

      case '/':
        setResultado(Number.parseFloat(valor1) / Number.parseFloat(valor2))
      break;

      case '^':
        setResultado(Math.pow(Number.parseFloat(valor1), Number.parseFloat(valor2)))
      break;

    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Calculadora</Text>

      <Text style={styles.legenda}>Valor 1: </Text>
      <TextInput style={styles.caixaTexto}  keyboardType='number-pad' onChangeText={(texto)=>{setValor1(texto)}} value={valor1}>
      </TextInput>

      <Text style={styles.legenda}>Valor 2: </Text>
      <TextInput style={styles.caixaTexto} keyboardType='number-pad' onChangeText={(texto)=>{setValor2(texto)}} value={valor2}>
      </TextInput>

      <TouchableOpacity style={styles.botao} onPress={ ()=>calcula('+') }>
        <Text style={styles.botao_texto}> + </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={ ()=>calcula('-') }>
        <Text style={styles.botao_texto}> - </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={ ()=>calcula('*') }>
        <Text style={styles.botao_texto}> * </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={ ()=>calcula('/') }>
        <Text style={styles.botao_texto}> / </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={ ()=>calcula('^') }>
        <Text style={styles.botao_texto}> ^ </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}  onPress={()=>clear_fields()}><Text style={styles.botao_texto}>🗑️</Text></TouchableOpacity>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16
  },
  legenda: {
    fontSize: 16,
    fontColor: '#880E4F'

  },
  caixaTexto: {
    fontSize: 25,
    color: '#F06292',
    width: "60%",
    height: 40,
    borderColor: '#D81B60',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  botao: {
    width: "60%",
    height: 40,
    margin:8,
    borderColor: '#D81B60',
    borderStyle: 'solid',
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  botao_texto:{
    fontWeight: 'bold',
    fontSize: 24,
  },
  resultado:{
    fontSize: 30,
    color: '#AD1457',
    marginTop:30,
  }







});
