//problem 1

function filterEvenNumbers(num: number[]): number[]{
    return num.filter((value)=>value%2===0);
}

//problem 2

function reverseString(input: string): string{
    let returnValue = "";
    for(let i = input.length -1; i>=0 ; i--){
        returnValue+= input[i];
    }
    return returnValue;
}

//problem 3

type StringOrNumber = string | number;

function checkType(input : StringOrNumber){
    if(typeof input === 'string')
        return "String"
    else if(typeof input == "number")
        return "number";
}

// Problem 4

const user = { id: 1, name: "John Doe", age: 21 };

function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(params: Book) {
  return {
    ...params,
    isRead: true,
  };
}

