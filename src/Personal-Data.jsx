import { useState } from "react";
import CustomInput from "./Custom-Input";
import PersonalDataForm from "./Forms";

function FormSection({ finalData, setFinalData }) {
    const [inputData, setInputData] = useState(finalData);

    function handleInputChange(event, key) {
        console.log(event.target)
        const { name, value } = event.target;
        setInputData({ ...inputData, [key]: { ...inputData[key], [name]: value} });
    }

    function handleSubmitForm(event, key) {
        event.preventDefault()
        setFinalData({ ...inputData, [key]: { ...inputData[key] }})
    }

    return (
        <>
        <PersonalDataForm inputData={inputData} onChange={(event) => handleInputChange(event, "personal")} onSubmit={(event) => handleSubmitForm(event, "personal")} />
        <form action="#">
            {inputData.education.map(item => {
                return (
                    <CustomInput key={item.id} labelName="School" name="school" id={item.id} value={item.school} onChange={(event) => handleInputChange(event, "education", item.id)} />
                )
            })}
        </form>
        </>
    )
}

export default FormSection;