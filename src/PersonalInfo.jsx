import CustomInput from "./CustomInput"

function PersonalInfo({ fullName, email, phone, address, onChange}) {
  return (
      <div className="personal-info input-container">
        <h2>Personal Information</h2>
        <CustomInput id="fullName" labelName="Full name" value={fullName} onChange={onChange} />
        <CustomInput id="email" type="email" labelName="Email" value={email} onChange={onChange} />
        <CustomInput id="phone" type="tel" labelName="Phone" value={phone} onChange={onChange} />
        <CustomInput id="address" labelName="Address" value={address} onChange={onChange} />
      </div>
  )
}

export default PersonalInfo;