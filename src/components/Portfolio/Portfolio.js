import data from './data';
import Card from '../Card/Card';
import s from './portfolio.module.css';

const Portfolio = () => {
    return (
        <>
            <section className={s.portfolio}>
                <h2 className={s.portfolio_title}>Portfolio</h2>

                <div className={s.portfolio_projects}>
                    {
                        Object.values(data).map((item) =>
                            <Card
                                title={item.name}
                                img={item.img}
                            />
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Portfolio;