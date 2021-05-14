import s from './education.module.css'

const Education = () => {
    return (
        <>
            <section className={s.education}>
                <div className={s.wrapper}>
                    <div className={s.education_description}>
                        <span className={s.education_title}>Education</span>
                        <p>All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.</p>
                    </div>
                    <div className={s.education_list}>
                        <div className={s.education_step}>
                            <p className={s.year}>2013-2018 / 2018-2019 / 2019-2020</p>
                            <p>Stufent / Graduate Student / Post-graduate student of Belarusian State Technological University </p>
                        </div>
                        <div className={s.education_step}>
                            <p className={s.year}>2020</p>
                            <p>Rolling Scopes School. Front-end course</p>
                            <a href="http://">Sertificate</a>
                        </div>
                        <div className={s.education_step}>
                            <p className={s.year}>2021</p>
                            <p>Zar React Marathon</p>
                            <a href="http://">Sertificate</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education;