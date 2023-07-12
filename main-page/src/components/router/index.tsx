import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../templates/Home'));
const About = React.lazy(() => import('../templates/About'));
const GlobalStyle = React.lazy(() => import('../global/styles/GlobalStyle'));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <GlobalStyle/>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default AppRoutes;
