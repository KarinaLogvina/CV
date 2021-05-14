import Modal from '../Modal/Modal'
import { useState } from 'react'
import karina from './karina.jpg'
import link from './linkedin.svg'

import s from './main.module.css'
const Main = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        return setShowModal(!showModal)
    }

    return (
        <section className={s.main}>
            <div className={s.photo}>
                <img src={karina} alt="Karina's" />
            </div>
            <div className={s.main__info}>
                <span className={s.main_title}>I am Karina Logvina</span>
                <p className={s.discription}>I am a Front-end Developer located in Minsk, Belarus. I am looking to take on more work and to increase my skills as a Front-end Developer.
                If you have job for me please contact me.
                </p>
                <div className={s.info}>
                    <div className={s.info__item}>
                        <p className={s.categoty}>Phone</p>
                        <a href="tel:+375447595438">+375(44) 759 54 38</a>
                    </div>
                    <div className={s.info__item}>
                        <p className={s.categoty}>Email</p>
                        <a href="mailto:karinalogvina0@gmail.com">logvinakarinaa@gmail.com</a>
                    </div>
                    <div className={s.info__item}>
                        <p className={s.categoty}>Socials</p>
                        <ul className={s.social__media}>
                            <li className={s.social__media_item}>
                                <a href="https://github.com/KarinaLogvina">
                                    <img src='./github.svg' className={s.github} alt="github" />
                                </a>
                            </li>
                            <li className={s.social__media_item}>
                                <a href="https://www.linkedin.com/in/karina-logvina/">
                                    <img src={link} className={s.linkedin} alt="linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    showModal && (<Modal show={showModal} setShowModal={setShowModal} />)
                }
                <button className={s.contact_me_button} onClick={handleModal}>Contact Me</button>
                <button className={s.download_button}>Download CV</button>
            </div>
        </section>
    )
}

export default Main;