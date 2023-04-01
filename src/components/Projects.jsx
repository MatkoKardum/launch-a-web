import data from "../data"
import { animated } from '@react-spring/web'
import { AnimationOnScroll } from "react-animation-on-scroll"

export default function Projects(props) {

    function handleHover() {
        console.log("Pizza")
    }

    const projectsElements = data.map(project => {
        return (
            <div className="project" key={project.key}>
                <img src={project.img} alt={project.name} className="project--img" />
                <div className="project--overlay">
                    <div className="project--name">{project.name}</div>
                    <a href={project.url} target="_blank"><button className="project--btn">Click to view</button></a>
                </div>
            </div>
        )
    })

    return (
        <AnimationOnScroll animateOnce={true} delay={2} animateIn="animate__backInUp">
            <section className={props.darkMode ? "projects projects--dark" : "projects"} id="projects" >
               {projectsElements}
            </section>
        </AnimationOnScroll>
    )
}