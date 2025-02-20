//1.  Reverse an Array

function ReverseArray(arr){
    let reverse = [];   
    for(let i=arr.length-1; i>=0; i--){

        reverse.push(arr[i]);
    }
return  reverse;
}

const array = [0,9,9,3,2,1,4,5,666,55,00,99,1,-7]

const arrr = [0,1,2,[3,4,5,[6,7,8,9],[10,11,12,13],44,85,9,99]]

const Output = arrr.flatMap(e=>e)

console.log(Output)


// const newResult = ReverseArray(array)
// console.log(newResult)

 
// assending order the array using inbuit method

function assendingOrder(arr){
    const sorted = array.sort((a,b)=>(a-b))
    return sorted;
}

// console.log(assendingOrder(array))


// ascending order the array without using inbuit method


function bubbleSort(arr){

    const n = arr.length

    for(let i=0; i<n-1; i++){
        // console.log(i,arr[i])
        for(let j=0;j<n-1-i;j++){
            // console.log(j,arr[j])

            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp  // swapping elements in the array
                // console.log(temp)
            }
        }
    }
    return arr;

}

// console.log(bubbleSort(array))
// remove duplicate from array 
function rmvDuplicate(arr){
    console.log(arr)
    const newArray = [...new Set(arr)]
    return newArray

}
// console.log(rmvDuplicate(array))

// removing duplicates from the array

function removeDuplicates(arr){
    let uniqueArr = [];
    for(let i=0; i<arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;
}

// console.log(removeDuplicates(array))


