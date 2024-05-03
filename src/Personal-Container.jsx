import { useState } from "react";
import { PersonalDataForm } from "./Forms";

function PersonalContainer({ inputData, onChange, onSubmit }) {
    const [isActive, setIsActive] = useState(true);
    const [editMode, setEditMode] = useState(false);

    function handleSubmitButton(event) {
        onSubmit(event, "personal")
        setEditMode(!editMode)
    }
    
    return (
        <div className="personal input-section">
            <button onClick={() => setIsActive(!isActive)}>
                <h2>Personal Information</h2>
            </button>
            {isActive && (
                editMode ? (
                    <form action="#" onSubmit={handleSubmitButton}>
                        <PersonalDataForm inputData={inputData} onChange={onChange} />
                        <button type="submit">Save</button>
                    </form>
                ) : (
                    <div>
                        <p>Full name</p>
                        <p>{inputData.personal.fullName}</p>
                        <p>Email</p>
                        <p>{inputData.personal.email}</p>
                        <p>Phone</p>
                        <p>{inputData.personal.phone}</p>
                        <p>Address</p>
                        <p>{inputData.personal.address}</p>
                        <button onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>
                ))}
        </div>
    )
}

export default PersonalContainer