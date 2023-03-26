import { animated } from '@react-spring/web'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillSunFill } from 'react-icons/bs'

export default function Navbar(props) {
    return (
        <nav style={props.animateFromLeft} className={props.darkMode ? "nav nav--dark" : "nav"}>
            <animated.span style={props.animateFromLeft} className="nav--logo">Matej Kardum</animated.span>
            {props.isDesktop && <animated.ul style={props.animateFromLeft} className={props.darkMode ? "nav--links nav--links--dark" : "nav--links"}>
                <li className="nav--link"><a href="#about">About</a></li>
                <li className="nav--link"><a href="#projects">Projects</a></li>
                <li className="nav--link"><a href="#skills">Skills</a></li>
                <li className="nav--link"><a href="#contact">Contact</a></li>
            </animated.ul>}
            {props.darkMode ? 
            <animated.div className="mode--switch" style={props.animateFromRight}><BsFillSunFill style={props.animateFromRight} onClick={props.toggleMode} /></animated.div>
            : <animated.div className="mode--switch" style={props.animateFromRight}><BsFillMoonStarsFill style={props.animateFromRight} onClick={props.toggleMode} /></animated.div>
            }
            {props.isMobile && <GiHamburgerMenu />}
        </nav>
    )
}