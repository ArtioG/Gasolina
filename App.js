import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  Image 
} from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularCombustivel = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);
    
    if (!isNaN(precoAlcool) && !isNaN(precoGasolina)) {
      const relacao = precoAlcool / precoGasolina;
      if (relacao < 0.7) {
        setResultado('Abasteça com Álcool');
      } else {
        setResultado('Abasteça com Gasolina');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/784/784867.png'}}
        style={styles.image}
        
      />
      <Text style={styles.title}>Álcool ou Gasolina?</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool (R$)"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$)"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />
      <Button 
        title="Calcular" 
        onPress={calcularCombustivel}
      />
      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
