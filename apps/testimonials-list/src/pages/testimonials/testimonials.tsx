/** @jsxImportSource theme-ui */
import {
  Polygon,
  Happy,
  Zigzag,
} from '@exercism-testimonials/@exercism-ui/icons';

export function Testimonials() {
  return (
    <>
      <div
        sx={{
          mt: 10,
          mb: 'spacing-l',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div sx={{ position: 'relative' }}>
          <Polygon sx={{ width: 56, height: 61 }} />
          <Happy
            sx={{
              position: 'absolute',
              top: 18,
              left: 15,
              width: 27,
              height: 27,

              path: {
                stroke: 'light-label',
              },
            }}
          />
        </div>
        <div sx={{ display: 'flex', mt: 10, mb: 12 }}>
          <h2 sx={{ m: 0, variant: 'text.h2' }}>Testimonials I’ve left</h2>
          <div
            sx={{
              borderRadius: 100,
              py: 4,
              px: 12,
              ml: 'spacing-s',
              border: '1px solid',
              borderColor: 'border-light',
            }}
          >
            47
          </div>
        </div>
        <Zigzag />
      </div>
      <div></div>
    </>
  );
}

export default Testimonials;
