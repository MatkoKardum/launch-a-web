export default function Footer(props) {
    return (
        <section className={props.darkMode ? "footer footer--dark" : "footer"}>
            <span className="footer--text">&copy; LaunchAWeb {new Date().getFullYear()}</span>
        </section>
    )
}