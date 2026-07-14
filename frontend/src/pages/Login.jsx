import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { FaEnvelope, FaEye, FaLock, FaEyeSlash } from "react-icons/fa";
import "../styles/login.css"
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin(e) {
        e.preventDefault();
        if (!email || !password) {
            setError("Please provide all the required fields")
            return
        }
        setError("")
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)
    }
    function handleRightIconClick() {
        setShowPassword((prev) => !prev)
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>ClassPulse</h1>
                <h2>Welcome Back!</h2>
                <p>Login to continue your classroom journey.</p>
                <form onSubmit={handleLogin}>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} leftIcon={<FaEnvelope />} type="email" placeholder="Enter your Email" />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} leftIcon={<FaLock />} rightIcon={showPassword ? <FaEyeSlash/> : <FaEye/>} type={showPassword ? "text" : "password"} placeholder="Enter your Password" onRightIconClick={handleRightIconClick}/>
                    <p className="forgot-password">Forgot password ?</p>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>
                    {error && <p className="error-message">{error}</p>}
                </form>
                <p className="register-link">New user?{" "}<Link to="/register">Register</Link></p>
            </div>
        </div>
    );
}

export default Login