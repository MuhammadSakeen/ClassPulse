import "../../styles/activityCard.css";

function ActivityCard({ icon, title, time }) {
    return (
        <div className="activity-card">
            <div className="activity-icon-container">
                {icon}
            </div>
            <div className="activity-details">
                <p className="activity-title">{title}</p>
                <span className="activity-time">{time}</span>
            </div>
        </div>
    );
}

export default ActivityCard;
