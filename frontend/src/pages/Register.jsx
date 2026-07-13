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
                <Input icon={<FaUser />} type="text" placeholder="enter your name"/>
                <Input icon={<FaEnvelope />} type="email" placeholder="enter your email"/>
                <Input icon={<FaLock />} type="password" placeholder="set password"/>
                <Input icon={<FaLock />} type="password" placeholder="confirm password"/>
                <Button>
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Register