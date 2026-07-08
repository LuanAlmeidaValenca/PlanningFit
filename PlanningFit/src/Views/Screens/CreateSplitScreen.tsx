import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useWorkoutController } from '../../Controllers/useWorkoutController';
import { Exercise } from '../../Models/Types';

export const CreateSplitScreen = () => {
  // Inicialização do Controller
  const { handleCreateSplit } = useWorkoutController();

  // Estados locais estritos à UI (inputs de formulário)
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [restTime, setRestTime] = useState('');

  const onSubmit = () => {
    // A View delega completamente a regra de negócio para o Controller
    handleCreateSplit({
      name,
      frequency: Number(frequency),
      intensity: 'Média', // Mockado para simplicidade do exemplo
      restTime: Number(restTime),
      exercises: [] as Exercise[],
    });
    
    // Limpeza visual
    setName('');
    setFrequency('');
    setRestTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Divisão de Treino</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome (Ex: Push/Pull/Legs)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Frequência (Dias/Semana)"
        keyboardType="numeric"
        value={frequency}
        onChangeText={setFrequency}
      />
      <TextInput
        style={styles.input}
        placeholder="Tempo de Descanso Padrão (segundos)"
        keyboardType="numeric"
        value={restTime}
        onChangeText={setRestTime}
      />

      <Button title="Salvar Divisão" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 12, marginBottom: 15, borderRadius: 8 },
});