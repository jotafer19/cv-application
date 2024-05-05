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
            location: "London, UK",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam eligendi ducimus nobis culpa? Reprehenderit distinctio rerum, tenetur vel veritatis ducimus! Minus rerum blanditiis numquam amet sed sapiente! Id, fuga."
        },
        {
            id: uniqid(),
            company: "Black Mesa Labs",
            position: "UI Designer",
            startDate: "2016",
            endDate: "2020",
            location: "Detroit, USA",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sequi esse cumque nemo, debitis delectus iste pariatur accusantium. Hic vel praesentium omnis sunt totam reiciendis eligendi, beatae doloremque vero maiores."
        },
    ]
}

export default data;