// * Problem 1

const multiplyValue = (value: number, multiplier: number = 2) : number => {
    return value * multiplier;
}
const result1 = multiplyValue(10);


// * Problem 2

const processInput = (value: string | number | boolean) => {
    if (typeof value === "string"){
        return value.trim().toLocaleLowerCase();
    }
    if (typeof value === "number"){
        return value * 10;
    }
    if (typeof value === "boolean"){
        if (value === true){
            return "Active";
        }else{
            return "Inactive";
        }
    }
}
const result2 = processInput("  TypeScript  ");


// * Problem 3

const formatCoordinate = (coordinates: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinates;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}
const result3 = formatCoordinate([23.81, 90.41, "Dhaka"]);


// * Problem 4

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
}
const result4 = concatenateArrays([1, 2], [3, 4], [5]);


// * Problem 5

interface Course {
    title: string,
    students: number,
    isPublished: boolean
}
const getPopularCourses = (Courses: Course[], minStudents: number) => {
    return Courses.filter(course => course.students > minStudents && course.isPublished);
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
const result5 = getPopularCourses(courses, 80);


// * Problem 6

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(item => item[key]);
}
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];
const result6 = pluckValues(users, "name");