import React from 'react'
import styles from '../../../utils/css/PageOne.module.css'
import shapeOne from '../../../img/PageOne/Vector (16).svg' 
import shapeTwo from '../../../img/PageOne/Vector (13).svg' 

function PageOne() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: 1250, 
      behavior: 'smooth',
    });
  }

  
  return (
    <article>
      <section className={styles.Header}>
        <section className={styles.nurPrint}>
          <h1 className={styles.nurPrintText}>NUR PRINT</h1>
          <p className={styles.nurPrintPodText}>Объемные буквы, Баннеры, Стенды</p>
          <button className={styles.andmore} onClick={handleScrollDown}>Подробнее</button>
        </section>
          <img className={styles.shapeOne} alt="shapeOne" src={shapeOne}/>
          <img className={styles.shapeTwo} alt="shapeTwo" src={shapeTwo}/>
      </section>
    </article>
  )
}

export default PageOne