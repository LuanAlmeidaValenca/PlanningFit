import { create } from 'zustand';
import { Exercise, WorkoutSplit, WorkoutLog } from './Types';

interface WorkoutState {
  splits: WorkoutSplit[];
  exercises: Exercise[];
  history: WorkoutLog[];
  activeSession: WorkoutSplit | null;
  
  // Ações de mutação de estado (Síncronas e locais)
  setSplits: (splits: WorkoutSplit[]) => void;
  setExercises: (exercises: Exercise[]) => void;
  setActiveSession: (session: WorkoutSplit | null) => void;
  addHistoryLog: (log: WorkoutLog) => void;
}

export const useWorkoutStore = create<WorkoutState>((set) => ({
  splits: [],
  exercises: [],
  history: [],
  activeSession: null,

  setSplits: (splits) => set({ splits }),
  setExercises: (exercises) => set({ exercises }),
  setActiveSession: (session) => set({ activeSession: session }),
  addHistoryLog: (log) => set((state) => ({ history: [...state.history, log] })),
}));