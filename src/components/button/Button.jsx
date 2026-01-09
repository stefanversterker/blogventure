import './Button.css';

function Button({buttonLabel, type, disabled, value, handleClick}) {


    return (
        <>
            <button
                className="button"
                type={type}
                value={value}
                onClick={handleClick}
                disabled={disabled}
            >
                {buttonLabel}
            </button>
        </>
    )
}


export default Button;