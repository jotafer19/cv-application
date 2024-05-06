import { useState } from "react";
import { EducationDataForm } from "../forms/Forms";
import { EducationFormDisplay } from "../forms/Form-Display"

function EducationContainer({ inputData, onChange, onSubmit, onDelete, onAdd }) {
    const [isActive, setIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);

    function handleOnSubmit(event) {
        onSubmit(event, "education");
        setEditMode(!editMode)
    }

    return (
        <div className="education data-container">
            <button className="section-button" onClick={() => setIsActive(!isActive)}>
                <h2>Education</h2>
            </button>
            {isActive && (
                editMode ? (
                    <form className="data-form education-form" action="#" onSubmit={handleOnSubmit}>
                        <div className="items-container">
                            {inputData.education.map(item => {
                                return <EducationDataForm
                                    key={item.id}
                                    item={item}
                                    onChange={(event) => onChange(event, item.id, "education")}
                                    onDelete={() => onDelete(item.id, "education")} />
                            })}
                        </div>
                        <button className="btn btn-add" type="button" onClick={() => onAdd("education")}>Add</button>
                        <button className="btn btn-save" type="submit">Save</button>
                    </form>
                ) : (
                    <div className="data-form education-form">
                        <EducationFormDisplay inputData={inputData} />
                        <button className="btn btn-edit" onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>
                )
            )}
        </div>
    )
}

export default EducationContainer;