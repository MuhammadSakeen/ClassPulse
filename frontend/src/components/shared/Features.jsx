import FeatureCard from "./FeatureCard";
import "../../styles/Features.css"
import { FaKey, FaChartLine, FaRobot } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const FEATURES = [
    {
        icon: <FaKey />,
        title: "Dynamic Session Code",
        description: "Securely verify classroom participation using time-sensitive session codes."
    },
    {
        icon: <FaChartLine />,
        title: "Classroom Analytics",
        description: "Track attendance, quiz performance, and classroom participation."
    },
    {
        icon: <MdQuiz />,
        title: "Live Quiz",
        description: "Conduct interactive quizzes during live classroom sessions."
    },
    {
        icon: <FaRobot />,
        title: "AI Analytics",
        description: "Generate classroom insights and engagement reports using AI."
    }
]

function Features() {

    const features = FEATURES.map((feature) => {
        return <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
    })

    return (
        <section id="features" className="features">

            <h2>Our Features</h2>

            <div className="feature-container">
                {features}
            </div>

        </section>
    );
}

export default Features

