let n=61;
console.log("all the odd numbers from 61 to 100.");
/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

while (n <=100){
    if(n%2 === 1){
        console.log(n)
    }
    n++;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
console.log("all the even numbers from 78 to 98.");
let i = 78;
while(i<=98){
    if(i%2 ===0){
        console.log(i)
    }
    i++;
}