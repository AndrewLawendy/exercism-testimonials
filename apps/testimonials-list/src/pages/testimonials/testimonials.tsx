/** @jsxImportSource theme-ui */
import {
  Polygon,
  Happy,
  Zigzag,
} from '@exercism-testimonials/@exercism-ui/icons';
import { Table } from '@exercism-testimonials/@exercism-ui/table';

import useFilters from '../../hooks/use-filters/use-filters';
import useTestimonialsList from '../../resources/use-testimonials-list/use-testimonials-list';

import { TestimonialsListParams } from '../../resources/use-testimonials-list/use-testimonials-list';
import TestimonialsListColumns from './testimonials-list-columns';

export function Testimonials() {
  const [filters, updateFilters] = useFilters<TestimonialsListParams>({
    page: 1,
  });
  const { data: testimonials, isLoading: isTestimonialsLoading } =
    useTestimonialsList(filters);

  return (
    <>
      <div
        sx={{
          mt: 10,
          mb: 'spacing-l',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div sx={{ position: 'relative' }}>
          <Polygon sx={{ width: 56, height: 61 }} />
          <Happy
            sx={{
              position: 'absolute',
              top: 18,
              left: 15,
              width: 27,
              height: 27,

              path: {
                stroke: 'light-label',
              },
            }}
          />
        </div>
        <div sx={{ display: 'flex', alignItems: 'center', mt: 10, mb: 12 }}>
          <h2 sx={{ m: 0, variant: 'text.h2' }}>Testimonials I’ve left</h2>
          <div
            sx={{
              borderRadius: 100,
              py: 4,
              px: 12,
              ml: 'spacing-s',
              border: '1px solid',
              borderColor: 'border-light',
            }}
          >
            47
          </div>
        </div>
        <Zigzag />
      </div>
      <div
        sx={{
          borderRadius: 8,
          boxShadow: 'large',
          overflow: 'hidden',

          table: {
            td: {
              '&:nth-of-type(3)': {
                width: 398,
              },
              '&:nth-of-type(4)': {
                width: 657,
              },
            },
          },
        }}
      >
        <Table
          data={testimonials?.results || []}
          columns={TestimonialsListColumns}
          isLoading={isTestimonialsLoading}
          hasHeaders={false}
          paginationConfig={{
            initialPageIndex: filters.page - 1,
            totalCount: testimonials?.pagination.total_count || 0,
            totalPages: testimonials?.pagination.total_pages,
            onPageChange: (pageIndex) => updateFilters({ page: pageIndex + 1 }),
          }}
        />
      </div>
    </>
  );
}

export default Testimonials;
