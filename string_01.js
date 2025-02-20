//1. anagram (if two input string is same length and same charater then these two word is called anagram)like {abc = cab}

function anagram(str1,str2){
    console.log(str1,str2)
    if(str1.length !=str2.length){
        return 'this word is not anagram'
    }else{
        const split1 = str1.toLowerCase().split('').sort().join('');
        const split2 = str2.toLowerCase().split('').sort().join('');
    
        console.log(split1,split2)
        return split1 === split2?'both word is anagram':'try another time with another word'
    }
    
}
console.log(anagram('Biswa','asiwb'))

// without inbuilt method
