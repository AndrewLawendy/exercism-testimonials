/** @jsxImportSource theme-ui */
import { forwardRef, useState } from 'react';
import { useTheme } from '@exercism-testimonials/@exercism-ui/theme';

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ onFocus, onBlur, ...props }, ref) => {
  const [focused, setFocused] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      sx={{
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
      <input
        ref={ref}
        {...props}
        sx={{
          width: '100%',
          height: '100%',
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
    </div>
  );
});

export default Input;
