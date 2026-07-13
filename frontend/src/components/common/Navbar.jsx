import "../../styles/Navbar.css"
import { Link } from "react-router-dom";

const NAV_SECTIONS = [
    {
        name: "Home",
        path: "/"
    },{
        name: "Features",
        path: "/#features"
    },{
        name: "About",
        path: "/#footer"
    },{
        name: "Login",
        path: "/login"
    },{
        name: "Register",
        path: "/register"
    }
]

function Navbar() {
    const navSections = NAV_SECTIONS.map((section) => (
        <li key={section.name}>
            <Link to={section.path}>
                {section.name}
            </Link>
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