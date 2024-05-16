import styles from '../../../utils/css/PageThree.module.css'
import UtilPgThree from '../../../utils/UtilPgThree'
import IphoneInst from '../../../img/PageThree/Project-Name-_14_-—-копия_9.webp'
import Bgrnd from '../../../img/PageThree/Frame-2-_5__11zon (2).webp'
import BgrndMob from '../../../img/PageThree/Frame-3-_7__11zon.webp'
import PageThreeFooterBgrnd from '../../../img/PageThree/Subtract (2).svg'


function PageThree() {

  return (
    <article  aria-hidden="true" className={styles.articleThree} >
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