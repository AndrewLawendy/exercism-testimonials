/** @jsxImportSource theme-ui */
import {
  Logo,
  LogoText,
  Track,
  CarSpeed,
  Railroad,
  ConversationChat,
  ToysLego,
  HappyFilled,
  PolygonFilled,
  AlarmBell,
  Badge,
  NavigationVertical,
} from '@exercism-testimonials/@exercism-ui/icons';
import { Avatar } from '@exercism-testimonials/@exercism-ui/avatar';
import { IconButton } from '@exercism-testimonials/@exercism-ui/button';

export function Header() {
  return (
    <header
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        height: 64,
        borderBottom: '1px solid',
        borderColor: 'border',
        px: 'spacing-l',
      }}
    >
      <nav>
        <ul
          sx={{
            display: 'flex',
            height: '100%',
            gap: 'spacing-l',

            a: {
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              textDecoration: 'none',
              variant: 'text.p-large',
              fontWeight: 'medium-bold',
              color: 'light-label-secondary',
              transition: 'color .2s',

              '&:hover': {
                color: 'light-label',
              },
            },
          }}
        >
          <li>
            <a href="#home" title="Logo">
              <Logo sx={{ mr: 'spacing-xs' }} />
              <LogoText />
            </a>
          </li>

          <li>
            <a
              href="#dashboard"
              title="Dashboard"
              sx={{
                '&[title]': {
                  color: 'light-label',
                },
              }}
            >
              <span sx={{ position: 'relative', display: 'flex' }}>
                <Track sx={{ width: 59, height: 52 }} />
                <CarSpeed
                  sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate3d(-50%, -50%, 0)',
                    width: 22,
                    height: 22,
                  }}
                />
              </span>
              <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#tracks" title="Tracks">
              <Railroad sx={{ mr: 'spacing-xs' }} />
              <span>Tracks</span>
            </a>
          </li>

          <li>
            <a href="#mentoring" title="Mentoring">
              <ConversationChat sx={{ mr: 'spacing-xs' }} />
              <span>Mentoring</span>
            </a>
          </li>

          <li>
            <a href="#contribute" title="Contribute">
              <ToysLego sx={{ mr: 'spacing-xs' }} />
              <span>Contribute</span>
            </a>
          </li>
        </ul>
      </nav>

      <ul
        sx={{
          display: 'flex',

          li: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            px: 20,

            '&:first-of-type': {
              pl: 0,
            },

            '&:last-of-type': {
              pr: 0,
            },

            '.has-notification': {
              position: 'relative',
              '&::after': {
                content: '""',
                width: 8,
                height: 8,
                borderRadius: '50%',
                border: '2px solid #fff',
                position: 'absolute',
                top: -2,
                right: -4,
                backgroundColor: 'alert-light',
                boxSizing: 'content-box',
              },

              '&.large': {
                '&::after': {
                  width: 15,
                  height: 15,
                  borderWidth: 3,
                  top: -10,
                  right: -10,
                },
              },
            },
          },
        }}
      >
        <li>
          <span className="has-notification">
            <HappyFilled />
          </span>
        </li>

        <li>
          <span className="has-notification">
            <PolygonFilled />
          </span>
        </li>

        <li>
          <IconButton
            sx={{
              position: 'relative',
              boxShadow: 'notification',
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #FFF4E3;',
            }}
          >
            <AlarmBell />
            <span
              sx={{
                color: '#fff',
                width: 24,
                height: 24,
                borderRadius: '50%',
                position: 'absolute',
                top: -8,
                right: -12,
                backgroundColor: 'alert-light',
                textAlign: 'center',
                fontWeight: 'medium-bold',
                fontSize: '0.8125rem',
                lineHeight: '24px',
              }}
            >
              2
            </span>
          </IconButton>
        </li>

        <li>
          <div
            sx={{
              height: 37,
              p: 3,
              borderRadius: 100,
              background: 'linear-gradient(#9e00ff,#2200ff)',
            }}
          >
            <div
              className="has-notification large"
              sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 97,
                height: 31,
                px: 12,
                backgroundColor: 'light-label',
                borderRadius: 'inherit',
                color: '#fff',
                fontWeight: 'medium-bold',
                lineHeight: '31px',
              }}
            >
              <Badge sx={{ mr: 'spacing-xs' }} />
              300K
            </div>
          </div>
        </li>

        <li>
          <Avatar src="https://i.pravatar.cc/42" alt="User" size={42} />
        </li>

        <li sx={{ '&[class]': { px: 0 } }}>
          <NavigationVertical />
        </li>
      </ul>
    </header>
  );
}

export default Header;
