// You can add both arrays element-wise in JavaScript. If one array is shorter, you can assume missing values are 0.
//  Here's how you can do it:
/*
const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


function arrayAdd(arr1, arr2) {
    const maxarray = Math.max(arr1.length, arr2.length)

    let result = [];
    for (let i = 0; i < maxarray; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0)
        console.log(sum, "...sum")
        result.push(sum)
    }
    console.log(maxarray)
    return result;

}
const result = arrayAdd(array1, array2)
console.log("result==========>", result)
*/

// question no:2
// think you have the two array , combine two arry and only unique character is present in new array
const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [8, 9, 10, 1, 2, 3, 4, 1, 16, 17];

                                                                               
const result = uniqueArr(array1,array2)                                                                                             