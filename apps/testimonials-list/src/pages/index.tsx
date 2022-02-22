/** @jsxImportSource theme-ui */

import Header from '../components/header/header';
import Testimonials from './testimonials/testimonials';

export function Main() {
  return (
    <div sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main sx={{ flexGrow: 1, p: 'spacing-l' }}>
        <div sx={{ maxWidth: 1376, mx: 'auto' }}>
          {/* Routes goes here in real life application */}
          <Testimonials />
        </div>
      </main>
    </div>
  );
}

export default Main;
