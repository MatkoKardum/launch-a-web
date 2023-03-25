import { useSpring, animated } from '@react-spring/web'

export default function Hero(props) {
    const fromTop = useSpring({
        config: {mass:1, tension:1500, friction:200 },
        from: { y: -100, opacity: 0, },
        to: { y: 0, opacity: 1 },  
      }) 

      const animateFromTop = {
        overflow: "hidden",
        ...fromTop
      }

      const fromBottom = useSpring({
        config: {mass:1, tension:500, friction:118},
        from: { y: 100, opacity: 0, },
        to: { y: 0, opacity: 1 },  
      }) 

      const animateFromBottom = {
        overflow: "hidden",
        ...fromBottom
      }

    return (
        <section className={props.darkMode ? "hero hero--dark" : "hero"}>
            <animated.h1 style={animateFromTop} className="hero--heading">I am Matej Kardum <br /> a <u>Frontend Developer</u></animated.h1>
            <a href="#about"><animated.button href="about" style={animateFromBottom} className={props.darkMode ? "hero--btn hero--btn--dark" : "hero--btn"}>View more</animated.button></a>
        </section>
    )
}