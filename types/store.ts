import { PlantCategory } from './plant';
import { Question } from './question';

// App State
export interface AppState {
  hasCompletedOnboarding: boolean;
  isLoading: boolean;
}

// Plant State  
export interface PlantState {
  categories: PlantCategory[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

// Question State
export interface QuestionState {
  questions: Question[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}
