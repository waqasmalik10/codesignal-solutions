/*************************** 
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.

[output] integer

The maximal absolute difference.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*************************/
function solution(inputArray) {
    return inputArray.reduce( (acc,val, index, arr) => acc=Math.abs(val-arr[index-1])>acc ? Math.abs(val-arr[index-1]) : acc , 0);
}
