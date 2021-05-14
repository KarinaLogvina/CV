import Contact from '../Contact/Contact'
import s from './modal.module.css'

const Modal = ({ show, setShowModal }) => {

    return (
        <> {show && (
            <div className={s.show}>
                <div className={s.modal}>
                    <div className={s.modal_main}>
                        <Contact isModal={show} setShowModal={setShowModal} />
                    </div>
                </div>
            </div>
        )}

        </>
    )
}

export default Modal;