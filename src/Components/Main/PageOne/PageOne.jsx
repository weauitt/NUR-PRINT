import styles from '../../../utils/css/PageOne.module.css'
import Header from '../../Header/Header';
import Background from '../../../img/PageOne/Wave SVG.png'
import { Link } from 'react-scroll';

function PageOne() {
  
  return (
    <>
      <Header />
      <article style={{ overflow: 'hidden', position: 'relative' }}>
        <img className={styles.Background} alt="shapeTwo" src={Background} />
        <section className={styles.Header}>
          <section className={styles.nurPrint}>
            <h1 translate="no" className={styles.nurPrintText}>NUR PRINT</h1>
            <p className={styles.nurPrintPodText}>Объемные буквы, Баннеры, Стенды</p>
            <Link className={styles.andmore}  activeClass="active" to="WhatWeDo" spy={true} smooth={true} offset={50} duration={500}>Подробнее</Link>
          </section>
        </section>
      </article>
    </>
  )
}

export default PageOne