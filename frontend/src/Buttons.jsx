import { useState } from "react";

function Buttons() {
    const [ button, setButton ] = useState(1)
    console.log("Button Rendered!")
    console.log(button)
    function clickHandler() {
        setButton(button + 1)
        console.log("hello world!!!")
    }
    return (
        <>
            <button onClick={clickHandler}>ClickMe</button>
        </>
    );
}

export default Buttons