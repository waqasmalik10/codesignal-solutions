/********
 * Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

solution(n) = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

Matrix size, a positive integer.

Guaranteed constraints:
3 ≤ n ≤ 100.

[output] array.array.integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/
const solution = n => {
    const arr = new Array(n); 
    for(let i=0; i<n; i++) arr[i] = new Array(n);
    return addSpiralEntries(arr, 1, 0, n-1, 0, n-1, );
}

function addSpiralEntries(arr, cur_val, startRow, endRow, startCol, endCol) {
    if(startRow>endRow && startCol>endCol) return arr;
    // fill the start row 
    for(let i=startCol; i<=endCol; i++) {
        arr[startRow][i] = cur_val;
        cur_val++;
    }
    // fill the last column 
    for(let i=startRow+1; i<=endRow; i++) {
        arr[i][endCol] = cur_val;
        cur_val++;
    }
    // fill the last row 
    for(let i=endCol-1; i>=startCol; i--) {
        arr[endRow][i] = cur_val;
        cur_val++
    }
    // fill the start col 
    for(let i=endRow-1; i>startRow; i--) {
        arr[i][startCol] = cur_val;
        cur_val++;
    }
    return addSpiralEntries(arr, cur_val, startRow+1, endRow-1, startCol+1, endCol-1);
}