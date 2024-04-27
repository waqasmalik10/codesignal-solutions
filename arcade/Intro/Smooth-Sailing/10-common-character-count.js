/*******************
 * Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*****************/
const solution = (s1, s2) => {
    let commonChars = 0;
    const arr1 = s1.split(''), arr2 = s2.split('');
    for(let a of arr1) {
        const index = arr2.indexOf(a)
        if(index!==-1) {
            commonChars++;
            arr2[index]=null;
        }
    }
    return commonChars;
}