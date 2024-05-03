import { useState } from "react";
import { ExperienceDataForm } from "./Forms";

function ExperienceContainer({ inputData, onChange, onSubmit, onDelete }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="experience input-section">
            <button onClick={() => setIsActive(!isActive)}>
                <h2>Experience</h2>
            </button>
            {isActive && 
                <div className="form-container">
                    {inputData.experience.map(item => {
                        return <ExperienceDataForm 
                            key={item.id} 
                            item={item} 
                            onChange={(event) => onChange(event, item.id, "experience")} 
                            onSubmit={(event) => onSubmit(event, "experience")} 
                            onDelete={() => onDelete(item.id, "experience")} />
                    })}
                </div>
            }
        </div>
    )
}

export default ExperienceContainer;