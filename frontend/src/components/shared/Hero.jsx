import Button from "../common/Button";
import "../../styles/Hero.css"

function Hero() {
    return (
        <section className="hero">
            <h1>ClassPulse</h1>
            <h2>Context-Based Classroom Presence Verification and Engagement Platform</h2>

            <p>A smart classroom platform that streamlines attendance, live quizzes, and classroom engagement using dynamic session codes and real-time analytics.</p>

            <Button>Get Started</Button>
        </section>
    );
}

export default Hero