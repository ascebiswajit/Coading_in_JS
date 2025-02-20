// 6.reverse the array
const array = [0,9,9,93,93,99,93,99,3,3,5,56,7,8,2]
function ReverseArray(arr){
    return arr.reverse()


}
// const newArray = ReverseArray(array)

// console.log(newArray) 

// o/p:[2,  8,  7, 56,  5,  3,3, 99, 93, 99, 93, 93,9,  9,  0]

// without using inbuilt method

function ReverseArrayInbuilt(arr){

    let result = [];
    const arrayLength = arr.length;
    // console.log(arrayLength,'...arrylength')

    for(let i=arrayLength-1; i>=0;i--){
        // console.log(arr[i],'....')
        result.push(arr[i])
    }

    return result;

}
// console.log(ReverseArrayInbuilt(array))


// another way to reverse array using forEach and unshift
const reverseAnotherWay = (arr)=>{
    const newArray=[];

    arr.forEach((ele)=>{
console.log(ele)
newArray.unshift(ele)
    })
    return newArray
}
console.log(reverseAnotherWay(array))