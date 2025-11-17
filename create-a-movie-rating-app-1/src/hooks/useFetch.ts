import { useState, useEffect } from 'react';

interface UseFetchReturn<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  isLoading: boolean;
  error: Error | null;
}

export function useFetch<T>(
  fetchFunction: () => Promise<T>,
  initialValue: T
): UseFetchReturn<T> {
  const [data, setData] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const result = await fetchFunction();
        
        if (!ignore) {
          setData(result);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
          console.error('Error fetching data:', err);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [fetchFunction]);

  return { data, setData, isLoading, error };
}