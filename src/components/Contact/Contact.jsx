import { useState } from 'react'
import s from './contact.module.css'

const Contact = ({ isModal, setShowModal }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleClose = () => {
        if (!isModal) return
        setShowModal(!isModal)
    }

    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let messageText = encodeURIComponent(`Name: ${name}\n Email: ${email}\n Message: ${message}`)
        messageText = messageText.replaceAll('.', '\\.')
        fetch(`https://api.telegram.org/bot1774948006:AAHZ8DQqw-2Bmyptmmnl_lveNbf2pmpVoL4/sendMessage?chat_id=-542970591&text=${messageText}&parse_mode=MarkdownV2`).then(handleClose)
    }

    return (
        <>
            <section className={s.contact} id="contact">
                <div className={s.contact_description}>
                    <span className={s.contact_title}>Contact</span>
                    <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
                </div>
                <form className={s.form} action="submit">
                    <div className={s.data}>
                        <input className={s.name} type="text" placeholder='Name' value={name} required onChange={getName} />
                        <input className={s.email} type="email" placeholder='Email' value={email} required name="Email" onChange={getEmail} />
                    </div>
                    <div>
                        <textarea className={s.textarea} name="message" placeholder="Message" value={message} id="" cols="30" rows="5" onChange={getMessage}></textarea>
                        <div className={s.button_area}>
                            <button className={s.contact_me_button} type="submit" onClick={handleSubmit}> Send message</button>
                            {isModal && (
                                <p className={s.back_button} onClick={handleClose}>Back to CV</p>
                            )}
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact;