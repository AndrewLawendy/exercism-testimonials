/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { useTable, usePagination, UseTableOptions } from 'react-table';
import { keyframes } from '@emotion/react';
import ReactPaginate from 'react-paginate';

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
    pageIndex?: number;
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
    totalCount = 0,
    pageIndex,
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
    state: { pageIndex: statePageIndex },
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      ...props,
      initialState: { pageIndex: pageIndex ?? 0 },
      manualPagination: true,
      pageCount: totalPages || Math.ceil(totalCount / 10),
    },
    usePagination
  );

  useEffect(() => {
    if (pageIndex != undefined && pageIndex !== statePageIndex) {
      gotoPage(pageIndex);
    }
  }, [pageIndex]);

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

      {pageOptions.length > 1 && (
        <ReactPaginate
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            borderTop: '1px solid',
            borderColor: 'stroke-19',
            m: 0,
            px: 'spacing-l',
            py: 'spacing-s',

            li: {
              listStyleType: 'none',
            },

            '.previous': {
              flexGrow: 1,
            },

            '.next': {
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            },
          }}
          pageCount={pageOptions.length}
          initialPage={statePageIndex}
          pageRangeDisplayed={pageOptions.length > 10 ? 3 : 10}
          previousLabel={
            <Button
              icon={<ArrowLeft />}
              iconPosition="start"
              disabled={!canPreviousPage}
              onClick={() => {
                previousPage();
                onPageChange?.(statePageIndex - 1);
              }}
            >
              Previous
            </Button>
          }
          nextLabel={
            <Button
              icon={<ArrowRight />}
              iconPosition="end"
              disabled={!canNextPage}
              onClick={() => {
                nextPage();
                onPageChange?.(statePageIndex + 1);
              }}
            >
              Next
            </Button>
          }
          pageLabelBuilder={(page) => (
            <ButtonToggle
              active={page - 1 === statePageIndex}
              key={`pagination-${page}`}
              onClick={() => {
                gotoPage(page - 1);
                onPageChange?.(page - 1);
              }}
            >
              {page}
            </ButtonToggle>
          )}
        />
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

  export interface TableOptions<D>
    extends UsePaginationOptions<D>,
      UseSortByOptions<D> {}
}
