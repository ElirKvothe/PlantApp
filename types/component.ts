import { ReactNode } from 'react';
import { PlantCategory } from './plant';

// Layout Components
export interface OnboardingLayoutProps {
  children: ReactNode;
  backgroundSource: any;
}

// UI Components
export interface MessageIconProps {
  width?: number;
  height?: number;
}

export interface CategoryCardProps {
  category: PlantCategory;
  onPress?: () => void;
}

export interface QuestionCardProps {
  question: import('./question').Question;
  onPress?: () => void;
}

export interface OnboardingPaginationProps {
  totalSteps: number;
  currentStep: number;
  activeColor?: string;
  inactiveColor?: string;
}

export interface OnboardingButtonProps {
  title: string;
  onPress: () => void;
}
