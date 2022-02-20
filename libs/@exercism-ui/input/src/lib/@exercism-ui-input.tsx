/** @jsxImportSource theme-ui */
import { forwardRef, useState } from 'react';
import { useTheme } from '@exercism-testimonials/@exercism-ui/theme';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  preDecorator?: React.ReactElement | string;
  postDecorator?: React.ReactElement | string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ preDecorator, postDecorator, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const { theme } = useTheme();

    return (
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 48,
          backgroundColor: focused ? '#fff' : 'dark-text-label',
          boxShadow: focused
            ? `inset 0px 0px 0px 1px ${theme.colors['stroke-light-blue']}, 0px 0px 2px 2px ${theme.colors['active-input-glow']}`
            : null,
          borderRadius: 5,
          px: 22,
          transition: 'all .2s',
        }}
      >
        {preDecorator && <div sx={{ mr: 'spacing-s' }}>{preDecorator}</div>}

        <input
          ref={ref}
          {...props}
          sx={{
            flexGrow: 1,
            height: '100%',
            minWidth: 0,
            backgroundColor: 'transparent',
            borderRadius: 'inherit',
            border: 0,
            outline: 0,

            '::placeholder': {
              color: 'light-label-secondary',
            },
          }}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
        />

        {postDecorator && <div sx={{ ml: 'spacing-s' }}>{postDecorator}</div>}
      </div>
    );
  }
);
