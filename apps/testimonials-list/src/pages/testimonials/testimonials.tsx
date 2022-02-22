/** @jsxImportSource theme-ui */
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { TableRowProps } from 'react-table';
import {
  Polygon,
  Happy,
  Zigzag,
  Search,
  LogoPolygon,
  Close,
} from '@exercism-testimonials/@exercism-ui/icons';
import { Table } from '@exercism-testimonials/@exercism-ui/table';
import { Input } from '@exercism-testimonials/@exercism-ui/input';
import { Menu, MenuItem } from '@exercism-testimonials/@exercism-ui/menu';
import { RadioButton } from '@exercism-testimonials/@exercism-ui/radio-button';
import { Select } from '@exercism-testimonials/@exercism-ui/select';

import NoData from '../../components/no-data/no-data';

import useFilters from '../../hooks/use-filters/use-filters';
import useTestimonialsList, {
  Result,
} from '../../resources/use-testimonials-list/use-testimonials-list';
import useTracksList, {
  Track,
} from '../../resources/use-tracks-list/use-tracks-list';

import { TestimonialsListParams } from '../../resources/use-testimonials-list/use-testimonials-list';
import TestimonialsListColumns from './testimonials-list-columns';

import { SortOption } from './types';

const sortOptions: SortOption[] = [
  {
    label: 'Sort by recent first',
    value: 'newest_first',
  },
  {
    label: 'Sort by oldest first',
    value: 'oldest_first',
  },
];

export function Testimonials() {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState<Track>();
  const { filters, updateFilters, filtersString } =
    useFilters<TestimonialsListParams>({
      page: 1,
    });
  const [exerciseInput, setExerciseInput] = useState(filters.exercise);
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
    [updateFilters]
  );
  const allTrackTestimonials = useMemo(() => {
    return Object.values(testimonials?.track_counts ?? {}).reduce(
      (count, trackCount) => (count += trackCount),
      0
    );
  }, [testimonials?.track_counts]);

  const passRowProps = (props: TableRowProps, { id }: Result) => {
    return {
      ...props,
      onClick: (e: MouseEvent) => {
        e.preventDefault();
        navigate(`testimonial/${id}?${filtersString}`);
      },
    };
  };

  useEffect(() => {
    return () => debouncedChangeHandler.cancel();
  }, []);

  useEffect(() => {
    if (filters.track && tracks) {
      setSelectedTrack(tracks.find(({ slug }) => filters.track === slug));
    }
  }, [tracks]);

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

          table: {
            tr: {
              cursor: 'pointer',
            },
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
                active={filters.track === undefined}
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
                    width: '100%',
                  }}
                >
                  <RadioButton
                    name="tracks"
                    defaultChecked={filters.track === undefined}
                    sx={{ width: '100%' }}
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
                  </RadioButton>
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
                  active={filters.track === track.slug}
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
                      width: '100%',
                    }}
                  >
                    <RadioButton
                      name="tracks"
                      defaultChecked={filters.track === track.slug}
                      sx={{ width: '100%' }}
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
                    </RadioButton>

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
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}
          >
            <div sx={{ width: 416 }}>
              <Input
                role="searchbox"
                placeholder="Filter by exercise title"
                value={exerciseInput}
                preDecorator={<Search />}
                postDecorator={
                  filters.exercise && (
                    <Close
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        updateFilters({ exercise: undefined, page: 1 });
                        setExerciseInput('');
                      }}
                    />
                  )
                }
                onChange={(e) => {
                  debouncedChangeHandler(e);
                  setExerciseInput(e.target.value);
                }}
              />
            </div>
            <Select
              sx={{ width: 348 }}
              placeholder="Sort testimonials"
              value={sortOptions.find(({ value }) => value === filters.order)}
              onChange={(option) =>
                updateFilters({
                  order: (option as SortOption).value,
                })
              }
              options={sortOptions}
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
          passRowProps={passRowProps}
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
