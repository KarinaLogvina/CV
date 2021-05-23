import { useState } from 'react'
import Project from '../Project/Project';
import s from './card.module.css'

const Card = (props) => {
    const img = require('./assets/' + props.img)
    const [showProject, setShowProject] = useState(false);
    const photos = props.photos.map((el) => require('./screens/' + el));

    const handleProject = () => {
        setShowProject(!showProject)
    }

    return (
        <>
            <div className={s.card} onClick={handleProject}>
                <figure><img src={img.default} alt="project card" className={s.card_img} /></figure>
                <h3 className={s.card_title}>{props.name}</h3>
            </div>
            {showProject && (
                <Project
                    name={props.name}
                    stack={props.stack}
                    descr={props.descr}
                    demoLink={props.demoLink}
                    gitLink={props.gitLink}
                    photos={photos}
                    close={handleProject}
                />
            )}
        </>
    )
}

export default Card;