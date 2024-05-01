import uniqid from 'uniqid';

const data = {
    personal: {
        fullName: "Makima",
        email: "makima@csm.dog",
        phone: "123456789",
        address: "Public Safety, Tokyo, Japan"
    },
    education: [
        {
            id: uniqid(),
            school: "London University",
            degree: "Robotics",
            startDate: "2020",
            endDate: "2024",
            location: "London, UK"
        },
        {
            id: uniqid(),
            school: "New York University",
            degree: "Mathematics",
            startDate: "2016",
            endDate: "2020",
            location: "New York, USA"
        }
    ],
    experience: [
        {
            id: uniqid(),
            company: "Umbrella Inc.",
            position: "Director",
            startDate: "2020",
            endDate: "2024",
            location: "London, UK"
        },
        {
            id: uniqid(),
            company: "Black Mesa Labs",
            position: "UI Designer",
            startDate: "2016",
            endDate: "2020",
            location: "Detroit, USA"
        }
    ]
}

export default data;