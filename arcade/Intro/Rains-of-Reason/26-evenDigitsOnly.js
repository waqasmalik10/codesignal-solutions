/*************
 * Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
solution(n) = true;
For n = 642386, the output should be
solution(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] boolean

true if all digits of n are even, false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
 * ************** */
const solution = n => {
    return n.toString().split('').filter(num=>num%2===1).length===0;
}
