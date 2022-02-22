/** @jsxImportSource theme-ui */
import { theme } from './@exercism-ui-theme';

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
            py: 'spacing-s',
            px: 'spacing-xs',
            my: 'spacing-s',
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
            py: 'spacing-s',
            px: 'spacing-xs',
            my: 'spacing-s',
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
            py: 'spacing-s',
            px: 'spacing-xs',
            my: 'spacing-s',
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

export const FontWeightWrapper = () => {
  return (
    <div sx={{ maxWidth: '450px' }}>
      {Object.entries(theme.fontWeights).map(([shadow, value]) => (
        <div
          key={value}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            py: 'spacing-s',
            px: 'spacing-xs',
            my: 'spacing-s',
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

export const TypographyWrapper = () => {
  return (
    <div sx={{ maxWidth: '450px' }}>
      <h2 sx={{ variant: 'text.h2' }}>Variants</h2>
      {Object.entries(theme.text).map(([variant, value]) => (
        <div
          key={variant}
          sx={{
            py: 'spacing-s',
            px: 'spacing-xs',
            my: 'spacing-s',
            transition: 'background-color .2s',
            borderBottom: '1px solid',
            borderColor: 'border',

            ':hover': {
              backgroundColor: '#E5E5E5',
            },
          }}
        >
          <p sx={{ ...value }}>Lorem</p>
          <p>
            Variant "<span>{variant}</span>"
          </p>
          <p>
            Font Size "<span>{value.fontSize}</span>"
          </p>
          <p>
            Line Height "<span>{value.lineHeight}</span>"
          </p>
        </div>
      ))}
    </div>
  );
};
