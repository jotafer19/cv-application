import { useState } from "react";
import { EducationDataForm } from "./Forms";

function EducationContainer({ inputData, onChange, onSubmit, onDelete }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="education input-section">
            <button onClick={() => setIsActive(!isActive)}>
                <h2>Education</h2>
            </button>
            {isActive && 
                <div className="form-container">
                    {inputData.education.map(item => {
                        return <EducationDataForm 
                            key={item.id} 
                            item={item} 
                            onChange={(event) => onChange(event, item.id, "education")} 
                            onSubmit={(event) => onSubmit(event, "education")} 
                            onDelete={() => onDelete(item.id, "education")} />
                    })}
                </div>
            }
        </div>
    )
}

export default EducationContainer;