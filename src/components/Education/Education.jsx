import s from './education.module.css'

const Education = () => {
    return (
        <>
            <section className={s.education}>
                <div>
                    <h2 className={s.title}>Education</h2>
                    <p>All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.</p>
                </div>
                <div>
                    <p>2013-2018</p>
                    <p>Stufent of Belarusian State Technological University </p>
                    <p>2018-2019</p>
                    <p>Graduate student of Belarusian State Technological University</p>
                    <p>2019-2020</p>
                    <p>Post-graduate student of Belarusian State Technological University</p>
                    <p>2020</p>
                    <p>Rolling Scopes School. Front-end course</p>
                    <a href="http://">Sertificate</a>
                </div>
            </section>
        </>
    )
}

export default Education;