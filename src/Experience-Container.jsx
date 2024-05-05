import { useState } from "react";
import { ExperienceDataForm } from "./Forms";
import { ExperienceFormDisplay } from "./Form-Display";

function ExperienceContainer({ inputData, onChange, onSubmit, onDelete, onAdd }) {
    const [isActive, setIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);

    function handleOnSubmit(event) {
        onSubmit(event, "experience");
        setEditMode(!editMode)
    }

    return (
        <div className="experience data-container">
            <button className="section-button" onClick={() => setIsActive(!isActive)}>
                <h2>Experience</h2>
            </button>
            {isActive && (
                editMode ? (
                    <form className="data-form experience-form" action="#" onSubmit={handleOnSubmit}>
                        <div className="items-container">
                            {inputData.experience.map(item => {
                                return <ExperienceDataForm
                                    key={item.id}
                                    item={item}
                                    onChange={(event) => onChange(event, item.id, "experience")}
                                    onDelete={() => onDelete(item.id, "experience")} />
                            })}
                        </div>
                        <button className="btn btn-add" type="button" onClick={() => onAdd("experience")}>Add</button>
                        <button className="btn btn-save" type="submit">Save</button>
                    </form>
                ) : (
                    <div className="data-form experience-form">
                        <ExperienceFormDisplay inputData={inputData} />
                        <button className="btn btn-edit" onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>
                )
            )}
        </div>
    )
}

export default ExperienceContainer;