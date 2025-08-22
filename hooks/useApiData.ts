import { api } from '@/utils/api';
import { useEffect, useState } from 'react';

// Wrapped response interface 
interface ApiResponse<T> {
  data: T[];
}

interface UseApiDataReturn<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useApiData = <T>(
  endpoint: string,
  errorMessage: string = 'Veriler yüklenirken bir hata oluştu',
  isDirectArray: boolean = false
): UseApiDataReturn<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (isDirectArray) {
        const response = await api.get<T[]>(endpoint);
        setData(response.data);
      } else {
        const response = await api.get<ApiResponse<T>>(endpoint);
        setData(response.data.data);
      }
    } catch (err: any) {
      setError(err.message || errorMessage);
      console.error(`${endpoint} yüklenirken hata:`, err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
