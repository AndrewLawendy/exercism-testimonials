/** @jsxImportSource theme-ui */
import { FC } from 'react';
import { ButtonProps } from 'theme-ui';

interface ButtonToggleProps extends ButtonProps {
  active?: boolean;
}

const ButtonBase: FC<ButtonProps> = ({ disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      sx={{
        color: 'light-label-secondary',
        backgroundColor: disabled ? 'divider-light' : '#fff',
        py: 'spacing-xs',
        px: 'spacing-s',
        height: 40,
        borderRadius: 5,
        border: '1px solid',
        borderColor: disabled ? 'divider-light' : 'stroke-border-light',
        textDecoration: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        outline: 0,
        userSelect: 'none',
        transition: 'all .2s',
      }}
    />
  );
};

export const Button: FC<ButtonProps> = ({ disabled, ...props }) => {
  return (
    <ButtonBase
      {...props}
      disabled={disabled}
      sx={{
        boxShadow: disabled ? null : '0px 2px rgba(203, 201, 217, 0.6)',

        '&:active': {
          boxShadow: '0px 1px rgba(203, 201, 217, 0.6)',
        },
      }}
    />
  );
};

export const ButtonToggle: FC<ButtonToggleProps> = ({
  active,
  disabled,
  ...props
}) => {
  return (
    <ButtonBase
      disabled={disabled}
      {...props}
      sx={{
        backgroundColor: !disabled && active ? 'light-highlight' : null,
        borderColor: !disabled && active ? 'light-label-tertiary' : null,
      }}
    />
  );
};
