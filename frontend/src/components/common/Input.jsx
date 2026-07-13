import "../../styles/input.css"

function Input({ icon, type, placeholder, value, onChange }) {
    return (
        <div className="input-field">  
            {icon}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input