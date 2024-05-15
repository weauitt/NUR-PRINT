import styles from '../utils/css/UtilPgThree.module.css'
import NumOne from '..//img/PageThree/NumOne.webp'
import NumTwo from '../img/PageThree/NumTwo_8_11zon.webp'
import NumThree from '../img/PageThree/NumThree_7_11zon.webp'
import NumFour from '../img/PageThree/NumFour_5_11zon.webp'
import NumFive from '../img/PageThree/NumFive_11zon.webp'
// import { useInView } from "react-intersection-observer";

function UtilPgThree() {
  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });

  const Numbers = [
    {
      imgNum: NumTwo,
      NumTopic: "Мы свяжемся",
      NumDesc: "Мы с вами свяжемся и проконсультируем, сделаем предвратиельный просчет при наличии нужной информации"
    },
    {
      imgNum: NumThree,
      NumTopic: "Замер + Дизайн",
      NumDesc: "Наши монтажники приедут на замер, а наш дизайнер сделает эскиз в реальных размерах"
    },
    {
      imgNum: NumFour,
      NumTopic: "Договор",
      NumDesc: "Мы работаем официально по договору. Пропишем сроки, материалы и дадим гарантию"
    },
    {
      imgNum: NumFive,
      NumTopic: "Монтаж",
      NumDesc: "Наши монтажники установят вашу вывеску, и сделают фото-отчет после вашей проверки сделаем все закрывающие документы"
    }
  ]
  return (
    <div className={styles.Numbers} >
      <section className={styles.Section}>
        <img className={styles.img} src={NumOne} alt='Num' />
        <h1 className={styles.NumTopic}>Оставьте заявку</h1>
        <p className={styles.NumDesc}>Напишите нам на</p>
        <a href="https://lyl.su/fn6" target="_blank" rel="noopener noreferrer">
          <button className={styles.BtnWhatsApp}>WhatsApp</button>
        </a>
      </section>
      {Numbers.map((num, i) => (
        <section className={styles.Section} key={i}>
          <img className={styles.img} src={num.imgNum} alt='Num' />
          <h1 className={styles.NumTopic}>{num.NumTopic}</h1>
          <p className={styles.NumDesc}>{num.NumDesc}</p>
        </section>
      ))}

    </div>
  )
}

export default UtilPgThree