function CustomInput({ labelName, id, value, type="text", onChange }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>
                {labelName}
            </label>
            <input
                name={id}
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}

export default CustomInput;