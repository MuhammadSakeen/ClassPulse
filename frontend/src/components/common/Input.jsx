import "../../styles/input.css"

function Input({ leftIcon, type, placeholder, value, onChange, rightIcon, onRightIconClick }) {
    return (
        <div className="input-field">
            {leftIcon}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div className="right-icon" onClick={onRightIconClick}>
                {rightIcon}
            </div>
        </div>
    );
}

export default Input