import styles from '../../../utils/css/PageOne.module.css'
import Header from '../../Header/Header';
import Background from '../../../img/PageOne/Wave SVG.png'

function PageOne() {

  return (
    <>
      <Header />
      <article style={{ overflow: 'hidden', position: 'relative' }}>
        <img className={styles.Background} alt="" src={Background} />
        <section className={styles.Header}>
          <section className={styles.nurPrint}>
            <p itemProp='name' translate="no" className={styles.nurPrintText}>NUR PRINT</p>
            <h1 itemProp='description' className={styles.nurPrintPodText}>Объемные буквы, Баннеры, Стенды</h1>
            <a href="https://www.instagram.com/nurprint_kg/" target="_blank" rel="noopener noreferrer">
            <button className={styles.andmore}>
              Подробнее
            </button>
            </a>
          </section>
        </section>
      </article>
    </>
  )
}

export default PageOne