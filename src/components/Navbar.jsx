import { useSpring, animated } from '@react-spring/web'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'

export default function Navbar(props) {
    const fromLeft = useSpring({
        config: {mass:1, tension:500, friction:118},
        from: { x: -100, opacity: 0, },
        to: { x: 0, opacity: 1 },  
      })

    const fromRight = useSpring({
        config: {mass:1, tension:500, friction:118},
        from: { x: 100, opacity: 0, },
        to: { x: 0, opacity: 1 },  
      }) 

    const animateFromLeft = {
        overflow: "hidden",
        ...fromLeft,
    }
    
    const animateFromRight = {
        overflow: "hidden",
        ...fromRight,
    }

    return (
        <nav style={animateFromLeft} className={props.darkMode ? "nav nav--dark" : "nav"}>
            <animated.span style={animateFromLeft} className="nav--logo">Matej Kardum</animated.span>
            <animated.ul style={animateFromLeft} className={props.darkMode ? "nav--links nav--links--dark" : "nav--links"}>
                <li className="nav--link"><a href="#about">About</a></li>
                <li className="nav--link"><a href="#projects">Projects</a></li>
                <li className="nav--link"><a href="#skills">Skills</a></li>
                <li className="nav--link"><a href="#contact">Contact</a></li>
            </animated.ul>
            {props.darkMode ? 
            <animated.div className="mode--switch" style={animateFromRight}><BsFillSunFill style={animateFromRight} onClick={props.toggleMode} /></animated.div>
            : <animated.div className="mode--switch" style={animateFromRight}><BsFillMoonStarsFill style={animateFromRight} onClick={props.toggleMode} /></animated.div>
            }
            {/* <animated.button style={animateFromRight} className={props.darkMode ? "nav--btn nav--btn--dark" : "nav--btn"} onClick={props.toggleMode}>Change</animated.button> */}
        </nav>
    )
}