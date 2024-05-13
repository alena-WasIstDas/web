const st1: Student = {
    id: "st1",
    name: "st1",
    courses: {
        [1]: {
            id: 1,
            title: "First",
            rate: 5,
            role: "student",
            level: "middle"
        }
    },
}

const tch1: Teacher = {
    id: "tch1",
    name: "tch1",
    level: "junior",
    courses: {
        [5]: {
            id: 5,
            title: "Fifth",
            role: "teacher"
        },
        [1]: {
            ...s1.courses[1],
            role: "teacher"
        }
    }
}

const dr1: Director = {
    id: "dr1",
    name: "dr1",
    students: {
        "st1": {
            id:"st1",
            name:"st1",
            role:"student"
        },
        "st2": {
            id: "st2",
            name: "st2",
            role:"student"
        }
    },
    teachers: {
        "tch1": {
            ...tch1,
            rate: 3,
            role:"teacher"
        },
        "tch2": {
            id: "tch2",
            name: "tch2",
            level: "senior",
            rate: 5,
            role:"teacher"
        }
    }
}