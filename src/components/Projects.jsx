import project from "../assets/project.png"
import { animated } from '@react-spring/web'

export default function Projects(props) {

    function handleHover() {
        console.log("Pizza")
    }

    return (
        <animated.section style={props.animateFromBottom} className={props.darkMode ? "projects projects--dark" : "projects"} id="projects" >
            <div className="project">
                <img src={project} alt="project" className="project--img" />
                <div className="project--overlay">
                    <div className="project--name">John Doe</div>
                    <button className="project--btn">Click to view</button>
                </div>
            </div>
            <div className="project">
                <img src={project} alt="project" className="project--img" />
                <div className="project--overlay">
                    <div className="project--name">John Doe</div>
                    <button className="project--btn">Click to view</button>
                </div>
            </div>
            <div className="project">
                <img src={project} alt="project" className="project--img" />
                <div className="project--overlay">
                    <div className="project--name">John Doe</div>
                    <button className="project--btn">Click to view</button>
                </div>
            </div>
            <div className="project">
                <img src={project} alt="project" className="project--img" />
                <div className="project--overlay">
                    <div className="project--name">John Doe</div>
                    <button className="project--btn">Click to view</button>
                </div>
            </div>
            <div className="project">
                <img src={project} alt="project" className="project--img" />
                <div className="project--overlay">
                    <div className="project--name">John Doe</div>
                    <button className="project--btn">Click to view</button>
                </div>
            </div>
            <div className="project">
                <img src={project} alt="project" className="project--img" />
                <div className="project--overlay">
                    <div className="project--name">John Doe</div>
                    <button className="project--btn">Click to view</button>
                </div>
            </div>
        </animated.section>
    )
}