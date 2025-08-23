import { Ionicons } from '@expo/vector-icons';

export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  icon?: keyof typeof Ionicons.glyphMap;
  width?: number;
  height?: number;
}

export interface FeatureCardProps extends Feature {}

export interface FeaturesListProps {
  features: Feature[];
  horizontal?: boolean;
  showsScrollIndicator?: boolean;
  itemSpacing?: number;
  contentPadding?: number;
  numColumns?: number;
}
