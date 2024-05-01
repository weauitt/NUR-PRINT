import PageOne from './PageOne/PageOne'
import PageTwo from './PageTwo/PageTwo'
import PageThree from './PageThree/PageThree'
import PageFour from './PageFour/PageFour'
import Footer from '../Footer/Footer'
import SmoothScroll from '../../utils/SmoothScroll'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PageAboutUs from './PageAboutUs/PageAboutUs'



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
          <PageAboutUs />}
        />
      </Routes>
      <Footer />
    </SmoothScroll>
  )
}

export default Main