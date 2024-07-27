/**************
 * Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 100.

[output] string

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
 */

const solution = inputString => {
    let i=0, result='', arr = inputString.split("");
    while( !isNaN( parseInt(arr[i]) ) ) {
        result+= arr[i];
        i++;
    }
    return result;
}