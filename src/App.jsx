import { useState } from "react";
import data from "./data";
import FormSection from "./Personal-Data";


function App() {
  const [finalData, setFinalData] = useState(data);

  return (
    <>
      <FormSection finalData={finalData} setFinalData={setFinalData} />
      <h1>{finalData.personal.fullName}</h1>
    </>
  )
}

export default App;