import React from 'react'
import styles from '../../utils/css/Header.module.css'
import Logo from '../../img/Header/SAVE_20240209_192212.jpg'
import Inst from '../../img/Header/inst.svg'
import Tg from '../../img/Header/tg.svg'
import WhtsApp from '../../img/Header/whatsapp.svg'


function Header() {
  return (
    <>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <img src={Logo} alt='Logo' className={styles.Logo}></img>
          <section className={styles.AllNavigation}>
            <ul className={styles.Navigation}>
              <li style={{ marginRight: '35px', cursor: 'pointer' }} >Услуги</li>
              <li style={{ marginRight: '30px', cursor: 'pointer' }}>Процесс</li>
            </ul>
            <section className={styles.Contacts}>
              <a href="https://lyl.su/fn6" target="_blank" rel="noopener noreferrer" style={{cursor: 'auto'}}>
              <img src={WhtsApp} alt='WhatsApp' className={styles.WhtsApp} />
              </a>
              <a href=" https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer" style={{cursor: 'auto'}}>
              <img src={Inst} alt='Instagram' className={styles.Inst} />
              </a>
              <a href=" https://t.me/wequit1/" style={{cursor: 'auto'}}>
              <img src={Tg} alt='Telegram' className={styles.Tg} />
              </a>
            </section>
          </section>
        </nav>
      </header>
    </>
  )
}


export default Header