import { useState } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string;
  request: (...args: string[]) => Promise<void>;
}

export function useApi<T>(
  apiCallback: (...args: string[]) => Promise<T>,
): ApiState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const request = async (...args: string[]) => {
    setLoading(true);

    try {
      const result = await apiCallback(...args);
      setData(result);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('Uuups wystąpił niespodziewany błąd');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
}
