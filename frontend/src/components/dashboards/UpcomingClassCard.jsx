import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import "../../styles/upcomingClassCard.css";

function UpcomingClassCard({ subject, time, room }) {
    return (
        <div className="upcoming-class-card">
            <h3 className="class-subject">{subject}</h3>
            <div className="class-info-list">
                <div className="class-info-item">
                    <FaClock className="info-icon" />
                    <span>{time}</span>
                </div>
                <div className="class-info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <span>{room}</span>
                </div>
            </div>
        </div>
    );
}

export default UpcomingClassCard;
