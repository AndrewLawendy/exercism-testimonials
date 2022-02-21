/** @jsxImportSource theme-ui */
import { FC } from 'react';

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  children,
  className,
  ...props
}) => {
  return (
    <label
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <input
        type="radio"
        name={name}
        {...props}
        sx={{
          display: 'none',
          '&:checked': {
            '& + div': {
              '&::after': {
                transform: 'scale(.48)',
              },
            },
          },
        }}
      />
      <div
        sx={{
          position: 'relative',
          backgroundColor: '#fff',
          flexShrink: 0,
          width: 21,
          height: 21,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: 'light-text',
          mr: 26,

          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'light-text',
            borderRadius: '50%',
            transform: 'scale(0)',
            transition: 'transform .15s',
          },
        }}
      />
      <div sx={{ flexGrow: 1, color: 'light-label' }}>{children}</div>
    </label>
  );
};
