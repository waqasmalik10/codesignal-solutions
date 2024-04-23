/*****************************
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

************************ */

const solution = sequence => {
    // handle first element 
    if(sequence.length===0) return true;
    for(let i=1; i<sequence.length; i++) {
        let case1 = true, case2 = true;;
        if(sequence[i]<=sequence[i-1]) {
            // try removing current element and check
            case1 = isArrayIncreasing( sequence.filter((n,index)=>index!==i) )
            // try removing previous element and check
            case2 = isArrayIncreasing( sequence.filter((n,index)=>index!==(i-1) ) )
            if(case1===false && case2===false) return false;
        }
    }
    return true;
}

const isArrayIncreasing = arr => {
    for(let i=1; i<arr.length; i++) {
        if(arr[i]<=arr[i-1]) return false;
    }
    return true;
}