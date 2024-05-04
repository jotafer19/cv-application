import { useState } from "react";
import { PersonalDataForm } from "./Forms";
import { PersonalFormDisplay } from "./Form-Display";

function PersonalContainer({ inputData, onChange, onSubmit }) {
    const [isActive, setIsActive] = useState(true);
    const [editMode, setEditMode] = useState(false);

    function handleSubmitButton(event) {
        onSubmit(event, "personal")
        setEditMode(!editMode)
    }

    return (
        <div className="personal input-section">
            <button className="section-button" onClick={() => setIsActive(!isActive)}>
                <h2>Personal Information</h2>
            </button>
            {isActive && (
                editMode ? (
                    <form className="data-form personal-form" action="#" onSubmit={handleSubmitButton}>
                        <PersonalDataForm inputData={inputData} onChange={onChange} />
                        <button className="btn btn-save" type="submit">Save</button>
                    </form>
                ) : (
                    <div className="data-display">
                        <PersonalFormDisplay inputData={inputData} />
                        <button className="btn btn-edit" onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>
                )
            )}
        </div>
    )
}

export default PersonalContainer