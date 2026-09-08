import "../../styles/StatCard.css"

function StatCard({title, value}) {
    return (
        <div className="stat-card">
            <p>{value}</p>
            <h3>{title}</h3>
        </div>
    );
}

export default StatCard