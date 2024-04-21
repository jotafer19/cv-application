import PersonalInfo from "./PersonalInfo"
import Education from "./Education";
import { useState } from "react"
import data from "./data"

function AddPersonalInfo() {
    const [info, setInfo] = useState(data);

    function handleOnChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      
      setInfo({ ...info, [name]: value })
    }
  
    return (
      <>
      <PersonalInfo fullName={info.fullName} email={info.email} phone={info.phone} address={info.address} onChange={handleOnChange} />
      <Education school={info.school} degree={info.degree} startDate={info.schoolStart} endDate={info.schoolEnd} location={info.schoolLocation} onChange={handleOnChange} />
      </>
    )
  }
  
  export default AddPersonalInfo;