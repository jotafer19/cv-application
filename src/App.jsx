import { useState } from "react";
import data from "./components/data";
import Header from "./components/header/Header";
import FormSection from "./components/forms/Form-Section";
import DisplaySection from "./components/Display-Section";

function App() {
  const [finalData, setFinalData] = useState(data);

  return (
    <>
      <Header />
      <main>
        <FormSection finalData={finalData} setFinalData={setFinalData} />
        <DisplaySection finalData={finalData} />
      </main>
    </>
  );
}

export default App;
