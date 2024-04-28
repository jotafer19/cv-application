import { useState } from "react";
import data from "./data";
import PersonalSection from "./Personal-Data-Section";
import PersonalDataDisplay from "./Personal-Data-Display";
import EducationSection from "./Education-Section";

function App() {
  const [personalData, setPersonalData] = useState(data.personal);
  const [educationData, setEducationData] = useState(data.education);
  const [submittedData, setSubmittedData] = useState(data);

  function handlePersonalData(event) {
    const { name, value } = event.target
    setPersonalData({ ...personalData, [name]: value })
  }

  function handleEducationData(event, id) {
    const { name, value } = event.target;
    setEducationData(educationData.map(item => {
      if (item.id === id) {
        return (
          {...item, [name]: value}
        )
      } else {
        return item;
      }
    }))
  }

  function handleSubmittedData() {
    setSubmittedData({personal: personalData, education: educationData})
  }

  return (
    <>
      <PersonalSection data={personalData} onChange={handlePersonalData} onSubmit={handleSubmittedData} />
      <PersonalDataDisplay submittedData={submittedData.personal} />
      <EducationSection data={educationData} onChange={handleEducationData} />
    </>
  )
}

export default App;