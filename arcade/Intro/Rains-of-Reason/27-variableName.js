/**************
 * Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string name

Guaranteed constraints:
1 ≤ name.length ≤ 10.

[output] boolean

true if name is a correct variable name, false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
************** */
const solution = name => {
    return name.split('').filter(( c, index)=> (index===0 ? !isNaN(parseInt(c) || c===' ') : true) && c!=='_' && (c.toLowerCase()<'a' || c.toLowerCase()>'z') && ( index===0 ? true : isNaN(parseInt(c)) ) ).length===0;
}