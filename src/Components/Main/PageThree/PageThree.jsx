import styles from '../../../utils/css/PageThree.module.css'
import UtilPgThree from '../../../utils/UtilPgThree'
import IphoneInst from '../../../img/PageThree/Project Name (14).png'
import Bgrnd from '../../../img/PageThree/Frame 2 (5).png'
import BgrndMob from '../../../img/PageThree/Frame 3 (7).png'


function PageThree() {
  return (
    <article className={styles.articleThree}>
      <h1 className={styles.HowWeWork}>Как мы работаем</h1>
      <img src={Bgrnd} alt="Bgrnd" className={styles.Bgrnd} />
      <img src={BgrndMob} alt="Bgrnd" className={styles.BgrndMob} />
      <UtilPgThree />
      <footer className={styles.footer}>
        <div className={styles.ex}>
          <h3 className={styles.btnText}>Или свяжитесь напрямую</h3>
          <a href="https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer">
            <button className={styles.BtnInst}>Instagram</button>
          </a>
        </div>
        <img className={styles.IphoneInst} src={IphoneInst} alt='iphoneIcon' />
      </footer>
    </article>
  )
}

export default PageThree