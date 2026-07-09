import "../../styles/Navbar.css"

const NAV_SECTIONS = [
    "Home",
    "Features",
    "About",
    "Login",
    "Register"
]

function Navbar() {
    const navSections = NAV_SECTIONS.map((section) => (
        <li key={section}>
            <a href="#">
                {section}
            </a>
        </li>
    ))
    return (
        <nav>
            <h1>ClassPulse</h1>
            <ul>
                {navSections}
            </ul>
        </nav>
    );
}

export default Navbar