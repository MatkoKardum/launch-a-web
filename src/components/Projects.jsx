import project from "../assets/project.png"
import { animated } from '@react-spring/web'
import { AnimationOnScroll } from "react-animation-on-scroll"

export default function Projects(props) {

    function handleHover() {
        console.log("Pizza")
    }

    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
            <section className={props.darkMode ? "projects projects--dark" : "projects"} id="projects" >
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
            </section>
        </AnimationOnScroll>
    )
}