import styles from '../../utils/css/Footer.module.css'
import Instagram from '../../img/Footer/inst.svg'
import Whatsapp from '../../img/Footer/whatsapp.svg'
import Telegram from '../../img/Footer/tg.svg'
import { LuCopyright } from "react-icons/lu";

const icons = [
  {
    img: Instagram,
    link: 'https://www.instagram.com/wequit1/'
  },
  {
    img: Whatsapp,
    link: 'https://clck.ru/38FAJ3'
  },
  {
    img: Telegram,
    link: 'https://t.me/wequit1/'
  }]

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div translate="no" className={styles.logo}>NUR PRINT</div>
      <section className={styles.OurContacts}>
        <p className={styles.OurContactsText} >Наши контакты</p>
        <a href="tel:+996 707 735 510" style={{ color: 'white' }} >+996 707 735 510</a>
      </section>
      <section className={styles.Desc}>
        <p style={{ opacity: "0.7" }}>Привносим идеи в реальность. Ваш успех — наша реклама.<br /> Доверьте ваш бренд профессионалам. Nur Print — для яркого будущего.</p>
      </section>
      <div className={styles.IconsLisence}> <a style={{ color: "white" }}  target="_blank" href="https://icons8.com/illustrations/illustration/62bf41a9123f10000139bbcf">App</a> icon by <a style={{ color: "white" }} target="_blank" href="https://icons8.com">Icons8</a></div>
     
      <div className={styles.Copyright}>
        <LuCopyright />
      </div>
      <div className={styles.Icons}>
        {icons.map((icon, i) => (
          <a key={i} href={icon.link} target="_blank" rel="noopener noreferrer">
            <img src={icon.img} className={styles.numbers} />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer