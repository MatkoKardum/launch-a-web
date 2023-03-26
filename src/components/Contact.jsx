import { animated } from '@react-spring/web'

export default function Contact(props) {
    return (
        <section className={props.darkMode ? "contact contact--dark" : "contact"} id="contact" >
            <animated.h2 style={props.animateFromTop} className="contact--title">Contact me</animated.h2>
            <animated.form style={props.animateFromBottom} className="contact--form">
                <input type="text" className={props.darkMode ? "contact--name contact--name--dark" : "contact--name"} placeholder="Your name..." />
                <input type="text" className={props.darkMode ? "contact--email contact--email--dark" : "contact--email"} placeholder="Email..." />
                <textarea name="" id="" cols="30" rows="10" className={props.darkMode ? "contact--message contact--message--dark" : "contact--message"} placeholder="Type your message..." ></textarea>
                <button className={props.darkMode ? "contact--btn contact--btn--dark" : "contact--btn"}>Send now</button>
            </animated.form>
        </section>
    )
}