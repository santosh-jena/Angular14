class ArrayMapFunction{
// Assignments

/*
   let strArr = ["Santosh","Subham","Deepak"];
   1. convert each element to uppercase of given array using map method / function. 
*/

 toUpperCaseEachElement(){
 let strArr = ["Santosh","Subham","Deepak"];
 let result = strArr.map((item => item.toUpperCase()));
 console.log(result); // output : ['SANTOSH', 'SUBHAM', 'DEEPAK']
 }

 /*
       let numArr = [1,2,3,4,5,6];
     2. Multiplying by 2 with each element of given array.
 */
multiplyingByTwoForEachElement(){
 let numArr = [1,2,3,4,5,6];
 let result = numArr.map((x => x * 2));
 console.log(result); // [2, 4, 6, 8, 10, 12]
}

}
var ArrayMapObj = new ArrayMapFunction();
ArrayMapObj.multiplyingByTwoForEachElement();