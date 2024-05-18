import styles from '../../../utils/css/PageThree.module.css'
import UtilPgThree from '../../../utils/UtilPgThree'
import IphoneInst from '../../../img/PageThree/Project-Name-_14_-—-копия.webp'
import Bgrnd from '../../../img/PageThree/Frame-2-_5__11zon (2).webp'
import BgrndMob from '../../../img/PageThree/Frame-3.webp'
import PageThreeFooterBgrnd from '../../../img/PageThree/Subtract-_2_.webp'


function PageThree() {

  return (
    <article  className={styles.articleThree} >
      <h2 className={styles.HowWeWork} id='HowWeWork'>Как мы работаем</h2>
      <img src={Bgrnd} alt="" className={styles.Bgrnd} />
      <img src={BgrndMob} alt="" className={styles.BgrndMob} />
      <UtilPgThree />
      <footer className={styles.footer}  >
        <img className={styles.PageThreeFooterBgrnd} src={PageThreeFooterBgrnd} alt='PageThreeFooterBgrnd' />
        <div className={styles.ex}>

          <h3 className={styles.btnText}>Или свяжитесь напрямую</h3>
          <a href="https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer">
            <button className={styles.BtnInst}>Instagram</button>
          </a>
        </div>
        <img className={styles.IphoneInst} src={IphoneInst} alt='' href={IphoneInst} />

      </footer>

    </article>
  )
}

export default PageThree