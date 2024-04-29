import styles from '../../../utils/css/PageOne.module.css'
import Header from '../../Header/Header'
import Background from '../../../img/PageOne/Wave SVG (3).svg' 

function PageOne() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: 1050, 
      behavior: 'smooth',
    });
  }

  
  return (
    <>
      <Header />
      <article style={{overflow: 'hidden', position: 'relative'}}>
            <img className={styles.Background} alt="shapeTwo" src={Background}/>
        <section className={styles.Header}>
          <section className={styles.nurPrint}>
            <h1 translate="no" className={styles.nurPrintText}>NUR PRINT</h1>
            <p className={styles.nurPrintPodText}>Объемные буквы, Баннеры, Стенды</p>
            <button className={styles.andmore} onClick={handleScrollDown}>Подробнее</button>
          </section>
        </section>
      </article>
    </>
  )
}

export default PageOne