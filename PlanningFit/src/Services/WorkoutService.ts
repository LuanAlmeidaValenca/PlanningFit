import { WorkoutSplit, Exercise, WorkoutLog } from '../Models/Types';

// Serviço "Mockado" simulando persistência de dados
export const WorkoutService = {
  async saveSplit(split: WorkoutSplit): Promise<void> {
    // Ex: await api.post('/splits', split);
    console.log('Divisão salva no banco de dados:', split.name);
  },

  async saveExercise(exercise: Exercise): Promise<void> {
    // Ex: await api.post('/exercises', exercise);
    console.log('Exercício salvo:', exercise.description);
  },

  async saveSessionLog(log: WorkoutLog): Promise<void> {
    // Ex: await api.post('/logs', log);
    console.log('Sessão registrada no histórico com sucesso.');
  }
};