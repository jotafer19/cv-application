import { useState } from "react";
import { PersonalDataForm } from "../forms/Forms";
import { PersonalFormDisplay } from "../forms/Form-Display";

function PersonalContainer({ inputData, onChange, onSubmit }) {
    const [isActive, setIsActive] = useState(true);
    const [editMode, setEditMode] = useState(false);

    function handleSubmitButton(event) {
        onSubmit(event, "personal")
        setEditMode(!editMode)
    }

    return (
        <div className="personal data-container">
            <button className="section-button" onClick={() => setIsActive(!isActive)}>
                <h2>Personal Information</h2>
            </button>
            {isActive && (
                editMode ? (
                    <form className="data-form personal-form" action="#" onSubmit={handleSubmitButton}>
                        <div className="items-container">
                            <PersonalDataForm inputData={inputData} onChange={onChange} />
                        </div>
                        <button className="btn btn-save" type="submit">Save</button>
                    </form>
                ) : (
                    <div className="data-form personal-form">
                        <PersonalFormDisplay inputData={inputData} />
                        <button className="btn btn-edit" onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>
                )
            )}
        </div>
    )
}

export default PersonalContainer