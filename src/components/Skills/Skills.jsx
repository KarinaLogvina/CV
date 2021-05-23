import s from './skills.module.css'

const Skills = () => {
    return (
        <>
            <section className={s.skills}>
                <div className={s.skills_description}>
                    <span className={s.skills_title}>Skills</span>
                    <p>I am inspired by creating great work with people who are as passionate as I am about building something awesome.</p>
                    <div className={s.zigzag}>
                        <img src="" alt="" />
                    </div>
                </div>
                <ul className={s.skills_list}>
                    <div>
                        <h4 className={s.skill}>Developing</h4>
                        <p className={s.skills_list_item}>Javascript, ReactJS, ContextAPI, HTML5, CSS3, SASS, BEM, Bootstrap4, TailwindCSS, MaterialUI, Git</p>
                    </div>
                    <div>
                        <h4 className={s.skill}>Social</h4>
                        <p className={s.skills_list_item}>Effective communication, Conflict resolution, Cooperation, Good Time Management</p>
                    </div>
                </ul>
                <p id="education"></p>
            </section>
        </>
    )
}

export default Skills;