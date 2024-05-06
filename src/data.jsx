import uniqid from 'uniqid';

const data = {
    personal: {
        fullName: "Gojo Satoru",
        email: "satorugojo@jujutsu.com",
        phone: "123 456 789",
        address: "Tokyo, Japan"
    },
    education: [
        {
            id: uniqid(),
            school: "Gojo Clan",
            degree: "Sorcerer Grade 1",
            startDate: "2004",
            endDate: "2010",
            location: "Kyoto, Japan"
        },
        {
            id: uniqid(),
            school: "Tokyo Jujutsu School",
            degree: "Sorcerer Special Grade",
            startDate: "2010",
            endDate: "2014",
            location: "Tokyo, Japan"
        }
    ],
    experience: [
        {
            id: uniqid(),
            company: "Tokyo Metropolitan College",
            position: "Teacher",
            startDate: "2014",
            endDate: "2018",
            location: "Tokyo, Japan",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam eligendi ducimus nobis culpa? Reprehenderit distinctio rerum, tenetur vel veritatis ducimus! Minus rerum blanditiis numquam amet sed sapiente! Id, fuga."
        },
        {
            id: uniqid(),
            company: "Jujutsu Society",
            position: "Jujutsu Sorcerer",
            startDate: "2014",
            endDate: "present",
            location: "Tokyo, Japan",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora sequi esse cumque nemo, debitis delectus iste pariatur accusantium. Hic vel praesentium omnis sunt totam reiciendis eligendi, beatae doloremque vero maiores."
        },
    ]
}

export default data;