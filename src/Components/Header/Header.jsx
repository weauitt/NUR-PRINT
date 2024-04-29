import React from 'react'
import styles from '../../utils/css/Header.module.css'
import Inst from '../../img/Header/inst.svg'
import Tg from '../../img/Header/tg.svg'
import WhtsApp from '../../img/Header/whatsapp.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
// import { useRef } from 'react';


function Header() {
  // const BurgerRef = useRef();

  // const showBurger  = () => {
  //   BurgerRef.current.classList.toggle("responsive_nav")
  // }

  const [burgerOpen, setBurgerOpen] = React.useState(false)

  return (
    <>
      <header className={styles.Header}>
        <nav translate="no" className={styles.logo}>NUR PRINT</nav>
        <section  className={styles.AllNavigation}>
          
          <div className={burgerOpen ? [styles.burger, styles.active].join(' ') : [styles.burger]}>
            <ul className={styles.Navigation}>
              <li className={styles.NavOne} style={{ marginRight: '35px', cursor: 'pointer' }}>О нас</li>
              <li className={styles.NavOne} style={{ marginRight: '35px', cursor: 'pointer' }}>Услуги</li>
              <li className={styles.NavTwo} style={{ marginRight: '30px', cursor: 'pointer' }}>Процесс</li>
            </ul>
            <section className={styles.Contacts}>
              <a href="https://lyl.su/fn6" target="_blank" rel="noopener noreferrer" style={{ cursor: 'auto' }}>
                <img src={WhtsApp} alt='WhatsApp' className={styles.WhtsApp} />
              </a>
              <a href=" https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'auto' }}>
                <img src={Inst} alt='Instagram' className={styles.Inst} />
              </a>
              <a href=" https://t.me/wequit1/" style={{ cursor: 'auto' }}>
                <img src={Tg} alt='Telegram' className={styles.Tg} />
              </a>
            </section>
          </div>

          <button className={styles.openHabmurger} onClick={() => {setBurgerOpen(!burgerOpen)}}>
            {burgerOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </section>
      </header>
    </>
  )
}


export default Header