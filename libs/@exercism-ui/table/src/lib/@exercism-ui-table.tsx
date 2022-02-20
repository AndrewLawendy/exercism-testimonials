/** @jsxImportSource theme-ui */
import { useTable, usePagination, UseTableOptions } from 'react-table';
import { keyframes } from '@emotion/react';

import {
  Button,
  ButtonToggle,
} from '@exercism-testimonials/@exercism-ui/button';
import { Loading } from '@exercism-testimonials/@exercism-ui/icons';
import {
  ArrowLeft,
  ArrowRight,
} from '@exercism-testimonials/@exercism-ui/icons';

export interface TableProps<T extends Record<string, unknown>>
  extends UseTableOptions<T> {
  isLoading?: boolean;
  hasHeaders?: boolean;

  paginationConfig?: {
    initialPageIndex?: number;
    totalCount?: number;
    totalPages?: number;
    onPageChange?: (pageIndex: number) => void;
  };
}

const loadingAnimation = keyframes({ to: { transform: 'rotate(360deg)' } });

export function Table<T extends Record<string, unknown>>({
  isLoading = false,
  hasHeaders = true,
  paginationConfig: {
    initialPageIndex,
    totalCount,
    totalPages,
    onPageChange,
  } = {},
  ...props
}: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex },
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      ...props,
      initialState: { pageIndex: initialPageIndex },
      ...(totalCount && {
        manualPagination: true,
        pageCount: totalPages || Math.ceil(totalCount / 10),
      }),
    },
    usePagination
  );

  return (
    <div
      sx={{
        color: 'light-text',
      }}
    >
      <div sx={{ position: 'relative', minHeight: 640 }}>
        <table
          {...getTableProps()}
          sx={{ width: '100%', borderCollapse: 'collapse' }}
        >
          {hasHeaders && (
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              return (
                <tr
                  {...row.getRowProps()}
                  sx={{
                    transition: 'background-color .3s',

                    '&:hover': {
                      backgroundColor: 'table-hover',
                    },

                    '&:not(last-of-type)': {
                      td: {
                        borderBottom: '1px solid',
                        borderColor: 'stroke-19',
                      },
                    },
                  }}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      sx={{
                        px: 12,
                        height: 64,
                        '&:first-of-type': {
                          pl: 'spacing-m',
                        },
                        '&:last-of-type': {
                          pr: 'spacing-m',
                        },
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {isLoading && (
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(251, 252, 254, 0.95)',
            }}
          >
            <Loading
              sx={{
                animation: `${loadingAnimation} 2.5s steps(12, end) infinite`,
              }}
            />
          </div>
        )}
      </div>

      {/* Pagination */}
      {pageOptions.length > 1 && (
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'stroke-19',
            px: 'spacing-l',
            py: 'spacing-s',
          }}
        >
          <Button
            icon={<ArrowLeft />}
            iconPosition="start"
            disabled={!canPreviousPage}
            onClick={() => {
              previousPage();
              onPageChange?.(pageIndex - 1);
            }}
          >
            Previous
          </Button>
          <div sx={{ display: 'flex', gap: 12 }}>
            {pageOptions.map((pageOption: number) => (
              <ButtonToggle
                active={pageOption === pageIndex}
                key={`pagination-${pageOption}`}
                onClick={() => {
                  gotoPage(pageOption);
                  onPageChange?.(pageOption);
                }}
              >
                {pageOption + 1}
              </ButtonToggle>
            ))}
          </div>
          <Button
            icon={<ArrowRight />}
            iconPosition="end"
            disabled={!canNextPage}
            onClick={() => {
              nextPage();
              onPageChange?.(pageIndex + 1);
            }}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

declare module 'react-table' {
  export interface TableInstance<D>
    extends UseColumnOrderInstanceProps<D>,
      UseExpandedInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D>,
      UseGroupByInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UseRowStateInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D>
    extends UseColumnOrderState<D>,
      UseExpandedState<D>,
      UseFiltersState<D>,
      UseGlobalFiltersState<D>,
      UseGroupByState<D>,
      UsePaginationState<D>,
      UseResizeColumnsState<D>,
      UseRowSelectState<D>,
      UseRowStateState<D>,
      UseSortByState<D> {}
}
