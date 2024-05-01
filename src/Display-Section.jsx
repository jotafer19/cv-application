function DisplaySection({ finalData }) {
    const { personal, education, experience } = finalData;

    return (
        <section>
            <div className="personal-data container">
                <h1>{personal.fullName}</h1>
                <div className="additional-info">
                    <p>{personal.email}</p>
                    <p>{personal.phone}</p>
                    <p>{personal.address}</p>
                </div>
            </div>
            <div className="education-data container">
                <h3>Education</h3>
                <div className="items-container">
                    {education.map(item => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="item-info">
                                    <div className="dates">
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
                                    <p>{item.school}</p>
                                    <p>{item.degree}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="experience-data container">
                <h3>Experience</h3>
                <div className="items-container">
                    {experience.map(item => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="item-info">
                                    <div className="dates">
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
                                    <p>{item.company}</p>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DisplaySection;