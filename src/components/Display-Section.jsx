import emailIcon from "../assets/icons/mail.svg"
import phoneIcon from "../assets/icons/phone.svg"
import addressIcon from "../assets/icons/address.svg"

function DisplaySection({ finalData }) {
    const { personal, education, experience } = finalData;

    return (
        <section className="display-section">
            <div className="display-all-container">
                {Object.keys(personal).length !== 0 && (
                    <div className="personal-data display-container">
                        <h2 className="section-title">{personal.fullName}</h2>
                        <div className="additional-info">
                            <div className="additional-item">
                                {personal.email && <img className="icon" src={emailIcon} alt="Email icon" />}
                                <p>{personal.email}</p>
                            </div>
                            <div className="additional-item">
                                {personal.phone && <img className="icon" src={phoneIcon} alt="Phone icon" />}
                                <p>{personal.phone}</p>
                            </div>
                            <div className="additional-item">
                                {personal.address && <img className="icon" src={addressIcon} alt="Address icon" />}
                                <p>{personal.address}</p>
                            </div>
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
                                    <div className="item-info additional">
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
                                    <div className="item-info additional">
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