import { animated } from '@react-spring/web'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';



export default function About(props) {
    return (
        <section id="about" className={props.darkMode ? "about about--dark" : "about"}>
            <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
                <h2 className="about--title">About me</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
                <p className="about--text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint expedita a quod mollitia corporis illo blanditiis doloribus possimus quaerat laudantium, maxime eius tempora quisquam molestiae architecto odit? Impedit, repellat, temporibus vero, unde illo suscipit natus fugit esse deserunt mollitia sed. Modi, dolorem quibusdam? Sint quis delectus tenetur, fugit aliquid rem, sunt totam cupiditate laborum, iure facere perspiciatis blanditiis dicta nobis labore quibusdam maxime perferendis dolore officiis ut! Numquam nobis facere cum doloremque incidunt ex! Ad quos molestias, necessitatibus nobis deserunt minima exercitationem repudiandae aspernatur illo cupiditate natus dolorem non quidem! Corporis, eum hic ipsum maiores atque similique libero consectetur eaque quasi obcaecati sit qui ullam. Id iusto praesentium exercitationem rerum explicabo officiis, et optio distinctio cumque deserunt vel quaerat culpa fugiat. Repellat eligendi distinctio dolor.
                </p>
                <p className="about--text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint expedita a quod mollitia corporis illo blanditiis doloribus possimus quaerat laudantium, maxime eius tempora quisquam molestiae architecto odit? Impedit, repellat, temporibus vero, unde illo suscipit natus fugit esse deserunt mollitia sed. Modi, dolorem quibusdam? Sint quis delectus tenetur, fugit aliquid rem, sunt totam cupiditate laborum, iure facere perspiciatis blanditiis dicta nobis labore quibusdam maxime perferendis dolore officiis ut! Numquam nobis facere cum doloremque incidunt ex! Ad quos molestias, necessitatibus nobis deserunt minima exercitationem repudiandae aspernatur illo cupiditate natus dolorem non quidem! Corporis, eum hic ipsum maiores atque similique libero consectetur eaque quasi obcaecati sit qui ullam. Id iusto praesentium exercitationem rerum explicabo officiis, et optio distinctio cumque deserunt vel quaerat culpa fugiat. Repellat eligendi distinctio dolor.
                </p>
                <p className="about--text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsam dolores illo magni nihil vel ducimus cum cumque illum laborum voluptatum, officiis voluptates nobis rem delectus. Dicta voluptates molestias exercitationem. Molestiae sunt nam facilis sed cupiditate iste ducimus ad quia fugit atque id magnam totam, consectetur, eum laboriosam maiores iure?
                </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInUp" >
                <div className="about--icons">
                    <FaGithub className="about--icon" />
                    <FaLinkedin className="about--icon" />
                    <FaTwitter className="about--icon" />
                </div >
            </AnimationOnScroll>
        </section>

    )
}