import React from 'react'
import PageOne from './PageOne/PageOne'
import Footer from '../Footer/Footer'
import SmoothScroll from '../../utils/SmoothScroll'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { lazy } from 'react';

const PageAboutUs = lazy(() => import('./PageAboutUs/PageAboutUs'));
const PageTwo = React.lazy(() =>
  import('./PageTwo/PageTwo')
)
const PageThree = React.lazy(() =>
  import('./PageThree/PageThree')
)
const PageFour = React.lazy(() =>
  import('./PageFour/PageFour')
)

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <SmoothScroll>

      <Routes>
        <Route path="/" element={
          <main style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <PageOne />
            <PageTwo />
              <PageThree />
              <PageFour />
          </main>}
        />
        <Route path="/PageAboutUs" element={
          <React.Suspense fallback={<p>Loading</p>}>
            <PageAboutUs />
          </React.Suspense >}
        />
      </Routes>
      <Footer rel="nofollow" />
    </SmoothScroll>
  )
}

export default Main