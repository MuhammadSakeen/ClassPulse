import Button from "../common/Button";
import "../../styles/Hero.css"

function Hero() {
    return (
        <section className="hero">
            <h1>ClassPulse</h1>
            <h2>Context-Based Classroom Presence Verification and Engagement Platform</h2>

            <p>A secure platform that verifies students'
                physical classroom presence using Bluetooth
                Low Energy (BLE) while improving classroom
                engagement through quizzes and analytics.</p>

            <Button>Get Started</Button>
        </section>
    );
}

export default Hero