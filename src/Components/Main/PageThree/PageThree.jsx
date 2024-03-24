import React from 'react'
import styles from '../../../utils/css/PageThree.module.css'
// import shapeOne from '../../../img/PageThree/shapeOne.svg'
// import shapeTwo from '../../../img/PageThree/shapeTwo.svg'
import UtilPgThree from '../../../utils/UtilPgThree'
import IphoneInst from '../../../img/PageThree/Project Name (12).png'


function PageThree() {
  return (
    <article className={styles.articleThree}>
      {/* <img src={shapeOne} alt="shape" className={styles.shapeOne} />
      <img src={shapeTwo} alt="shape" className={styles.shapeTwo} /> */}
      <h1 className={styles.HowWeWork}>Как мы работаем</h1>
      <UtilPgThree />
      <footer className={styles.footer}>
        <div className={styles.ex}>
          <h3 className={styles.btnText}>Или свяжитесь напрямую</h3>
          <a href="https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer">
            <button className={styles.BtnInst}>Instagram</button>
          </a>
        </div>
        <img className={styles.IphoneInst} src={IphoneInst} />
      </footer>
    </article>
  )
}

export default PageThree