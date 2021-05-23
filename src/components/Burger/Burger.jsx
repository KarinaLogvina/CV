import { slide as Menu } from 'react-burger-menu';
import s from '../Header/header.module.css';
const Burger = () => {
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: 'red'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#fff',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    return (
        <>
            <Menu styles={styles}>
                <ul className={s.navigation}>
                    <li className={s.navigation_item}><a href="#home">Home</a></li>
                    <li className={s.navigation_item}><a href="#skills">Skills</a></li>
                    <li className={s.navigation_item}><a href="#education">Education</a></li>
                    <li className={s.navigation_item}><a href="#projects">Projects</a></li>
                    <li className={s.navigation_item}><a href="#contact">Contact Me</a></li>
                </ul>
            </Menu>
        </>
    )
}

export default Burger;