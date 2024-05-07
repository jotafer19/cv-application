function PersonalFormDisplay({ inputData }) {
  return (
    <div className="items-container">
      <div className="item-form">
        {inputData.personal.fullName !== "" && (
          <div className="input-group">
            <p className="p-label">Full name</p>
            <p className="p-display">{inputData.personal.fullName}</p>
          </div>
        )}
        {inputData.personal.email !== "" && (
          <div className="input-group">
            <p className="p-label">Email</p>
            <p className="p-display">{inputData.personal.email}</p>
          </div>
        )}
        {inputData.personal.phone !== "" && (
          <div className="input-group">
            <p className="p-label">Phone</p>
            <p className="p-display">{inputData.personal.phone}</p>
          </div>
        )}
        {inputData.personal.address !== "" && (
          <div className="input-group">
            <p className="p-label">Address</p>
            <p className="p-display">{inputData.personal.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function EducationFormDisplay({ inputData }) {
  return (
    <div className="items-container">
      {inputData.education.map((item) => {
        return (
          <div className="item-form" key={item.id}>
            <div className="input-group">
              <p className="p-label">School</p>
              <p className="p-display">{item.school}</p>
            </div>
            <div className="input-group">
              <p className="p-label">Degree</p>
              <p className="p-display">{item.degree}</p>
            </div>
            <div className="input-group">
              <p className="p-label">Start date</p>
              <p className="p-display">{item.startDate}</p>
            </div>
            <div className="input-group">
              <p className="p-label">End date</p>
              <p className="p-display">{item.endDate}</p>
            </div>
            <div className="input-group">
              <p className="p-label">Location</p>
              <p className="p-display">{item.location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ExperienceFormDisplay({ inputData }) {
  return (
    <div className="items-container">
      {inputData.experience.map((item) => {
        return (
          <div className="item-form" key={item.id}>
            <div className="input-group">
              <p className="p-label">Company</p>
              <p className="p-display">{item.company}</p>
            </div>
            <div className="input-group">
              <p className="p-label">Degree</p>
              <p className="p-display">{item.position}</p>
            </div>
            <div className="input-group">
              <p className="p-label">Start date</p>
              <p className="p-display">{item.startDate}</p>
            </div>
            <div className="input-group">
              <p className="p-label">End date</p>
              <p className="p-display">{item.endDate}</p>
            </div>
            <div className="input-group">
              <p className="p-label">Location</p>
              <p className="p-display">{item.location}</p>
            </div>
            <div className="input-group">
              <p className="p-label">Description</p>
              <p className="p-display">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { PersonalFormDisplay, EducationFormDisplay, ExperienceFormDisplay };
