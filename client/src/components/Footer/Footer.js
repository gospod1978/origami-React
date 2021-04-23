import './Footer.css'
import NavigationItem from './NavigationItem'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <NavigationItem>Going to 1</NavigationItem>
                <NavigationItem>Going to 2</NavigationItem>
                <NavigationItem>Going to 3</NavigationItem>
                <NavigationItem>Going to 4</NavigationItem>
                <NavigationItem>Going to 5</NavigationItem>
                <NavigationItem>Going to 6</NavigationItem>
                <NavigationItem>Going to 7</NavigationItem>
                <NavigationItem>Going to 8</NavigationItem>
                <NavigationItem>Going to 9</NavigationItem>
                <NavigationItem>Going to 10</NavigationItem>
                <NavigationItem>Going to 11</NavigationItem>
                <li className="listItem"><img src="./blue-origami-bird-flipped.png" alt="White"/></li>
            </ul>
            <p>Software Univeersity &#174; 2019</p>
        </footer>
    )
}

export default Footer