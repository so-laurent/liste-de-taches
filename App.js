import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/Taskify_Logo.png')} style={styles.logo}/>;
      <Text style={styles.text}>Taskify{"\n"}</Text>
      <Text style={styles.littletext}>Gérez vos tâches, atteignez vos objectifs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 28,
    color: '#333', 
  },
  littletext: {
    fontSize: 16,
  },
  logo: {
    height: 90,
    width: 90,
  }
});
