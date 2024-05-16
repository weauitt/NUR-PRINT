import styles from '../../../utils/css/PageTwo.module.css'
import Lightning from '../../../img/PageTwo/download_image_1711793596008.webp'
import end from '../../../img/PageTwo/Group 33.png'
import { useInView } from "react-intersection-observer";

function PageTwo() {
  const { ref, inView} = useInView({
    threshold: 0,
  });

  return (
    <>
      <article className={styles.acticleTwo} >
        <section className={styles.Topic}>
          <p className={styles.NurPrint}>РЕКЛАМНО-ПРОИЗВОДСТВЕННАЯ КОМПАНИЯ NUR PRINT</p>
        </section>
        <div ref={ref} className={styles.LazyLoad} > 
        {inView ?  <img  className={styles.Lightning} src={Lightning} alt="" /> : ''}
        </div>
        <section className={styles.WhatWeDo} id='WhatWeDo'>
          <header className={styles.TopicWhatWeDo}>Мы творим рекламные шедевры, вывески <br /> что олицетворяют ваш бизнес</header>
          <section className={styles.SectionOne}>
            <section className={styles.ChapterOne}>
              <p className={styles.TopicChapterOne}>Объемные буквы</p>
              <p className={styles.DescChapterOne}>Наши объемные световые буквы придают вашему бренду или мероприятию эффектный и современный вид. Эти буквы идеальны для витрин, логотипов компаний и создания выразительных архитектурных элементов. Наши световые буквы не только служат источником освещения, но и становятся ярким акцентом в темное время суток, привлекая внимание прохожих и создавая уютную атмосферу. С множеством вариантов цветов и стилей, мы гарантируем, что наши объемные световые буквы подчеркнут вашу уникальность</p>
            </section>
            <section className={styles.ChapterTwo}>
              <p className={styles.TopicChapterTwo}> Таблички</p>
              <p className={styles.DescChapterTwo}>Начинаем с вашей идеи! Наши талантливые дизайнеры превращают ваши концепции в эстетически приятные и функциональные дизайны. Мы используем только лучшие материалы, гарантируя долговечность и стойкость наших табличек к внешним воздействиям. Наши опытные мастера тщательно обрабатывают материалы, а гравировка производится с высочайшей точностью, чтобы создать таблички, которые выделяются своей уникальностью. Каждая табличка проходит строгий контроль качества, чтобы гарантировать, что она соответствует нашим высоким стандартам перед отправкой клиенту</p>
            </section>
          </section>
          <section className={styles.SectionTwo}>
            <section className={styles.ChapterThree}>
              <p className={styles.TopicChapterThree}>Фото Зона</p>
              <p className={styles.DescChapterThree}>Наши фотозоны создаются с любовью к деталям и творчеству. Забавные реквизиты, цветные фоны, и игривые декорации – все это для того, чтобы ваши гости чувствовали веселье и свободу перед камерой. Мы предлагаем создание фотозон под ваш тематический стиль. Будь то свадьба, день рождения или корпоративное мероприятие – мы подстраиваемся под ваши пожелания. Наши фотозоны обеспечивают высококачественные снимки. Мы используем передовые технологии и материалы для достижения отличных результатов</p>
            </section>
            <section className={styles.ChapterFour}>
              <p className={styles.TopicChapterFour}>Стенды</p>
              <p className={styles.DescChapterFour}>Наши информационные стенды - идеальное решение для школ, организаций и заведений. Они предоставляют простой и наглядный способ передачи важной информации, будь то расписания, события или обучающие материалы. Современный дизайн и удобство в использовании делают наши стенды эффективным инструментом для коммуникации и организации пространства</p>
            </section>
          </section>
        </section>
      </article>
        <img src={end} alt="" className={styles.end} />
    </>
  )
}

export default PageTwo