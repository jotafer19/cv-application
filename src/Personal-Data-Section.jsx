import { useState } from "react"
import CustomInput from "./Custom-Input";

export default function PersonalSection({ data, onChange, onSubmit }) {
    return (
        <section>
            <h2>Personal Details</h2>
            <PersonalForm data={data} onChange={onChange} onSubmit={onSubmit} />
        </section>
    )
}

function PersonalForm({ data, onChange, onSubmit }) {
    const [editMode, setEditMode] = useState(false);

    function handleEditClick() {
        setEditMode(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setEditMode(false);
        onSubmit();
    }

    return (
        <div className="personal-info-container">
            {editMode ? (
                <form action="#" onSubmit={handleSubmit}>
                    <CustomInput labelName="Full name" id="fullName" value={data.fullName} onChange={onChange} />
                    <CustomInput labelName="Email" id="email" value={data.email} type="email" onChange={onChange} />
                    <CustomInput labelName="Phone" id="phone" value={data.phone} type="tel" onChange={onChange} />
                    <CustomInput labelName="Address" id="address" value={data.address} onChange={onChange} />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <p>Full name</p>
                    <p>{data.fullName}</p>
                    <p>Email</p>
                    <p>{data.email}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )}
        </div>
    )
}