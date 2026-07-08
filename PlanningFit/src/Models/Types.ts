export type MuscleGroup = 'Peito' | 'Costas' | 'Pernas' | 'Braços' | 'Core' | 'Ombros';

export interface Exercise {
  id: string;
  description: string;
  muscleGroups: MuscleGroup[];
  intensity: 'Baixa' | 'Média' | 'Alta';
}

export interface WorkoutSplit {
  id: string;
  name: string;
  frequency: number; // dias por semana
  intensity: 'Baixa' | 'Média' | 'Alta';
  restTime: number; // em segundos
  exercises: Exercise[];
}

export interface WorkoutLog {
  id: string;
  splitId: string;
  date: string;
  durationInSeconds: number;
  exercisesLog: {
    exerciseId: string;
    reps: number;
    weight: number;
  }[];
}