import { animated } from '@react-spring/web'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillSunFill } from 'react-icons/bs'
import logo from "../assets/logo.png"
import darkLogo from "../assets/logo-dark.png"

export default function Navbar(props) {
        return (
        <nav className={props.darkMode ? "nav nav--dark" : "nav"}>
            {/* <animated.span style={props.animateFromLeft} className="nav--logo">Matej Kardum</animated.span> */}
            <animated.img style={props.animateFromLeft} className="nav--logo" src={props.darkMode ? logo : darkLogo}></animated.img>
            {props.isDesktop && <animated.ul style={props.animateFromLeft} className={props.darkMode ? "nav--links nav--links--dark" : "nav--links"}>
                <li className="nav--link"><a href="#about">ABOUT</a></li>
                <li className="nav--link"><a href="#projects">PROJECTS</a></li>
                <li className="nav--link"><a href="#skills">SERVICES</a></li>
                <li className="nav--link"><a href="#contact">CONTACT</a></li>
            </animated.ul>}
            {props.darkMode ? 
            <animated.div className="mode--switch" style={props.animateFromRight}><BsFillSunFill style={props.animateFromRight} onClick={props.toggleMode} /></animated.div>
            : <animated.div className="mode--switch" style={props.animateFromRight}><BsFillMoonStarsFill style={props.animateFromRight} onClick={props.toggleMode} /></animated.div>
            }
            {props.isMobile && <GiHamburgerMenu />}
        </nav>
    )
}