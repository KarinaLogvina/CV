import s from './main.module.css'

const Main = () => {
    return (
        <section className={s.main}>
            <div className={s.photo}>
                <img src='../../../publc/karina.jpg' alt="Karina's" />
            </div>
            <div className={s.main__info}>
                <h2 className={s.main_title}>I am Karina Logvina</h2>
                <p className={s.discription}>I am a Front-end Developer located in Minsk, Belarus. I am looking to take on more work and to increase my skills as a Front-end Developer.
                If you have job for me please contact me.
                </p>
                <p></p>
                <div className={s.info}>
                    <div className={s.info__item}>
                        <p>Phone</p>
                        <a href="tel:+375447595438">+375(44) 759 54 38</a>
                    </div>
                    <div className={s.info__item}>
                        <p>Email</p>
                        <a href="mailto:karinalogvina0@gmail.com">logvinakarinaa@gmail.com</a>
                    </div>
                    <div className={s.info__item}>
                        <p>Socials</p>
                        <ul className={s.social__media}>
                            <li>
                                <a href="https://github.com/KarinaLogvina" className={s.github}>
                                    <img src="" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="http://">Linkdin</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className={s.contact_me_button}>Свяжись со мной</button>
                <button className={s.download_button}>Скачать резюме</button>
            </div>
        </section>
    )
}

export default Main;