import CustomInput from "./Custom-Input"

function PersonalDataForm({ inputData, onChange, onSubmit }) {
    return (
        <form action="#" onSubmit={onSubmit}>
            <CustomInput labelName="Full name" name="fullName" id="fullName" value={inputData.personal.fullName} onChange={onChange} />
            <CustomInput labelName="Email" name="email" id="email" value={inputData.personal.email} type="email" onChange={onChange} />
            <CustomInput labelName="Phone" name="phone" id="phone" value={inputData.personal.phone} type="tel" onChange={onChange} />
            <CustomInput labelName="Address" name="address" id="address" value={inputData.personal.address} onChange={onChange} />
            <button type="submit">Edit</button>
            <h2>Input data: {inputData.personal.fullName}</h2>
        </form>
    )
}

export default PersonalDataForm;