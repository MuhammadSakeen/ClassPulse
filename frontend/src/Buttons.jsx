import { useState } from "react";

function Buttons() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    function loginHandler() {
        setIsLoggedIn(!isLoggedIn)
    }
    

    return (
        <>  
            {isLoggedIn ? <p>Welcome!, Muhammad Sakeen N</p> : <p>Please Login</p>}
            <button onClick={loginHandler}>{isLoggedIn ? "Logout" : "Login"}</button>
        </>
    );
}

export default Buttons