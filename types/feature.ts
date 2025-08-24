import { Ionicons } from '@expo/vector-icons';

export interface FeatureCardProps {
  id: string;
  title: string;
  subtitle: string;
  icon?: keyof typeof Ionicons.glyphMap;
  width?: number;
  height?: number;
}

export interface FeaturesListProps {
  features: FeatureCardProps[];
  horizontal?: boolean;
  showsScrollIndicator?: boolean;
  itemSpacing?: number;
  contentPadding?: number;
  numColumns?: number;
}
