import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <h1 className={s.title}>Karina</h1>
                <nav>
                    <ul className={s.navigation}>
                        <li className={s.navigation_item}>About</li>
                        <li className={s.navigation_item}>Expierince</li>
                        <li className={s.navigation_item}>Skills</li>
                        <li className={s.navigation_item}>Projects</li>
                        <li className={s.navigation_item}>Contact Me</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;