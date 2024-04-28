import { useState } from "react";
import CustomInput from "./Custom-Input";

function EducationSection({ data, onChange }) {
    const [editMode, setEditMode] = useState(false);

    function handleSubmitForm(event) {
        event.preventDefault()
        editMode ? (
            setEditMode(false)
        ) : (
            setEditMode(true)
        )
    }

    return (
        <section>
            <h2>Education</h2>
            <form action="#" onSubmit={handleSubmitForm}>
                {data.map(item => <EducationForm item={item} key={item.id} editMode={editMode} onChange={onChange} />)}
                <button type="submit">{editMode ? "Save" : "Edit"}</button>
            </form>

        </section>
    )
}

function EducationForm({ item, editMode, onChange }) {
    function handleInputChange(event) {
        onChange(event, item.id)
    }
    return (
        <div className="container">
            {editMode ? (
                <>
                    <CustomInput labelName="School" id="name" value={item.name} onChange={handleInputChange} />
                    <CustomInput labelName="Degree" id="degree" value={item.degree} onChange={handleInputChange} />
                    <CustomInput labelName="Start date" id="startDate" value={item.startDate} onChange={handleInputChange} />
                    <CustomInput labelName="End date" id="endDate" value={item.endDate} onChange={handleInputChange} />
                </>
            ) : (
                <>
                    <p>School</p>
                    <p>{item.name}</p>
                    <p>Degree</p>
                    <p>{item.degree}</p>
                    <p>Start date</p>
                    <p>{item.startDate}</p>
                    <p>End date</p>
                    <p>{item.endDate}</p>
                </>
            )}
        </div>
    )
}

export default EducationSection;