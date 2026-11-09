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