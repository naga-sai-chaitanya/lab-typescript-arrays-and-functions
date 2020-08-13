export interface ArrayService {

}

export interface StringManipulationService 
{
    arrayFindMultiples(myArray : any) : Array<Number>;
    arraySeparate(myArray : any) : Array<string>;
    arraySplit(myString : string) : Array<number>;
    arraySort(myArray : any) : Array<number>;
    arrayReplace(myArray : any) : Array<Number>;
}
