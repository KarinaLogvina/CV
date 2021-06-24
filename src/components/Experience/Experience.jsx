import s from './experience.module.css'

const Experience = () => {
    return (
        <section className={s.experience}>
            <div className={s.wrapper}>
                <div className={s.experience_description}>
                    <span className={s.experience_title}>Опыт</span>
                    <p> Свежий взгляд и любознательность часто перевешивают опыт (:</p>
                </div>
                <div className={s.experience_list}>
                    <div className={s.experience_step}>
                        <p className={s.year}>2020-2021</p>
                        <p className={s.job}>Инженер-химик на предприятии легкой промышленности</p>
                        <p>Полезные навыки приобретенные на этой работе:</p>
                        <p>Приспособление к совершенно новому направлению работы в кратчайшие сроки.</p>
                    </div>
                    <div className={s.experience_step}>
                        <p className={s.year}>2020</p>
                        <p className={s.job}>Top-10 Team in She’s Next, Empowered by Visa Hackathon</p>
                        <p>В команде Easysoft из 2 прекрасных людей развили свою идею о треннинг-площадке для улучшения soft skills от 0 до небольшого прототипа. </p>
                    </div>
                    <div className={s.experience_step}>
                        <p className={s.year}>2017-2020</p>
                        <p className={s.job}>Инженер/младший научный сотрудник в Белорусском Государственном Технологическом Университете</p>
                        <p>Полезные навыки приобретенные на этой работе:</p>
                        <p>Быстрый анализ и сбор информации. Выполнение объемных задач в кратчайшие сроки. Коммуникация с людьми разной степени сложности. </p>
                        <p id="projects"></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;