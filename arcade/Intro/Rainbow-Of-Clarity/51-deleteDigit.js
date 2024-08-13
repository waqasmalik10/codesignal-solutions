/**********
 * Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/
const solution = n => {
    let max = 0;
    const arr = n.toString().split("");
    for(let i=0; i<arr.length; i++) {
        const t = [...arr];
        t.splice(i, 1);
        if(max<parseInt(t.join(""))) max = parseInt(t.join(""));
    }
    return max;
}