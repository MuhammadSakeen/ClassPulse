import DashboardNavbar from "../components/dashboards/DashboardNavbar";
import QuickActionCard from "../components/dashboards/QuickActionCard";
import StatCard from "../components/dashboards/StatCard";
import ActivityCard from "../components/dashboards/ActivityCard";
import UpcomingClassCard from "../components/dashboards/UpcomingClassCard";
import DashboardFooter from "../components/dashboards/DashboardFooter";
import {
    FaPlusCircle,
    FaTasks,
    FaFileAlt,
    FaChartBar,
    FaCheckCircle,
    FaClipboardList
} from "react-icons/fa";
import "../styles/dashboard.css";

function FacultyDashboard() {
    const facultyName = "Dr. Arun Kumar";

    const activities = [
        {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Session completed for DBMS",
            time: "Today, 10:45 AM"
        },
        {
            id: 2,
            icon: <FaFileAlt />,
            title: "Quiz published for Operating Systems",
            time: "Today, 9:30 AM"
        },
        {
            id: 3,
            icon: <FaClipboardList />,
            title: "Attendance updated for Computer Networks",
            time: "Yesterday, 3:45 PM"
        },
        {
            id: 4,
            icon: <FaPlusCircle />,
            title: "Session created for Database Management Systems",
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
            <DashboardNavbar userName={facultyName} />
            <main className="dashboard-container">
                <h2 className="section-title">Quick Actions</h2>
                <div className="quick-actions-grid">
                    <QuickActionCard
                        icon={<FaPlusCircle />}
                        title="Create Session"
                    />

                    <QuickActionCard
                        icon={<FaTasks />}
                        title="Manage Sessions"
                    />

                    <QuickActionCard
                        icon={<FaFileAlt />}
                        title="Create Quiz"
                    />

                    <QuickActionCard
                        icon={<FaChartBar />}
                        title="Analytics"
                    />
                </div>

                <div className="overview-section">
                    <h2 className="section-title">Today's Overview</h2>
                    <div className="stats-grid">
                        <StatCard 
                            title="Active Sessions"
                            value="2"
                        />
                        <StatCard 
                            title="Total Students"
                            value="128"
                        />
                        <StatCard 
                            title="Average Attendance"
                            value="89%"
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

export default FacultyDashboard;