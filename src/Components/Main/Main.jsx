import React from 'react'
import styles from './Main.module.scss'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { lazy } from 'react';

const PageAboutUs = lazy(() => import('./PageAboutUs/PageAboutUs'));
const PageOne = React.lazy(() => import('./PageOne/PageOne'))
const PageTwo = React.lazy(() => import('./PageTwo/PageTwo'))
const PageThree = React.lazy(() => import('./PageThree/PageThree'))
const PageFour = React.lazy(() => import('./PageFour/PageFour'))
const Footer = React.lazy(() => import('../Footer/Footer'))

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <React.Suspense fallback={<div className={styles.Loading}>Loading...</div>}>
      <Routes>
        <Route path="/" element={
          <main style={{ maxWidth: '1400px', margin: '0 auto', position: "relative" }}>
            <React.Suspense >
              <PageOne />
              <PageTwo />
              <PageThree />
              <PageFour />
            </React.Suspense>
          </main>}
        />
        <Route path="/PageAboutUs" element={
          <React.Suspense fallback={<p>Loading</p>}>
            <PageAboutUs />
          </React.Suspense >}
        />
      </Routes>
      <Footer rel="nofollow" />
    </React.Suspense>
  )
}

export default Main