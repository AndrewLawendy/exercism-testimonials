/** @jsxImportSource theme-ui */
import { useState } from 'react';
import Table from './@exercism-ui-table';
import { Column } from 'react-table';
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { Avatar } from '@exercism-testimonials/@exercism-ui/avatar';

const queryClient = new QueryClient();
const axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  timeout: 20000,
  headers: {
    'app-id': '614858d90e94f85f0e984c7b',
  },
});
axiosInstance.interceptors.response.use((response) => response.data);

interface UsersListParams {
  page: number;
  limit: number;
}

// Generated by https://quicktype.io

export interface UsersListResponse {
  data: Datum[];
  total: number;
}

export interface Datum {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
}

const useUsersList = (params: UsersListParams) => {
  const getUsersList = (params: UsersListParams) => {
    return axiosInstance.get<unknown, UsersListResponse>('user', {
      params,
    });
  };

  return useQuery(['users-list', params], () => getUsersList(params));
};

const columns: Column<Datum>[] = [
  {
    Header: 'Picture',
    accessor: 'picture',
    Cell: ({
      value,
      row: {
        original: { firstName, lastName },
      },
    }) => <Avatar src={value} alt={`${firstName} ${lastName}`} size={42} />,
  },
  {
    Header: 'Full Name',
    accessor: 'firstName',
    Cell: ({
      row: {
        original: { firstName, lastName },
      },
    }) => `${firstName} ${lastName}`,
  },
];

function TableWrapper() {
  const [params, setParams] = useState<UsersListParams>({
    page: 0,
    limit: 10,
  });
  const { data: users, isLoading } = useUsersList(params);

  return (
    <Table
      data={users?.data || []}
      columns={columns}
      isLoading={isLoading}
      hasHeaders={false}
      paginationConfig={{
        totalCount: users?.total || 0,
        onPageChange: (pageIndex) => setParams({ page: pageIndex, limit: 10 }),
      }}
    />
  );
}

export default function TableWrapperApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TableWrapper />
    </QueryClientProvider>
  );
}
