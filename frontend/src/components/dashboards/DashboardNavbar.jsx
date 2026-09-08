import Button from "../common/Button";
import { FaRegUserCircle } from "react-icons/fa";
import "../../styles/dashboardNavbar.css"

function DashboardNavbar({ userName }) {
    return (
        <nav className="dashboard-navbar">
            <div className="navbar-logo">ClassPulse</div>
            <div className="profile-control">
                <FaRegUserCircle className="profile-icon"/>
                <span className="profile-name">{ userName }</span>
            </div>
        </nav>
    );
}

export default DashboardNavbar 