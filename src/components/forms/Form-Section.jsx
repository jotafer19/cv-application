import { useState } from "react";
import data from "../data.jsx";
import uniqid from "uniqid";
import PersonalContainer from "../data-container/Personal-Container.jsx";
import EducationContainer from "../data-container/Education-Container.jsx";
import ExperienceContainer from "../data-container/Experience-Container.jsx";
import DataButtons from "../data-buttons/Data-Buttons.jsx";

function FormSection({ finalData, setFinalData }) {
  const [inputData, setInputData] = useState(finalData);

  function handleInputChange(event, key) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [key]: { ...inputData[key], [name]: value } });
  }

  function handleSubmitForm(event, key) {
    event.preventDefault();
    if (key === "personal") {
      setFinalData({ ...inputData, [key]: { ...inputData[key] } });
    } else {
      setFinalData({ ...inputData, [key]: [...inputData[key]] });
    }
  }

  function handleEditItem(event, id, key) {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [key]: inputData[key].map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      }),
    });
  }

  function handleDeleteItem(id, key) {
    const newItems = inputData[key].filter((item) => item.id !== id);
    const newInputData = { ...inputData, [key]: newItems };
    setInputData(newInputData);
    setFinalData(newInputData);
  }

  function handleAddItem(key) {
    if (key === "education") {
      setInputData({
        ...inputData,
        [key]: [
          ...inputData[key],
          {
            id: uniqid(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
          },
        ],
      });
    } else if (key === "experience") {
      setInputData({
        ...inputData,
        [key]: [
          ...inputData[key],
          {
            id: uniqid(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
          },
        ],
      });
    }
  }

  function clearForm() {
    const clearData = {
      personal: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
      },
      education: [],
      experience: [],
    };

    setInputData(clearData);
    setFinalData(clearData);
  }

  function loadExampleData() {
    setInputData(data);
    setFinalData(data);
  }

  return (
    <section className="form-section">
      <DataButtons clearData={clearForm} loadData={loadExampleData} />
      <PersonalContainer
        inputData={inputData}
        onChange={(event) => handleInputChange(event, "personal")}
        onSubmit={handleSubmitForm}
      />
      <EducationContainer
        inputData={inputData}
        onChange={handleEditItem}
        onSubmit={handleSubmitForm}
        onDelete={handleDeleteItem}
        onAdd={handleAddItem}
      />
      <ExperienceContainer
        inputData={inputData}
        onChange={handleEditItem}
        onSubmit={handleSubmitForm}
        onDelete={handleDeleteItem}
        onAdd={handleAddItem}
      />
    </section>
  );
}

export default FormSection;
