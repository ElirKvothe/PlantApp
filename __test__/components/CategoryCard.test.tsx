import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CategoryCard } from '../../components/ui/CategoryCard';
import { PlantCategory } from '../../types/plant';

const mockCategory: PlantCategory = {
  id: 1,
  name: 'flowers',
  title: 'Beautiful Flowers',
  rank: 1,
  image: {
    id: 1,
    url: 'https://example.com/flower.jpg'
  }
};

describe('CategoryCard', () => {
  it('should render category title', () => {
    const { getByText } = render(<CategoryCard category={mockCategory} />);
    
    expect(getByText('Beautiful Flowers')).toBeTruthy();
  });

  it('should call onPress when touched', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <CategoryCard category={mockCategory} onPress={mockOnPress} />
    );
    
    fireEvent.press(getByText('Beautiful Flowers'));
    
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render without onPress prop', () => {
    const { getByText } = render(<CategoryCard category={mockCategory} />);
    
    expect(getByText('Beautiful Flowers')).toBeTruthy();
  });

  it('should handle empty image url', () => {
    const categoryWithoutImage: PlantCategory = {
      ...mockCategory,
      image: { id: 1, url: '' }
    };
    
    const { getByText } = render(<CategoryCard category={categoryWithoutImage} />);
    
    expect(getByText('Beautiful Flowers')).toBeTruthy();
  });
});