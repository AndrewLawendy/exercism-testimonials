/** @jsxImportSource theme-ui */
import {
  Menu as ReactMenu,
  MenuItem as ReactMenuItem,
  MenuItemProps,
  applyHOC,
  MenuProps,
} from '@szhsin/react-menu';
import { CaretDown } from '@exercism-testimonials/@exercism-ui/icons';

import '@szhsin/react-menu/dist/index.css';

export function Menu({ menuButton, ...props }: MenuProps) {
  return (
    <ReactMenu
      {...props}
      overflow="auto"
      position="anchor"
      menuButton={({ open }) => (
        <div sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          {menuButton}
          <CaretDown
            sx={{
              width: 12,
              height: 6,
              ml: 14,
              transition: 'transform .2s',
              transform: open ? 'rotate(-180deg)' : null,

              path: {
                strokeWidth: 3,
              },
            }}
          />
        </div>
      )}
      sx={{
        '.szh-menu': {
          m: 0,
          mt: 'spacing-s',
          p: 'spacing-xs',
          borderRadius: 8,
          backgroundColor: '#fff',
          listStyleType: 'none',
          width: 'max-content',
          boxShadow: 'large',

          '&.szh-menu--state-closed': {
            display: 'none',
          },
        },
      }}
    />
  );
}

const MenuItemStyled =
  (MenuItemWrapped: React.NamedExoticComponent<MenuItemProps>) =>
  (props: MenuItemProps) =>
    (
      <MenuItemWrapped
        {...props}
        sx={{
          backgroundColor: '#fff',
          transition: 'background-color .2s',
          cursor: 'pointer',
          py: 'spacing-xs',
          px: 'spacing-m',
          outline: 0,

          '&.szh-menu__item--disabled': {
            cursor: 'not-allowed',
          },

          '&.szh-menu__item--hover': {
            backgroundColor: 'dark-text-label',
          },

          '&.szh-menu__item--active': {
            color: 'inherit',
          },
        }}
      />
    );

export const MenuItem = applyHOC(MenuItemStyled)(ReactMenuItem);
