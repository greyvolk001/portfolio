import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
