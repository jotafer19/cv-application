import { useState } from "react";
import CustomInput from "./Custom-Input";
import uniqid from 'uniqid';
import { PersonalDataForm, EducationDataForm, ExperienceDataForm } from "./Forms";

function FormSection({ finalData, setFinalData }) {
    const [inputData, setInputData] = useState(finalData);

    function handleInputChange(event, key) {
        const { name, value } = event.target;
        setInputData({ ...inputData, [key]: { ...inputData[key], [name]: value} });
    }

    function handleSubmitForm(event, key) {
        event.preventDefault()
        if (key === "personal") {
            setFinalData({ ...inputData, [key]: { ...inputData[key] } })
        } else {
            setFinalData({ ...inputData,[key]: [ ...inputData[key] ] })
        }
    }

    function handleEditItem(event, id, key) {
        const { name, value } = event.target
        setInputData({ ...inputData, [key]: inputData[key].map(item => {
            if (item.id === id) {
                return { ...item, [name]: value };
            } else {
                return item;
            }
        }) })
    }

    function handleDeleteItem(event, id, key) {
        const newItems = inputData[key].filter(item => item.id !== id);
        const newInputData = { ...inputData, [key]: newItems }
        console.log(newInputData)
        setInputData(newInputData)
        setFinalData(newInputData)
    }

    function handleAddItem(event, key) {
        if (key === "education") {
            setInputData({ ...inputData, [key]: [ ...inputData[key], {
                id: uniqid(),
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
            } ]})
        }
    }

    return (
        <>
        <PersonalDataForm inputData={inputData} onChange={(event) => handleInputChange(event, "personal")} onSubmit={(event) => handleSubmitForm(event, "personal")} />
        {inputData.education.map(item => {
            return <EducationDataForm key={item.id} item={item} onChange={(event) => handleEditItem(event, item.id, "education")} onSubmit={(event) => handleSubmitForm(event, "education")} onDelete={(event) => handleDeleteItem(event, item.id, "education")} />
        })}
        <button onClick={(event) => handleAddItem(event, "education")}>Add Education</button>
        {inputData.experience.map(item => {
            return <ExperienceDataForm key={item.id} item={item} onChange={(event) => handleEditItem(event, item.id, "experience")} onSubmit={(event) => handleSubmitForm(event, "experience")} onDelete={(event) => handleDeleteItem(event, item.id, "experience")} />
        })}
        <button onClick={(event) => handleAddItem(event, "education")}>Add Education</button>
        </>
    )
}

export default FormSection;