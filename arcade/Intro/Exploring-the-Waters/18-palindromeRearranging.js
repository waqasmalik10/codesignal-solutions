/***************************
 * Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
* ****************** */
const solution = inputString => {
    const map = {};
    let oneVals = 0;
    for(let a of inputString) {
        if(map[a]) {
            map[a]++
        } else {
            map[a] = 1;
        }
    }
    const keys = Object.keys(map);
    for(let i=0; i<keys.length; i++) {
        if(map[keys[i]]%2===1) oneVals++;
    }
    if(oneVals<=1) return true;
    return false;
}
