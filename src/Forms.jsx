import CustomInput from "./Custom-Input"

// function PersonalDataForm({ inputData, onChange, onSubmit, onClick }) {
//     return (
//         <form action="#" onSubmit={onSubmit}>
//             <CustomInput labelName="Full name" name="fullName" id="fullName" value={inputData.personal.fullName} onChange={onChange} />
//             <CustomInput labelName="Email" name="email" id="email" value={inputData.personal.email} type="email" onChange={onChange} />
//             <CustomInput labelName="Phone" name="phone" id="phone" value={inputData.personal.phone} type="tel" onChange={onChange} />
//             <CustomInput labelName="Address" name="address" id="address" value={inputData.personal.address} onChange={onChange} />
//             <button type="submit" onClick={onClick}>Save</button>
//         </form>
//     )
// }

function PersonalDataForm({ inputData, onChange }) {
    return (
        <>
            <CustomInput labelName="Full name" name="fullName" id="fullName" value={inputData.personal.fullName} onChange={onChange} />
            <CustomInput labelName="Email" name="email" id="email" value={inputData.personal.email} type="email" onChange={onChange} />
            <CustomInput labelName="Phone" name="phone" id="phone" value={inputData.personal.phone} type="tel" onChange={onChange} />
            <CustomInput labelName="Address" name="address" id="address" value={inputData.personal.address} onChange={onChange} />
        </>
    )
}

function EducationDataForm({ item, onChange, onSubmit, onDelete }) {
    return (
        <form action="#" onSubmit={onSubmit}>
            <CustomInput labelName="School" name="school" id={item.id} value={item.school} onChange={onChange} />
            <CustomInput labelName="Degree" name="degree" id={item.id} value={item.degree} onChange={onChange} />
            <CustomInput labelName="Start date" name="startDate" id={item.id} value={item.startDate} type="num" onChange={onChange} />
            <CustomInput labelName="End date" name="endDate" id={item.id} value={item.endDate} type="num" onChange={onChange} />
            <CustomInput labelName="Location" name="location" id={item.id} value={item.location} onChange={onChange} />
            <button type="submit">Edit</button>
            <button type="button" onClick={onDelete}>Delete</button>
        </form>
    )
}

function ExperienceDataForm({ item, onChange, onSubmit, onDelete }) {
    return (
        <form action="#" onSubmit={onSubmit}>
            <CustomInput labelName="Company" name="company" id={item.id} value={item.company} onChange={onChange} />
            <CustomInput labelName="Position" name="position" id={item.id} value={item.position} onChange={onChange} />
            <CustomInput labelName="Start date" name="startDate" id={item.id} value={item.startDate} type="num" onChange={onChange} />
            <CustomInput labelName="End date" name="endDate" id={item.id} value={item.endDate} type="num" onChange={onChange} />
            <CustomInput labelName="Location" name="location" id={item.id} value={item.location} onChange={onChange} />
            <button type="submit">Edit</button>
            <button type="button" onClick={onDelete}>Delete</button>
        </form>
    )
}

export { PersonalDataForm, EducationDataForm, ExperienceDataForm };