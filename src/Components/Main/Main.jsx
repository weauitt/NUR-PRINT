import React from 'react'
import PageOne from './PageOne/PageOne'
import PageTwo from './PageTwo/PageTwo'
import PageThree from './PageThree/PageThree'
import PageFour from './PageFour/PageFour'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <main>
      <PageOne/>
      <PageTwo />
      <PageThree/>
      <PageFour/>
      <Footer/>
    </main>
  )
}

export default Main