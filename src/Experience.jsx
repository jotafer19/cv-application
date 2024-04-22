import CustomInput from "./CustomInput";

function Experience({ companyName, positionName, experienceStart, experienceEnd, experienceLocation, description, onChange }) {
    return (
        <div className="experience input-container">
            <h2>Experience</h2>
            <CustomInput id="companyName" label="Company" value={companyName} onChange={onChange} />
            <CustomInput id="positionName" label="Position title" value={positionName} onChange={onChange} />
            <CustomInput id="experienceStart" label="Start date" type="num" value={experienceStart} onChange={onChange} />
            <CustomInput id="experienceEnd" label="End date" type="num" value={experienceEnd} onChange={onChange} />
            <CustomInput id="experienceLocation" label="Location" value={experienceLocation} onChange={onChange} />
            <CustomInput id="description" label="Description" value={description} onChange={onChange} />
        </div>
    )
}

export default Experience;