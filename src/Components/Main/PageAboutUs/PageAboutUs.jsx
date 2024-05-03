import { Link } from "react-router-dom"
import styles from '../../../utils/css/PageAboutUs.module.css'

function PageAboutUs() {
    return (
        <div className={styles.background}>
            <Link to={'/'} className={styles.logo}>NUR PRINT</Link>
            <article className={styles.History}>
                <h1 className={styles.Topic}>Компания NUR PRINT</h1>
                <section className={styles.HistoryText}>
                    <p className={styles.textOne}>Добро пожаловать в мир NUR PRINT – вашего надежного партнера в области рекламы, основанного семейным духом и творческим вдохновением!</p>

                    <p className={styles.textTwo}>Наша история началась в семейном кругу, когда группа членов одной семьи собралась вместе с единой целью создания компании, которая предложит клиентам нечто уникальное и выдающееся в мире рекламы и дизайна. С каждым проектом, каждой новой идеей, мы укрепляем связь и солидарность в нашей семье, делая нашу работу не просто профессией, но и страстью, которая объединяет нас.</p>

                    <p className={styles.textThree}>NUR PRINT – это не просто компания, занимающаяся созданием вывесок, табличек и баннеров. Мы – семейная команда, где каждый из нас вкладывает частичку своей души в каждую работу. Мы дорожим семейными ценностями, взаимопониманием и поддержкой, которые являются фундаментом нашего успеха.</p>

                    <p className={styles.textFour}>Наша команда состоит из талантливых профессионалов, которые делятся между собой опытом, идеями и вдохновением, чтобы создавать для вас уникальные и запоминающиеся рекламные решения. Мы гордимся тем, что каждый проект, который мы реализуем, является результатом совместного труда и вклада каждого члена нашей семьи.</p>

                    <p className={styles.textFive}>Мы понимаем, что ваша реклама – это ваш голос в мире бизнеса, и мы стремимся сделать этот голос наиболее ярким, привлекательным и запоминающимся. Мы гарантируем вам индивидуальный подход, внимание к деталям и качество в каждой нашей работе.</p>

                    <p className={styles.textSix}> С NUR PRINT вы не просто получаете рекламные материалы, вы получаете вдохновение, страсть и заботу семьи, которая делает вашу мечту реальностью.</p>

                    <p className={styles.textSeven}>Давайте создадим вместе нечто великолепное – давайте создадим историю успеха с NUR PRINT!</p>
                </section>
            </article>
            <Link className={styles.GoHome} to={'/'} style={{fontSize: "14px"}}>Вернуться</Link>
        </div>
    )
}

export default PageAboutUs