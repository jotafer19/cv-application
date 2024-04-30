function CustomInput({ labelName, name, id, value, type="text", onChange }) {
    return (
        <div className="input-group">
            <label htmlFor={name + "-" + id}>
                {labelName}
            </label>
            <input
                name={name}
                id={name + "-" + id}
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}

export default CustomInput;