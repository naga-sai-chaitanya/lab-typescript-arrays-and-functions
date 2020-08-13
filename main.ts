import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {
  constructor() {}

  public arrayMultiply(myArray: number[]): Array<Number> {
    let i: number = 1;
    var multiples: Number[];
    let c: number = 0;
    for (i = 1; i < myArray.length; i++) {
      if (myArray[i] % 5 == 0 && myArray[i] % 10 == 0) {
        multiples[c] = myArray[i];
        c += 1;
      }
    }
    return multiples;
  }

  public arraySeparate(myArray: any): Array<string> {
    let i: number = 1;
    var string_values = [];
    let c: number = 0;
    for (i = 1; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        string_values[c].push(myArray[i]);
        c += 1;
      }
    }
    return string_values;
  }

  public arraySplit(str: string): Array<number> {
    const temp = str.split(",");
    const primeArray = [];
    let k = 0;
    for (var i = 0; i < temp.length; i++) {
      let y = +temp[i];
      for (var j = 2; j < y; j++) {
        if (y % j === 0) continue;
        else {
          primeArray[k] = y;
          k++;
        }
      }
    }
    return primeArray;
  }

  public arraySort(myArray: any): Array<string> {
    myArray.sort();
    myArray.reverse();
    return myArray;
  }

  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) myArray[i] = 5;
    }
    return myArray;
  }
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
