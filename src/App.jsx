import { useState } from "react";
import data from "./data";
import FormSection from "./Personal-Data";
import DisplaySection from "./Display-Section";

function App() {
  const [finalData, setFinalData] = useState(data);

  return (
    <main>
      <FormSection finalData={finalData} setFinalData={setFinalData} />
      <DisplaySection finalData={finalData} />
    </main>
  )
}

export default App;