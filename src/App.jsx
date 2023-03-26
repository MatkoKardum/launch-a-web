import { useState } from "react";
import { useSpring } from '@react-spring/web'
import { useMediaQuery } from 'react-responsive'
import "animate.css/animate.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {
        setDarkMode(prevState => !prevState);
  }

  const fromTop = useSpring({
    config: {mass:1, tension:1500, friction:200 },
    from: { y: -100, opacity: 0, },
    to: { y: 0, opacity: 1 },  
  }) 

  const fromBottom = useSpring({
    config: {mass:1, tension:500, friction:118},
    from: { y: 100, opacity: 0, },
    to: { y: 0, opacity: 1 },  
  }) 

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

  const animateFromTop = {
    overflow: "hidden",
    ...fromTop
  }

  const animateFromBottom = {
    overflow: "hidden",
    ...fromBottom
  }


const animateFromLeft = {
    overflow: "hidden",
    ...fromLeft,
}

const animateFromRight = {
    overflow: "hidden",
    ...fromRight,
}

const isDesktop = useMediaQuery({ query: '(min-width: 480px)' })
const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <div className="page">
      <Navbar 
        toggleMode={toggleMode}
        darkMode={darkMode}
        animateFromLeft={animateFromLeft} 
        animateFromRight={animateFromRight}
        isDesktop={isDesktop}
        isMobile={isMobile} />
      <Hero
        darkMode={darkMode} 
        animateFromBottom={animateFromBottom} 
        animateFromTop={animateFromTop} />
      <About
        darkMode={darkMode} 
      />
      <Projects 
        darkMode={darkMode} 
      />
      <Skills
        darkMode={darkMode} 
      />
      <Contact
        darkMode={darkMode} 
      />
      <Footer darkMode={darkMode} />
    </div>
  )
}

