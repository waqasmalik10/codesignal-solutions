/************
 * Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
solution(st) = "abcdcba".

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string st

A string consisting of lowercase English letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/
const isPalindrome = arr => {
    let start = 0, end = arr.length-1;
    while(start<=end) {
        if(arr[start]!=arr[end]) return false;
        start++;
        end--;
    }
    return true;
}
const solution = st => {
    const arr = st.split("");
    const length = arr.length;
    const prefix = [];
    for(let i=0; i<length; i++) {
        if(isPalindrome(arr)) break;
        prefix.push( ...arr.splice(0,1) )
    }
    return prefix.join("") + arr.join("") + prefix.reverse().join("")
}