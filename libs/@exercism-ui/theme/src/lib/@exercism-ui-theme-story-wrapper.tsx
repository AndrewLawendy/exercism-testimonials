/** @jsxImportSource theme-ui */
import theme from './@exercism-ui-theme';

export const ColorsWrapper = () => {
  return (
    <div sx={{ maxWidth: '450px' }}>
      {Object.entries(theme.colors).map(([colorName, value]) => (
        <div
          key={value}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderLeft: `100px solid ${value}`,
            py: '16px',
            px: '8px',
            my: '16px',
            transition: 'background-color .2s',

            ':hover': {
              backgroundColor: '#E5E5E5',
            },
          }}
        >
          <span>{colorName}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export const SpaceWrapper = () => {
  return (
    <div sx={{ maxWidth: '450px' }}>
      {Object.entries(theme.space).map(([space, value]) => (
        <div
          key={value}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            py: '16px',
            px: '8px',
            my: '16px',
            transition: 'background-color .2s',

            ':hover': {
              backgroundColor: '#E5E5E5',
            },
          }}
        >
          <span>{space}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export const ShadowWrapper = () => {
  return (
    <div sx={{ maxWidth: '450px' }}>
      {Object.entries(theme.shadows).map(([shadow, value]) => (
        <div
          key={value}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            py: '16px',
            px: '8px',
            my: '16px',
            boxShadow: value,
            transition: 'background-color .2s',

            ':hover': {
              backgroundColor: '#E5E5E5',
            },
          }}
        >
          <span>{shadow}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
