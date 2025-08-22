import { PlantCategory } from '@/types/plant';
import { useApiData } from './useApiData';

interface UsePlantCategoriesReturn {
  categories: PlantCategory[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const usePlantCategories = (): UsePlantCategoriesReturn => {
  const { data: categories, loading, error, refetch } = useApiData<PlantCategory>(
    '/getCategories',
    'Kategoriler yüklenirken bir hata oluştu',
    false
  );

  return {
    categories,
    loading,
    error,
    refetch,
  };
};