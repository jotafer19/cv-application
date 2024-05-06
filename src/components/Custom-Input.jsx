function CustomInput({ labelName, name, id, value, type="text", onChange }) {
    return (
        <div className="input-group">
            <label className="p-label" htmlFor={name + "-" + id}>
                {labelName}
            </label>
            <>
                {type === "textarea" ? (
                    <textarea 
                        className="input"
                        name={name}
                        id={name + "-" + id}
                        type={type}
                        value={value}
                        onChange={onChange}
                        cols="30"
                        rows="6"
                    />
                ) : (
                    <input
                        className="input"
                        name={name}
                        id={name + "-" + id}
                        value={value}
                        type={type}
                        onChange={onChange}
                    />
                )}
            </>
        </div>
    )
}

export default CustomInput;