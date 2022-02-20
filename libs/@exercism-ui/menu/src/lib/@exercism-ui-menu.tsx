/** @jsxImportSource theme-ui */
import {
  Menu as ReactMenu,
  MenuItem as ReactMenuItem,
  MenuItemProps,
  applyHOC,
  MenuProps,
} from '@szhsin/react-menu';
import { CaretDown } from '@exercism-testimonials/@exercism-ui/icons';

export function Menu({ menuButton, ...props }: MenuProps) {
  return (
    <ReactMenu
      menuButton={() => (
        <div sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          {menuButton}
          <CaretDown
            sx={{
              width: 12,
              height: 6,
              ml: 14,
            }}
          />
        </div>
      )}
      {...props}
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

          '&.szh-menu__item--disabled': {
            cursor: 'not-allowed',
          },

          '&.szh-menu__item--hover': {
            backgroundColor: 'dark-text-label',
          },
        }}
      />
    );

export const MenuItem = applyHOC(MenuItemStyled)(ReactMenuItem);
