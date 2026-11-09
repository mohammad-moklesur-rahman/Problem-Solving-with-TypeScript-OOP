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