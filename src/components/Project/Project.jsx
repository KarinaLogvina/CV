import s from './project.module.css'

const Project = ({ name, stack, descr, demoLink, gitLink, photos, close, }) => {

    return (
        <>
            <section className={s.progect}>
                <div className={s.modal}
                    onClick={close}
                >
                    <div className={s.modal_main}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <p className={s.progect_title}>{name}</p>
                        <p className={s.progect_stack}>Stack: {stack}</p>
                        <p className={s.progect_descr}>{descr}</p>
                        <div className={s.photos}>
                            {photos.map(el =>
                                <img src={el.default} alt="dsfkjhf" />
                            )}
                        </div>
                        <p className={s.progect_demo}><a href={demoLink} target="blank">See site</a></p>
                        <p className={s.progect_git}><a href={gitLink} target="blank">See code</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;