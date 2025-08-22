import { Question } from '@/types/question';
import { useApiData } from './useApiData';

interface UseQuestionsReturn {
  questions: Question[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useQuestions = (): UseQuestionsReturn => {
  const { data: questions, loading, error, refetch } = useApiData<Question>(
    '/getQuestions',
    'Sorular yüklenirken bir hata oluştu',
    true // ← Bu eksikti! isDirectArray = true
  );

  return {
    questions,
    loading,
    error,
    refetch,
  };
};
