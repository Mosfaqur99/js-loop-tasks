/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

*/
let i = 81;
let sum = 0;

while( i <= 131){
    if(i%2 !== 0 ){
        sum = sum + i;
        console.log(i)
        console.log("Sum of the odd numbers:"+sum)
    }
    i++;
}


/*Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let n = 206;
let total = 0;

while( n <= 311){
    if(n%2 ===0){
        total = total + n;
        console.log(n)
        console.log("sum of the even Numbers"+ total)
    }
    n++;
}
