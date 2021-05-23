import Contact from '../Contact/Contact'
import s from './modal.module.css'

const Modal = ({ show, setShowModal, close }) => {

    return (
        <> {show && (
            <div className={s.show}>
                <div className={s.modal}
                    onClick={close}
                >
                    <div className={s.modal_main}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <Contact isModal={show} setShowModal={setShowModal} />
                    </div>
                </div>
            </div>
        )}

        </>
    )
}

export default Modal;