import { useState } from "react";

function Input({ label, type, value, handler }) {
  return (
    <label> 
      {label}
      <input
        type={type}
        value={value}
        onChange={handler}
      />
    </label>
  )
}

function PersonalInfo() {
  const [fullName, setFullName] = useState("");

  function handleChange(event) {
    setFullName(event.target.value)
  }

  return (
    <>
      <Input type="text" label="Full name" value={fullName} handler={handleChange} />
    </>
  )
}

export default PersonalInfo;