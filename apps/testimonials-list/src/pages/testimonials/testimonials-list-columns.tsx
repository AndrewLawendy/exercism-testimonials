/** @jsxImportSource theme-ui */
import { Column } from 'react-table';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { Avatar } from '@exercism-testimonials/@exercism-ui/avatar';
import { CaretRight } from '@exercism-testimonials/@exercism-ui/icons';

import { Result } from '../../resources/use-testimonials-list/use-testimonials-list';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const TestimonialsListColumns: Column<Result>[] = [
  {
    accessor: 'track',
    Cell: ({ value }) => (
      <img
        sx={{ width: 32, height: 32 }}
        src={value.icon_url}
        alt={value.title}
        title={value.title}
      />
    ),
  },
  {
    accessor: 'mentor',
    Cell: ({ value }) => (
      <Avatar src={value.avatar_url} size={42} alt={value.handle} />
    ),
  },
  {
    accessor: 'exercise',
    Cell: ({
      row: {
        original: {
          mentor: { handle },
          exercise: { title: exerciseTitle },
          track: { title: trackTitle },
        },
      },
    }) => (
      <div>
        <p
          sx={{
            m: 0,
            variant: 'text.p-large',
            fontWeight: 'medium',
            color: 'light-label',
          }}
        >
          {handle}
        </p>
        <p
          sx={{ m: 0, variant: 'text.p-small', color: 'light-label-secondary' }}
        >{`on ${exerciseTitle} in ${trackTitle}`}</p>
      </div>
    ),
  },
  {
    accessor: 'content',
    Cell: ({ value }) => (
      <p
        sx={{
          m: 0,
          variant: 'text.p-medium',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: 513,
        }}
        title={value}
      >
        {value}
      </p>
    ),
  },
  {
    accessor: 'created_at',
    Cell: ({ value }) => (
      <p sx={{ m: 0, color: 'light-label-secondary' }}>
        {timeAgo.format(new Date(value))}
      </p>
    ),
  },
  { id: 'goto', Cell: () => <CaretRight /> },
];

export default TestimonialsListColumns;
