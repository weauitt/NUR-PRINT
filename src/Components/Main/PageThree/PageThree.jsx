import React from 'react'
import styles from '../../../utils/css/PageThree.module.css'
import NumOne from '../../../img/PageThree/NumOne.svg'
import NumTwo from '../../../img/PageThree/NumTwo.svg'
import NumThree from '../../../img/PageThree/NumThree.svg'
import NumFour from '../../../img/PageThree/NumFour.svg'
import NumFive from '../../../img/PageThree/NumFive.svg'
import shapeOne from '../../../img/PageThree/shapeOne.svg'
import shapeTwo from '../../../img/PageThree/shapeTwo.svg'


function PageThree() {
  return (
    <article className={styles.articleThree}>
      <img src={shapeOne} alt="shape" className={styles.shapeOne} />
      <img src={shapeTwo} alt="shape" className={styles.shapeTwo} />
      <h1 className={styles.HowWeWork}>Как мы работаем</h1>
      <div className={styles.Numbers}>
        <section className={styles.Section}>
          <img className={styles.img} src={NumOne} alt='Num' />
          <h1 className={styles.NumTopic}>Оставьте заявку</h1>
          <p className={styles.NumDesc}>Напишите нам на </p>
          <a href="https://lyl.su/fn6" target="_blank" rel="noopener noreferrer">
            <button className={styles.BtnWhatsApp}>WhatsApp</button>
          </a>
        </section>

        <section className={styles.Section}>
          <img className={styles.img} src={NumTwo} alt='Num' />
          <h1 className={styles.NumTopic}>Мы свяжемся</h1>
          <p className={styles.NumDesc}>Мы с вами свяжемся и проконсультируем, сделаем предвратиельный просчет при наличии нужной информации</p>
        </section>

        <section className={styles.Section}>
          <img className={styles.img} src={NumThree} alt='Num' />
          <h1 className={styles.NumTopic} >Замер + Дизайн</h1>
          <p className={styles.NumDesc}>Наши монтажники приедут на замер, а наш дизайнер сделает эскиз в реальных размерах</p>
        </section>

        <section className={styles.Section}>
          <img className={styles.img} src={NumFour} alt='Num' />
          <h1 className={styles.NumTopic}>Договор</h1>
          <p className={styles.NumDesc}>Мы работаем официально по договору. Пропишем сроки, материалы и дадим гарантию</p>
        </section>

        <section className={styles.Section}>
          <img className={styles.img} src={NumFive} alt='Num' />
          <h1 className={styles.NumTopic}>Монтаж</h1>
          <p className={styles.NumDesc}>Наши монтажники установят вашу вывеску, и сделают фото-отчет после вашей проверки сделаем все закрывающие документы</p>
        </section>
      </div>
      <footer className={styles.footer}>
        <h3>Или свяжитесь напрямую</h3>
        <a href="https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer">
          <button className={styles.BtnInst}>Instagram</button>
        </a>
      </footer>

    </article>
  )
}

export default PageThree