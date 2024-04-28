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
            name: "London University",
            degree: "Robotics",
            startDate: "2020",
            endDate: "2024",
        },
        {
            id: uniqid(),
            name: "New York University",
            degree: "Mathematics",
            startDate: "2016",
            endDate: "2020",
        }
    ]
}

export default data;