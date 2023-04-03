import { animated } from '@react-spring/web'
import earth from "../assets/earth.png"
import darkEarth from "../assets/earth-dark.png"

export default function Hero(props) {
    return (
        <section className={props.darkMode ? "hero hero--dark" : "hero"}>
            <div className="globe"><img src={props.darkMode ? earth : darkEarth} alt="earth spinning" /></div>
            <div className="hero--wrapper">
            <animated.h1 style={props.animateFromTop} className="hero--heading">We are <span className="green underline bold">LaunchAWeb</span> <br /> A website building team</animated.h1>
            <a href="#about"><animated.button href="about" style={props.animateFromBottom} className={props.darkMode ? "hero--btn hero--btn--dark" : "hero--btn"}>View more</animated.button></a>
            </div>
        </section>
    )
}