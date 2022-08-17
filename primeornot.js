// Program to check if the given number is prime or not

"use strict"

let number=2377787
let bol=false
if(number===2) 
    console.log(`Given number ${number} is  prime number`) 
else{
    for(let i=2;i<number;i++)
        if(number%i===0)
        {
        bol=true
        break 
        }

    if(bol)
        console.log(`Given number ${number} is not prime number`)
    else
        console.log(`Given number ${number} is  prime number`)
}