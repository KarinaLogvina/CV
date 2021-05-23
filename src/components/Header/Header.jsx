import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <h1 className={s.title}>Karina</h1>
                <nav>
                    <ul className={s.navigation}>
                        <li className={s.navigation_item}><a href="#home">Home</a></li>
                        <li className={s.navigation_item}><a href="#skills">Skills</a></li>
                        <li className={s.navigation_item}><a href="#education">Education</a></li>
                        <li className={s.navigation_item}><a href="#projects">Projects</a></li>
                        <li className={s.navigation_item}><a href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;