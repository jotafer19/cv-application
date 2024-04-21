function CustomInput({ id, labelName, type="text", value, onChange }) {
    return (
        <div className="input-group">
        <label htmlFor={id}>
            {labelName}
        </label>
        <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
        />
        </div>
    )
}

export default CustomInput;