/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let x=5;
let multiplication = 1;

while(x <= 25){

    if(x%5 ===0){
        multiplication = multiplication * x
        console.log(multiplication)
    }
    x++;
}