export default function Footer(props) {
    return (
        <section className={props.darkMode ? "footer footer--dark" : "footer"}>
            <span className="footer--text">&copy; Matej Kardum {new Date().getFullYear()}</span>
        </section>
    )
}