/*************
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.



For cell1 = "A1" and cell2 = "H3", the output should be
solution(cell1, cell2) = false.



Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string cell1

Guaranteed constraints:
cell1.length = 2,
'A' ≤ cell1[0] ≤ 'H',
1 ≤ cell1[1] ≤ 8.

[input] string cell2

Guaranteed constraints:
cell2.length = 2,
'A' ≤ cell2[0] ≤ 'H',
1 ≤ cell2[1] ≤ 8.

[output] boolean

true if both cells have the same color, false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
************ */
const solution = (cell1, cell2) => {
    const black = [], white = [], cols = ['A','B','C','D','E','F','G','H'], rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
    for(let i=0; i< cols.length; i++ ) {
        for(let j=0; j<rows.length; j++ ) {
            if(i%2===0) {
                if(j%2===0) {
                white.push( cols[i]+rows[j] );
                } else {
                    black.push( cols[i]+rows[j] )
                }
            } else {
                if(j%2===0) {
                    black.push( cols[i]+rows[j] ); 
                } else {
                    white.push( cols[i]+rows[j] );
                }
                
            }
        }
    }
    return (black.indexOf(cell1)!==-1 && black.indexOf(cell2)!==-1) || (white.indexOf(cell1)!==-1 && white.indexOf(cell2)!==-1);
}