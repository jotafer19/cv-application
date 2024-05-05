function DisplaySection({ finalData }) {
    const { personal, education, experience } = finalData;

    return (
        <section className="display-section">
            <div className="display-all-container">
                {Object.keys(personal).length !== 0 && (
                    <div className="personal-data display-container">
                        <h1 className="section-title">{personal.fullName}</h1>
                        <div className="additional-info">
                            <p>{personal.email}</p>
                            <p>{personal.phone}</p>
                            <p>{personal.address}</p>
                        </div>
                    </div>
                )}
                {education.length !== 0 && (
                    <div className="education-data display-container">
                        <h3 className="section-title">Education</h3>
                        <div className="display-items-container">
                        {education.map(item => {
                            return (
                                <div className="item" key={item.id}>
                                    <div className="item-info">
                                        <div className="item-dates">
                                            <p>
                                                {item.startDate}
                                                {item.startDate && item.endDate && " - "}
                                                {item.endDate}
                                            </p>
                                        </div>
                                        <div>
                                            {item.location}
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <p className="item-name">{item.school}</p>
                                        <p>{item.degree}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                )}
                {experience.length !== 0 && (
                    <div className="experience-data display-container">
                        <h3 className="section-title">Experience</h3>
                        <div className="display-items-container">
                        {experience.map(item => {
                            return (
                                <div className="item" key={item.id}>
                                    <div className="item-info">
                                        <div className="item-dates">
                                            <p>
                                                {item.startDate}
                                                {item.startDate && item.endDate && " - "}
                                                {item.endDate}
                                            </p>
                                        </div>
                                        <div>
                                            {item.location}
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <p className="item-name">{item.company}</p>
                                        <p>{item.position}</p>
                                        <p className="item-description">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}

export default DisplaySection;