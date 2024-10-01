import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AddTask = () => {
  return (
    <View style={styles.container} >
      <Text>Adicionar Tarefa </Text>
      {/* Adicione seu formulário ou funcionalidade de adicionar tarefa aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
