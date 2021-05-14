import s from './contact.module.css'

const Contact = ({ isModal, setShowModal }) => {
    const handleClose = () => {
        setShowModal(!isModal)
    }

    return (
        <>
            <section className={s.contact}>
                <div className={s.contact_description}>
                    <span className={s.contact_title}>Contact</span>
                    <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
                </div>
                <form className={s.form} action="submit">
                    <div className={s.data}>
                        <input className={s.name} type="text" placeholder='Name' required />
                        <input className={s.email} type="email" placeholder='Email' name="Email" id="" />
                    </div>
                    <div>
                        <textarea className={s.textarea} name="message" placeholder="Message" id="" cols="30" rows="5"></textarea>
                        <button className={s.contact_me_button} type="submit">Send message</button>
                        {isModal && (
                            <p className={s.back_button} onClick={handleClose}>Back to CV</p>
                        )}
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact;