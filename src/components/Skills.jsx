import { animated } from '@react-spring/web'

export default function Skills(props) {
    return (
        <animated.section style={props.animateFromTop} className={props.darkMode ? "skills skills--dark" : "skills"} id="skills" >
            <h2 className="skills--title">My Skills</h2>
            <div className="skills--wrapper">
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>HTML</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>CSS</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>Javascript</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>JQuery</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>Tailwind CSS</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>React JS</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>SCSS</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>Bootstrap</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>Vite</div>
                <div className={props.darkMode ? "skill skill--dark" : "skill"}>Parcel</div>
            </div>
        </animated.section>
    )
}