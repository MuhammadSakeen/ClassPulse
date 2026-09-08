import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import {
    FaEnvelope,
    FaLock,
    FaUser,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleRegister(e) {
        e.preventDefault();
        console.log("Register clicked");
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("Please provide all the required fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            console.log({
                name,
                email,
                password,
            });
        }, 2000);
    }

    return (
        <div className="register-page">
            <div className="register-card">
                <h1>ClassPulse</h1>

                <h2>Welcome, New User</h2>

                <p>Register now to enter your classroom.</p>

                <form onSubmit={handleRegister}>
                    <Input
                        leftIcon={<FaUser />}
                        type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        leftIcon={<FaEnvelope />}
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        leftIcon={<FaLock />}
                        type={showPassword ? "text" : "password"}
                        placeholder="Set Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        rightIcon={
                            showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                        onRightIconClick={() =>
                            setShowPassword(!showPassword)
                        }
                    />

                    <Input
                        leftIcon={<FaLock />}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        rightIcon={
                            showConfirmPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )
                        }
                        onRightIconClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    />

                    <Button disabled={loading} type="submit">
                        {loading ? "Registering..." : "Register"}
                    </Button>
                </form>

                {error && <p className="error-message">{error}</p>}

                <div className="register-link">
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;