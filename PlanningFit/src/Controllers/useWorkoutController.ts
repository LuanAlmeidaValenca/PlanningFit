import { useWorkoutStore } from '../Models/useWorkoutStore';
import { WorkoutService } from '../Services/WorkoutService';
import { WorkoutSplit, Exercise, WorkoutLog } from '../Models/Types';
import { Alert } from 'react-native';

export const useWorkoutController = () => {
  // Acesso às mutações do Zustand
  const { setSplits, splits, setActiveSession, addHistoryLog } = useWorkoutStore();

  const handleCreateSplit = async (newSplitData: Omit<WorkoutSplit, 'id'>) => {
    try {
      const newSplit: WorkoutSplit = {
        ...newSplitData,
        id: Math.random().toString(36).substr(2, 9), // Simulação de ID UUID
      };

      // 1. Envia para o mundo externo
      await WorkoutService.saveSplit(newSplit);
      
      // 2. Atualiza o estado interno se houver sucesso
      setSplits([...splits, newSplit]);
      Alert.alert('Sucesso', 'Divisão de treino criada!');
      
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a divisão.');
    }
  };

  // Lógica para iniciar treino (RFES001) e suporte a controle (RFIC001)
  const startWorkoutSession = (split: WorkoutSplit) => {
    setActiveSession(split);
    // Aqui poderíamos inicializar o listener do microfone para comandos de voz
    console.log(`Sessão iniciada: ${split.name}. Ouvindo comandos de voz...`);
  };

  const executeVoiceCommand = (command: 'iniciar' | 'pausar' | 'pular' | 'finalizar') => {
    // Ponto de entrada para a futura IA ou parser de voz (RFIC001)
    switch (command) {
      case 'pausar':
        console.log('Treino pausado via comando de voz.');
        break;
      case 'pular':
        console.log('Avançando para o próximo exercício via voz.');
        break;
      case 'finalizar':
        console.log('Finalizando treino via voz...');
        setActiveSession(null);
        break;
      default:
        console.log('Comando não reconhecido.');
    }
  };

  return {
    handleCreateSplit,
    startWorkoutSession,
    executeVoiceCommand
  };
};