import CustomInput from "./CustomInput";

function Education({ school, degree, startDate, endDate, location, onChange }) {
    return (
        <div className="education input-container">
            <h2>Education</h2>
            <CustomInput id="school" labelName="School" value={school} onChange={onChange} />
            <CustomInput id="degree" labelName="Degree" value={degree} onChange={onChange} />
            <CustomInput id="schoolStart" labelName="Start date" type="num" value={startDate} onChange={onChange} />
            <CustomInput id="schoolEnd" labelName="End date" type="num" value={endDate} onChange={onChange} />
            <CustomInput id="schoolLocation" labelName="Location" value={location} onChange={onChange} />
        </div>
    )
}

export default Education;