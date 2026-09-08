import "../../styles/quickActionCard.css"

function QuickActionCard({ icon, title, onClick }) {
    return (
        <div className="quick-action-card" onClick={onClick}>
            <div className="action-icon">{icon}</div>

            <h3>{title}</h3>
        </div>
    );
}

export default QuickActionCard