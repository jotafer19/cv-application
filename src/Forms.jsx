import CustomInput from "./Custom-Input"

function PersonalDataForm({ inputData, onChange }) {
    return (
        <div className="item-form">
            <CustomInput labelName="Full name" name="fullName" id="fullName" value={inputData.personal.fullName} onChange={onChange} />
            <CustomInput labelName="Email" name="email" id="email" value={inputData.personal.email} type="email" onChange={onChange} />
            <CustomInput labelName="Phone" name="phone" id="phone" value={inputData.personal.phone} type="tel" onChange={onChange} />
            <CustomInput labelName="Address" name="address" id="address" value={inputData.personal.address} onChange={onChange} />
        </div>
    )
}

function EducationDataForm({ item, onChange, onDelete }) {
    return (
        <div className="item-form">
            <CustomInput labelName="School" name="school" id={item.id} value={item.school} onChange={onChange} />
            <CustomInput labelName="Degree" name="degree" id={item.id} value={item.degree} onChange={onChange} />
            <CustomInput labelName="Start date" name="startDate" id={item.id} value={item.startDate} type="num" onChange={onChange} />
            <CustomInput labelName="End date" name="endDate" id={item.id} value={item.endDate} type="num" onChange={onChange} />
            <CustomInput labelName="Location" name="location" id={item.id} value={item.location} onChange={onChange} />
            <button className="btn btn-delete" type="button" onClick={onDelete}>Delete</button>
        </div>
    )
}

function ExperienceDataForm({ item, onChange, onDelete }) {
    return (
        <div className="item-form">
            <CustomInput labelName="Company" name="company" id={item.id} value={item.company} onChange={onChange} />
            <CustomInput labelName="Position" name="position" id={item.id} value={item.position} onChange={onChange} />
            <CustomInput labelName="Start date" name="startDate" id={item.id} value={item.startDate} type="num" onChange={onChange} />
            <CustomInput labelName="End date" name="endDate" id={item.id} value={item.endDate} type="num" onChange={onChange} />
            <CustomInput labelName="Location" name="location" id={item.id} value={item.location} onChange={onChange} />
            <CustomInput labelName="Description" name="description" id={item.id} value={item.description} type="textarea" onChange={onChange} />
            <button className="btn btn-delete" type="button" onClick={onDelete}>Delete</button>
        </div>
    )
}

export { PersonalDataForm, EducationDataForm, ExperienceDataForm };