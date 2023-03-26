import { animated } from '@react-spring/web'

export default function Hero(props) {
    return (
        <section className={props.darkMode ? "hero hero--dark" : "hero"}>
            <animated.h1 style={props.animateFromTop} className="hero--heading">I am Matej Kardum <br /> a <u>Frontend Developer</u></animated.h1>
            <a href="#about"><animated.button href="about" style={props.animateFromBottom} className={props.darkMode ? "hero--btn hero--btn--dark" : "hero--btn"}>View more</animated.button></a>
        </section>
    )
}