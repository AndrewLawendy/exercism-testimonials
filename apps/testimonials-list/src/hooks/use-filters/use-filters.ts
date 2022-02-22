import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

function useFilters<T>(
  initialValue: Partial<T>
): [T, (newFilters: Partial<T>) => void, string] {
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
  const [filtersString, setFiltersString] = useState<string>(() =>
    queryString.stringify(mergedFilters as T, {
      arrayFormat: 'bracket',
    })
  );

  function updateFilters(newFilters: Partial<T>) {
    const allFilters: T = {
      ...filters,
      ...newFilters,
    };

    const allFiltersString = queryString.stringify(allFilters, {
      arrayFormat: 'bracket',
    });
    setFiltersString(allFiltersString);
    navigate({ search: allFiltersString });

    setFilters(allFilters);
  }

  return [filters, updateFilters, filtersString];
}

export default useFilters;
