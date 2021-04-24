import style from './Header.module.css'
import NavigationItem from './NavigationItem'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="./white-origami-bird.png" alt="White"/></li>
                <Link to="/"><NavigationItem>Home</NavigationItem></Link>
                <Link to="/about"><NavigationItem>About</NavigationItem></Link>
                <Link to="/contact-us"><NavigationItem>Contact Us</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Pesho</NavigationItem></Link>
                <Link to="/about/gosho"><NavigationItem>Gosho</NavigationItem></Link>
                <Link to="/about/stamat"><NavigationItem>Stamat</NavigationItem></Link>
                <Link to="/about/mariika"><NavigationItem>Mariika</NavigationItem></Link>
                <Link to="/about/niki"><NavigationItem>Niki</NavigationItem></Link>
                <Link to="/about/tosho"><NavigationItem>Tosho</NavigationItem></Link>
                <Link to="/about/plamen"><NavigationItem>Plamen</NavigationItem></Link>
                <Link to="/about/veselin"><NavigationItem>Veselin</NavigationItem></Link>
            </ul>
        </nav>
    )
}

export default Header