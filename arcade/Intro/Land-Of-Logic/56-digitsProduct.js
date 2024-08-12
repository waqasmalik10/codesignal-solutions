/**********
 * Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
solution(product) = 26;
For product = 19, the output should be
solution(product) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/
const solution = product => {
    if(product<10) return (product===0 ? 10 : product);
    let n = 9;
    let result = "";
    while(n>1) {
        if(product===1) return parseInt(result);
        if(product%n===0) {
            result = n + result;
            product = product/n;
        } else {
            n--;
        }
    }
    return -1;
}