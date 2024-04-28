function PersonalDisplay({ submittedData }) {
    return (
        <div className="personal-display">
            <h1>{submittedData.fullName}</h1>
            <div className="additional-info">
                <p>{submittedData.email}</p>
                <p>{submittedData.phone}</p>
                <p>{submittedData.address}</p>
            </div>
        </div>
    )
}

export default PersonalDisplay;