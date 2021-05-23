import data from './data';
import Card from '../Card/Card';
import s from './portfolio.module.css';

const Portfolio = () => {
    return (
        <>
            <section className={s.portfolio}>
                <span className={s.portfolio_title}>Portfolio</span>

                <div className={s.portfolio_projects}>
                    {
                        Object.values(data).map((item) =>
                            <Card
                                name={item.name}
                                img={item.img}
                                descr={item.descr}
                                stack={item.stack}
                                photos={item.photos}
                                gitLink={item.gitLink}
                                demoLink={item.demoLink}
                            />
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Portfolio;