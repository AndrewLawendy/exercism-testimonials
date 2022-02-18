/** @jsxImportSource theme-ui */
import { useTable, usePagination, UseTableOptions } from 'react-table';
import { keyframes } from '@emotion/react';

export interface TableProps<T extends Record<string, unknown>>
  extends UseTableOptions<T> {
  isLoading?: boolean;
  hasHeaders?: boolean;

  paginationConfig?: {
    totalCount?: number;
    onPageChange?: (pageIndex: number) => void;
  };
}

const loadingAnimation = keyframes({ to: { transform: 'rotate(360deg)' } });

function Table<T extends Record<string, unknown>>({
  isLoading = false,
  hasHeaders = true,
  paginationConfig: { totalCount, onPageChange } = {},
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
      ...(totalCount && {
        manualPagination: true,
        pageCount: Math.ceil(totalCount / 10),
      }),
    },
    usePagination
  );

  return (
    <div
      sx={{
        borderRadius: 8,
        boxShadow: 'large',
        overflow: 'hidden',
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
            <svg
              width="56"
              height="64"
              viewBox="0 0 56 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                animation: `${loadingAnimation} 2.5s steps(12, end) infinite`,
              }}
            >
              <path
                d="M11.504 11.3413L16.208 17.8133"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.33337 25.3413L8.94137 27.8133"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.33337 42.6453L8.94137 40.1733"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.504 56.6453L16.208 50.1733"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.9626 61.992V53.992"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44.4214 56.6453L39.7174 50.1733"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.592 42.6453L46.984 40.1733"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.592 25.3413L46.984 27.8133"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44.4214 11.3413L39.7174 17.8133"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.9626 1.992V17.992"
                stroke="#5C5589"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Pagination */}
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
        <button
          disabled={!canPreviousPage}
          onClick={() => {
            previousPage();
            onPageChange?.(pageIndex - 1);
          }}
        >
          Previous
        </button>
        <div sx={{ display: 'flex' }}>
          {pageOptions.map((pageIndex: number) => (
            <button
              key={`pagination-${pageIndex}`}
              onClick={() => {
                gotoPage(pageIndex);
                onPageChange?.(pageIndex);
              }}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
        <button
          disabled={!canNextPage}
          onClick={() => {
            nextPage();
            onPageChange?.(pageIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;
