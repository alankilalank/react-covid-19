import axios from 'axios';
import * as React from 'react';
import { UseDataApiArgs, UseDataApiResponse } from '../types';

export default function useDataApi<TData = any>({
  initUrl,
  defaultData,
}: UseDataApiArgs): UseDataApiResponse<TData> {
  const [data, setData] = React.useState<TData>(defaultData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  React.useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get<TData>(initUrl);
        if (mounted) {
          setData(result.data);
        }
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);

      return () => (mounted = false);
    };
    fetchData();
  }, [initUrl]);

  return [{ data, isLoading, isError }];
}
