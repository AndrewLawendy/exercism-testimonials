/** @jsxImportSource theme-ui */
import { FC } from 'react';
import { ButtonProps as ThemeUIButtonProps } from 'theme-ui';

interface ButtonProps extends ThemeUIButtonProps {
  icon?: React.ReactElement;
  iconPosition?: 'start' | 'end';
}

interface ButtonToggleProps extends ThemeUIButtonProps {
  active?: boolean;
}

const ButtonBase: FC<ThemeUIButtonProps> = ({ disabled, ...props }) => {
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

export const Button: FC<ButtonProps> = ({
  disabled,
  icon,
  iconPosition,
  children,
  ...props
}) => {
  const isRevers = icon && iconPosition === 'end';

  return (
    <ButtonBase
      {...props}
      disabled={disabled}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: isRevers ? 'row-reverse' : null,
        boxShadow: disabled ? null : '0px 2px rgba(203, 201, 217, 0.6)',

        '&:active': {
          boxShadow: '0px 1px rgba(203, 201, 217, 0.6)',
        },

        svg: {
          mr: isRevers ? null : 5,
          ml: isRevers ? 5 : null,
          height: 12,
        },
      }}
    >
      {iconPosition && icon}
      <span>{children}</span>
    </ButtonBase>
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
