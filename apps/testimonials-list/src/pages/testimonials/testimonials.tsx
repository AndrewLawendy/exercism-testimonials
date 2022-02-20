/** @jsxImportSource theme-ui */
import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import {
  Polygon,
  Happy,
  Zigzag,
  Search,
  LogoPolygon,
} from '@exercism-testimonials/@exercism-ui/icons';
import { Table } from '@exercism-testimonials/@exercism-ui/table';
import { Input } from '@exercism-testimonials/@exercism-ui/input';
import { Menu, MenuItem } from '@exercism-testimonials/@exercism-ui/menu';

import NoData from '../../components/no-data/no-data';

import useFilters from '../../hooks/use-filters/use-filters';
import useTestimonialsList from '../../resources/use-testimonials-list/use-testimonials-list';
import useTracksList, {
  Track,
} from '../../resources/use-tracks-list/use-tracks-list';

import { TestimonialsListParams } from '../../resources/use-testimonials-list/use-testimonials-list';
import TestimonialsListColumns from './testimonials-list-columns';

export function Testimonials() {
  const [selectedTrack, setSelectedTrack] = useState<Track>();
  const [filters, updateFilters] = useFilters<TestimonialsListParams>({
    page: 1,
  });
  const {
    data: testimonials,
    isFetching,
    isPreviousData,
    isLoading,
  } = useTestimonialsList(filters);
  const { data: tracks } = useTracksList();
  const debouncedChangeHandler = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
          updateFilters({ exercise: e.target.value, page: 1 });
        } else {
          updateFilters({ exercise: undefined, page: 1 });
        }
      }, 300),
    []
  );
  const allTrackTestimonials = useMemo(() => {
    return Object.values(testimonials?.track_counts ?? {}).reduce(
      (count, trackCount) => (count += trackCount),
      0
    );
  }, [testimonials?.track_counts]);

  useEffect(() => {
    return () => debouncedChangeHandler.cancel();
  }, []);

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
        <div sx={{ display: 'flex', alignItems: 'center', px: 26, py: 18 }}>
          <div sx={{ mr: 'spacing-m' }}>
            <Menu
              menuButton={
                selectedTrack ? (
                  <img
                    src={selectedTrack.icon_url}
                    alt={selectedTrack.title}
                    sx={{ height: 42 }}
                  />
                ) : (
                  <LogoPolygon sx={{ height: 42, mr: 'spacing-s' }} />
                )
              }
            >
              <MenuItem
                key="all"
                onClick={() => {
                  updateFilters({ track: undefined, page: 1 });
                  setSelectedTrack(undefined);
                }}
              >
                <div
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div sx={{ display: 'flex', alignItems: 'center' }}>
                    <LogoPolygon sx={{ height: 40, mr: 'spacing-s' }} />
                    <p
                      sx={{
                        m: 0,
                        variant: 'text.p-large',
                        fontWeight: 'medium',
                      }}
                    >
                      All
                    </p>
                  </div>
                  <p
                    sx={{
                      m: 0,
                      py: 4,
                      px: 12,
                      borderRadius: 100,
                      ml: 'spacing-s',
                      border: '1px solid',
                      borderColor: 'border-light',
                    }}
                  >
                    {allTrackTestimonials}
                  </p>
                </div>
              </MenuItem>
              {tracks?.map((track) => (
                <MenuItem
                  key={track.slug}
                  value={track}
                  onClick={() => {
                    updateFilters({ track: track.slug, page: 1 });
                    setSelectedTrack(track);
                  }}
                >
                  <div
                    title={track.title}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: 1,
                      }}
                    >
                      <img
                        src={track.icon_url}
                        alt={track.slug}
                        sx={{ width: 40, height: 40 }}
                      />
                      <p
                        sx={{
                          my: 0,
                          mx: 'spacing-s',
                          variant: 'text.p-large',
                          fontWeight: 'medium',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {track.title}
                      </p>
                    </div>

                    <p
                      sx={{
                        m: 0,
                        py: 4,
                        px: 12,
                        borderRadius: 100,
                        border: '1px solid',
                        borderColor: 'border-light',
                        variant: 'text.p-small',
                      }}
                    >
                      {testimonials?.track_counts[track.slug] ?? 0}
                    </p>
                  </div>
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div sx={{ width: 416 }}>
            <Input
              role="searchbox"
              placeholder="Filter by exercise title"
              defaultValue={filters.exercise}
              preDecorator={<Search />}
              onChange={debouncedChangeHandler}
            />
          </div>
        </div>

        <Table
          data={testimonials?.results || []}
          columns={TestimonialsListColumns}
          isLoading={isLoading || (isFetching && isPreviousData)}
          hasHeaders={false}
          noData={
            <NoData message="No testimonials with the current filters " />
          }
          paginationConfig={{
            pageIndex: filters.page - 1,
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
