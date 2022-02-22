/** @jsxImportSource theme-ui */
import ReactSelect, { Props, StylesConfig } from 'react-select';
import { useTheme } from '@exercism-testimonials/@exercism-ui/theme';

export function Select(props: Props) {
  const { theme } = useTheme();

  const styles: StylesConfig = {
    control: (provided, { isFocused }) => ({
      ...provided,
      borderRadius: 5,
      height: 48,
      backgroundColor: isFocused ? '#fff' : theme.colors['dark-text-label'],
      border: 'none',
      boxShadow: isFocused
        ? `inset 0px 0px 0px 1px ${theme.colors['stroke-light-blue']}, 0px 0px 2px 2px ${theme.colors['active-input-glow']}`
        : undefined,
      transition: 'all .2s',

      svg: {
        transform: isFocused ? 'rotate(-180deg)' : undefined,
        transition: 'transform .2s',
      },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    placeholder: (provided) => ({
      ...provided,
      color: theme.colors['light-label-secondary'],
      ...theme.text['p-large'],
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 22,
      paddingRight: 22,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      svg: {
        fill: theme.colors['light-label-secondary'],
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme.colors['light-label-secondary'],
    }),
    input: (provided) => ({
      ...provided,
      color: theme.colors['light-label-secondary'],
    }),

    menu: (provided) => ({
      ...provided,
      boxShadow: theme.shadows.large,
      borderRadius: 8,
      padding: theme.space['spacing-xs'],
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      cursor: 'pointer',
      padding: `${theme.space['spacing-xs']} ${theme.space['spacing-m']}`,
      margin: `${theme.space['spacing-xxs']} 0`,
      color: theme.colors['light-label-secondary'],
      backgroundColor: isSelected ? theme.colors['dark-text-label'] : '#fff',
      transition: 'background-color .2s',

      '&:hover': {
        backgroundColor: theme.colors['dark-text-label'],
      },
    }),
  };

  return <ReactSelect {...props} styles={styles} />;
}

export { Props as SelectProps } from 'react-select';
