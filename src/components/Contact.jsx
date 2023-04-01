import { animated } from '@react-spring/web'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Contact(props) {
    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUpBig" duration={0.5} delay={500}>
            <section className={props.darkMode ? "contact contact--dark" : "contact"} id="contact" >
                <h2 className="contact--title">Contact me</h2>
                <form className="contact--form">
                    <input type="text" className={props.darkMode ? "contact--name contact--name--dark" : "contact--name"} placeholder="Your name..." />
                    <input type="text" className={props.darkMode ? "contact--email contact--email--dark" : "contact--email"} placeholder="Email..." />
                    <textarea name="" id="" cols="30" rows="10" className={props.darkMode ? "contact--message contact--message--dark" : "contact--message"} placeholder="Type your message..." ></textarea>
                    <button className={props.darkMode ? "contact--btn contact--btn--dark" : "contact--btn"}>Send now</button>
                </form>
            </section>
        </AnimationOnScroll>
    )
}