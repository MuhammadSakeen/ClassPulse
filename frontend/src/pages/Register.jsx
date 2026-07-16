import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Register() {
    return (
        <div className="register-page">
            <div className="register-card">
                <h1>ClassPulse</h1>
                <h2>Welcome, New User</h2>
                <p>Register Now, to enter classroom</p>
                <Input LeftIcon={<FaUser />} type="text" placeholder="Enter your Name"/>
                <Input LeftIcon={<FaEnvelope />} type="email" placeholder="Enter your Email"/>
                <Input LeftIcon={<FaLock />} type="password" placeholder="Set Password"/>
                <Input LeftIcon={<FaLock />} type="password" placeholder="Confirm Password"/>
                <Button>
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Register