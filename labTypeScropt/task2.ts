type User = {
    id: string;
    name: string;
}

type Course = {
    id: number;
    title: string;
}

type WithRate = {
    rate: 1 | 2 | 3 | 4 | 5;
}

type WithStudentRole = {
    role: "student"
}

type WithTeacherRole = {
    role: "teacher"
}

type WithLevel = {
    level: "junior" | "middle" | "senior"
}

type StudentCourse = Course & WithStudentRole & WithRate & WithLevel
type Student = User & { courses: { [id: number]: StudentCourse } }

type TeacherCourse = Course & WithTeacherRole
type Teacher = User & WithLevel & { courses: { [id: number]: TeacherCourse } }

type DirectorStudent = User & WithStudentRole
type DirectorTeacher = User & WithTeacherRole & WithRate & WithLevel
type Director = User & {
    students: { [id: string]: DirectorStudent },
    teachers: { [id: string]: DirectorTeacher }
}

/*--  проверка  --*/
const s1: Student = {
    id: "s1",
    name: "s1",
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

const t1: Teacher = {
    id: "t1",
    name: "t1",
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

const d1: Director = {
    id: "d1",
    name: "d1",
    students: {
        "s1": {
            id: "s1",
            name: "s1",
            role: "student"
        },
        "s2": {
            id: "s2",
            name: "s2",
            role:"student"
        }
    },
    teachers: {
        "t1": {
            ...t1,
            rate: 3,
            role:"teacher"
        },
        "t2": {
            id: "t2",
            name: "t2",
            level: "senior",
            rate: 5,
            role: "teacher"
        }
    }
}