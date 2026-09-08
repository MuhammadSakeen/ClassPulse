import DashboardNavbar from "../components/dashboards/DashboardNavbar";
import QuickActionCard from "../components/dashboards/QuickActionCard";
import StatCard from "../components/dashboards/StatCard";
import ActivityCard from "../components/dashboards/ActivityCard";
import UpcomingClassCard from "../components/dashboards/UpcomingClassCard";
import DashboardFooter from "../components/dashboards/DashboardFooter";
import {
    FaKey,
    FaClipboardList,
    FaHistory,
    FaUser,
    FaCheckCircle,
    FaFileAlt,
    FaUsers,
    FaStar
} from "react-icons/fa";
import "../styles/dashboard.css";

function StudentDashboard() {
    const studentName = "Muhammad Sakeen";

    const activities = [
        {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Attendance marked for DBMS",
            time: "Today, 10:30 AM"
        },
        {
            id: 2,
            icon: <FaFileAlt />,
            title: "Completed Operating Systems Quiz",
            time: "Today, 9:15 AM"
        },
        {
            id: 3,
            icon: <FaUsers />,
            title: "Joined Computer Networks Session",
            time: "Yesterday, 2:00 PM"
        },
        {
            id: 4,
            icon: <FaStar />,
            title: "Scored 8/10 in DBMS Quiz",
            time: "Sep 6, 11:30 AM"
        }
    ];

    const upcomingClasses = [
        {
            id: 1,
            subject: "DBMS",
            time: "10:00 AM – 11:00 AM",
            room: "Room 204"
        },
        {
            id: 2,
            subject: "Operating Systems",
            time: "2:00 PM – 3:00 PM",
            room: "Room 301"
        },
        {
            id: 3,
            subject: "Computer Networks",
            time: "3:30 PM – 4:30 PM",
            room: "Room 105"
        }
    ];

    return (
        <div className="dashboard-page">
            <DashboardNavbar userName={studentName} />
            <main className="dashboard-container">
                <h2 className="section-title">Quick Actions</h2>
                <div className="quick-actions-grid">
                    <QuickActionCard
                        icon={<FaKey />}
                        title="Join Session"
                    />

                    <QuickActionCard
                        icon={<FaClipboardList />}
                        title="Attendance"
                    />

                    <QuickActionCard
                        icon={<FaHistory />}
                        title="Quiz History"
                    />

                    <QuickActionCard
                        icon={<FaUser />}
                        title="Profile"
                    />
                </div>

                <div className="overview-section">
                    <h2 className="section-title">Today's Overview</h2>
                    <div className="stats-grid">
                        <StatCard 
                            title="Attendance"
                            value="92%"
                        />
                        <StatCard 
                            title="Quiz Average"
                            value="88%"
                        />
                        <StatCard 
                            title="Sessions"
                            value="34"
                        />
                    </div>
                </div>

                <div className="dashboard-two-column">
                    <section className="activity-section">
                        <h2 className="section-title">Recent Activity</h2>
                        <div className="activity-list">
                            {activities.map((activity) => (
                                <ActivityCard
                                    key={activity.id}
                                    icon={activity.icon}
                                    title={activity.title}
                                    time={activity.time}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="classes-section">
                        <h2 className="section-title">Upcoming Classes</h2>
                        <div className="upcoming-classes-grid">
                            {upcomingClasses.map((item) => (
                                <UpcomingClassCard
                                    key={item.id}
                                    subject={item.subject}
                                    time={item.time}
                                    room={item.room}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <DashboardFooter />
        </div>
    );
}

export default StudentDashboard;