import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About(props) {
    return (
        <section id="about" className={props.darkMode ? "about about--dark" : "about"}>
            <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
                <h2 className="about--title">About us</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
                <p className="about--text">
                What is LaunchAWeb? 
                LaunchAWeb is a web design company that has been providing exceptional services to its clients. The company's main objective is to help businesses expand by creating a strong online presence for them. They do this by adding their clients' brands and products to the World Wide Web so that they can be seen by everyone.

                One of the core services that LaunchAWeb provides is website design. Their team of expert designers works closely with clients to create visually appealing and user-friendly websites that reflect their brand identity. They ensure that the website is easy to navigate, intuitive, and engaging. Additionally, they employ the latest design trends and technologies to make the website stand out from the competition.
                </p>
                <p className="about--text">
                In addition to website design, LaunchAWeb also offers website development services. Their team of experienced developers works diligently to build websites that are responsive and optimized for all devices. They ensure that the website loads quickly and is optimized for search engines, making it easier for potential customers to find it.

                LaunchAWeb understands that a website is a dynamic entity that requires regular updates and maintenance. Therefore, they offer website maintenance services to ensure that their clients' websites are up-to-date, secure, and running smoothly. Their team of experts performs routine checks to identify and fix any issues that may arise, preventing any downtime for their clients' websites.
                </p>
                <p className="about--text">
                Moreover, LaunchAWeb provides marketing services to help their clients promote their websites and reach a wider audience. They develop marketing strategies tailored to their clients' needs and goals, using various channels such as social media, email marketing, and search engine optimization.

                In summary, LaunchAWeb is a web design company that provides a wide range of services aimed at helping businesses establish a strong online presence. Their team of experts works closely with clients to understand their needs and goals and provide customized solutions that meet their requirements. From website design and development to maintenance and marketing, LaunchAWeb has everything you need to succeed in the online world.
                </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInUp" >
                <div className="about--icons">
                    <a href="https://twitter.com/LaunchAWeb56910" target="_blank" className={props.darkMode ? "icons icons--dark" : "icons"}><FaTwitter className="about--icon" /></a>
                    <a href="https://www.tiktok.com/@launchaweb" target="_blank" className={props.darkMode ? "icons icons--dark" : "icons"}><FaTiktok className="about--icon" /></a>
                    <a href="https://www.instagram.com/launchaweb/" target="_blank" className={props.darkMode ? "icons icons--dark" : "icons"}><FaInstagram className="about--icon" /></a>
                    <a href="https://www.facebook.com/LaunchAWeb/" target="_blank" className={props.darkMode ? "icons icons--dark" : "icons"}><FaFacebook className="about--icon" /></a>
                </div >
            </AnimationOnScroll>
        </section>

    )
}