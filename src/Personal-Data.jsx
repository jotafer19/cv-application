import { useState } from "react";
import uniqid from 'uniqid';
import PersonalContainer from "./Personal-Container";
import EducationContainer from "./Education-Container";
import ExperienceContainer from "./Experience-Container";

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

    function handleDeleteItem( id, key) {
        const newItems = inputData[key].filter(item => item.id !== id);
        const newInputData = { ...inputData, [key]: newItems }
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
        <section>
            <PersonalContainer inputData={inputData} onChange={(event) => handleInputChange(event, "personal")} onSubmit={handleSubmitForm} />
            <EducationContainer inputData={inputData} onChange={handleEditItem} onSubmit={handleSubmitForm} onDelete={handleDeleteItem} />
            <ExperienceContainer inputData={inputData} onChange={handleEditItem} onSubmit={handleSubmitForm} onDelete={handleDeleteItem} />
        </section>
    )
}

export default FormSection;