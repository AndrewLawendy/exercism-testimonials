import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

function useFilters<T>(
  initialValue: Partial<T>
): [T, (newFilters: Partial<T>) => void] {
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParams = queryString.parse(search, {
    arrayFormat: 'bracket',
    parseBooleans: true,
    parseNumbers: true,
  });
  const mergedFilters: unknown = {
    ...initialValue,
    ...searchParams,
  };

  const [filters, setFilters] = useState<T>(mergedFilters as T);

  function updateFilters(newFilters: Partial<T>) {
    const allFilters: T = {
      ...filters,
      ...newFilters,
    };

    const allFiltersString = queryString.stringify(allFilters, {
      arrayFormat: 'bracket',
    });
    navigate({ search: allFiltersString });

    setFilters(allFilters);
  }

  return [filters, updateFilters];
}

export default useFilters;
