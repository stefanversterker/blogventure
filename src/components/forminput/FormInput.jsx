import './FormInput.css'

function FormInput({htmlFor, labelText, type, id, name, value, onChange}) {
    return (

        <div className="label-and-input">
            <label htmlFor={htmlFor}>
                {labelText}
                <input
                    className="form-input"
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
            </label>
        </div>
    )
}

export default FormInput