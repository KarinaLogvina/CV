import s from './card.module.css'

const Card = (props) => {
    return (
        <>
            <div className={s.card}>
                <img src={props.img} alt="project card" className={s.card_img} />
                <h3 className={s.card_title}>{props.title}</h3>
            </div>
        </>
    )
}

export default Card;