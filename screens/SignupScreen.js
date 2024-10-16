import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botón para registrarse como Cliente */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignupPersonaScreen')}
      >
        <Text style={styles.buttonText}>Registrarse como Cliente</Text>
      </TouchableOpacity>

      {/* Botón para registrarse como Tienda */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignupTiendaScreen')}
      >
        <Text style={styles.buttonText}>Registrarse como Tienda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#2C64F1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
