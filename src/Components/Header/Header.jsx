import React from 'react'
import styles from '../../utils/css/Header.module.css'
import Inst from '../../img/Header/inst.webp'
import Tg from '../../img/Header/tg.webp'
import WhtsApp from '../../img/Header/whatsapp.webp'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HiUserGroup, HiOutlineBadgeCheck, HiRefresh } from "react-icons/hi";
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { useInView } from "react-intersection-observer";


function Header() {

  const [burgerOpen, setBurgerOpen] = React.useState(false)
  const { ref, inView} = useInView({
    threshold: 0,
  });
  return (
    <>
      <header className={styles.Header} ref={ref}>
        <p itemProp='logo' translate="no" className={burgerOpen ? [styles.logo, styles.activeLogo].join(' ') : [styles.logo]}>NUR PRINT</p>
        <nav className={styles.AllNavigation}>
          <div className={burgerOpen ? [styles.burger, styles.active].join(' ') : [styles.burger]}>
            <ul className={burgerOpen ? [styles.Navigation, styles.activeNavigation].join(' ') : [styles.Navigation]}>
              <div style={{ display: "flex", margin: "10px" }}>
                <HiUserGroup className={burgerOpen ? [styles.AboutUs, styles.activeAboutUs].join(' ') : [styles.AboutUs]} />
                <LinkRouter to='/PageAboutUs' className={styles.NavOne} style={{ marginRight: '35px', cursor: 'pointer' }}>О нас</LinkRouter>
              </div>
              <div style={{ display: "flex", margin: "10px" }}>
                <HiOutlineBadgeCheck className={burgerOpen ? [styles.Uslugi, styles.activeUslugi].join(' ') : [styles.Uslugi]} />
                <Link className={styles.NavOne} style={{ marginRight: '35px', cursor: 'pointer' }}
                  onClick={() => setBurgerOpen(false)}
                  activeClass="active" to="WhatWeDo" spy={true} smooth={true} offset={50}
                  duration={500}>Услуги
                </Link>
              </div>
              <div style={{ display: "flex", margin: "10px" }}>
                <HiRefresh className={burgerOpen ? [styles.Procces, styles.activeProcces].join(' ') : [styles.Procces]} />
                <Link className={styles.NavTwo} style={{ marginRight: '30px', cursor: 'pointer' }}
                  onClick={() => setBurgerOpen(false)}
                  activeClass="active" to="HowWeWork" spy={true} smooth={true} offset={-40}
                  duration={500}>Процесс
                </Link>
              </div>
            </ul>
            <div className={burgerOpen ? [styles.NavFour, styles.activeNavFour].join(' ') : [styles.NavFour]}>Правовая информация</div>
            <section className={burgerOpen ? styles.activeContacts : styles.Contacts}>
              <a href="https://wa.me/+996707735510" target="_blank" rel="noopener noreferrer" style={{ cursor: 'auto', marginBottom: "5px" }}>
                {inView ? <img src={WhtsApp} alt='WhatsApp' className={styles.WhtsApp} /> : ''}
              </a>
              <a href="https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'auto', marginBottom: "5px" }}>
                {inView ?   <img src={Inst} alt='Instagram' className={styles.Inst} /> : ''}
              </a>
              <a href=" https://t.me/+996707735510/" style={{ cursor: 'auto', width: "47px", marginBottom: "5px" }}>
                {inView ?   <img src={Tg} alt='Telegram' className={styles.Tg} /> : ''}
              </a>
            </section>
          </div>

          <button className={styles.openHabmurger} onClick={() => { setBurgerOpen(!burgerOpen) }}>
            {burgerOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </nav>
        
      </header>
    </>
  )
}


export default Header