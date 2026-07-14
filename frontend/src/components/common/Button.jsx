import "../../styles/Button.css"

function Button({type="button", children, onClick, disabled}) {
    return <button type={type} onClick={onClick} disabled={disabled}>{children}</button>
}

export default Button