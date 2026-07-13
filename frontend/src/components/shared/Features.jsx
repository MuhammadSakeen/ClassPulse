import FeatureCard from "./FeatureCard";
import "../../styles/Features.css"
import { FaBluetoothB, FaChartLine, FaRobot } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const FEATURES = [
    {
        icon: <FaBluetoothB />,
        title: "Proximity Verification",
        description: "Verify students using BLE technology."
    },
    {
        icon: <FaChartLine />,
        title: "Student Analytics",
        description: "Monitor classroom participation."
    },
    {
        icon: <MdQuiz />,
        title: "Live Quiz",
        description: "Conduct quizzes during lectures."
    },
    {
        icon: <FaRobot />,
        title: "AI Engagement",
        description: "Analyze classroom engagement using AI."
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

