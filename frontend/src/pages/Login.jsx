import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/login.css"

function Login() {
    return (
        <div className="login-page">
            <div className="login-card">
                <h1>ClassPulse</h1>
                <h2>Welcome Back!</h2>
                <p>Login to continue your classroom journey.</p>
                <Input icon={<FaEnvelope />} type="email" placeholder="Enter your email..." />
                <Input icon={<FaLock />} type="password" placeholder="Enter your password..." />
                <p className="forgot-password">Forgot password ?</p>
                <Button>
                    Login
                </Button>
                <p className="register-link">New user?{" "}<Link to="/register">Register</Link></p>
            </div>
        </div>
    );
}

export default Login