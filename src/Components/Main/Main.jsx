import PageOne from './PageOne/PageOne'
import PageTwo from './PageTwo/PageTwo'
import PageThree from './PageThree/PageThree'
import PageFour from './PageFour/PageFour'
import Footer from '../Footer/Footer'
import SmoothScroll from '../../utils/SmoothScroll'


function Main() {
  return (
    <SmoothScroll>
      <main style={{maxWidth: '1400px', margin: '0 auto'}}>
        <PageOne/>
        <PageTwo />
        <PageThree/>
        <PageFour/>
        <Footer/>
      </main>
    </SmoothScroll>
  )
}

export default Main