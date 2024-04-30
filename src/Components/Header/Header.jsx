import React from 'react'
import styles from '../../utils/css/Header.module.css'
import Inst from '../../img/Header/inst.svg'
import Tg from '../../img/Header/tg.svg'
import WhtsApp from '../../img/Header/whatsapp.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HiUserGroup, HiOutlineBadgeCheck, HiRefresh } from "react-icons/hi";

function Header() {

  const [burgerOpen, setBurgerOpen] = React.useState(false)

  return (
    <>
      <header className={styles.Header}>
        <nav translate="no" className={burgerOpen ? [styles.logo, styles.activeLogo].join(' ') : [styles.logo]}>NUR PRINT</nav>
        <section className={styles.AllNavigation}>
          <div className={burgerOpen ? [styles.burger, styles.active].join(' ') : [styles.burger]}>
            <ul className={burgerOpen ? [styles.Navigation, styles.activeNavigation].join(' ') : [styles.Navigation]}>
              <div style={{ display: "flex", margin: "10px" }}>
                <HiUserGroup className={burgerOpen ? [styles.AboutUs, styles.activeAboutUs].join(' ') : [styles.AboutUs]} /> 
                <li className={styles.NavOne} style={{ marginRight: '35px', cursor: 'pointer' }}>О нас</li>
              </div>
              <div style={{ display: "flex", margin: "10px" }}>
                <HiOutlineBadgeCheck className={burgerOpen ? [styles.Uslugi, styles.activeUslugi].join(' ') : [styles.Uslugi]} />
                 <li className={styles.NavOne} style={{ marginRight: '35px', cursor: 'pointer' }}>Услуги</li>
              </div>
              <div style={{ display: "flex", margin: "10px" }}>
                <HiRefresh className={burgerOpen ? [styles.Procces, styles.activeProcces].join(' ') : [styles.Procces]} /> 
                <li className={styles.NavTwo} style={{ marginRight: '30px', cursor: 'pointer' }}>Процесс</li>
              </div>
            </ul>
            <div className={burgerOpen ? [styles.NavFour, styles.activeNavFour].join(' ') : [styles.NavFour]}>Правовая информация</div>
            <section className={burgerOpen ? [styles.Contacts, styles.activeContacts].join(' ') : [styles.Contacts]}>
              <a href="https://lyl.su/fn6" target="_blank" rel="noopener noreferrer" style={{ cursor: 'auto', marginBottom: "5px"}}>
                <img src={WhtsApp} alt='WhatsApp' className={styles.WhtsApp} />
              </a>
              <a href=" https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'auto', marginBottom: "5px" }}>
                <img src={Inst} alt='Instagram' className={styles.Inst} />
              </a>
              <a href=" https://t.me/wequit1/" style={{ cursor: 'auto', width: "47px", marginBottom: "5px" }}>
                <img src={Tg} alt='Telegram' className={styles.Tg} />
              </a>
            </section>
          </div>

          <button className={styles.openHabmurger} onClick={() => { setBurgerOpen(!burgerOpen) }}>
            {burgerOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </section>
      </header>
    </>
  )
}


export default Header