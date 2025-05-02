let i=1;

while(i<=10){
    console.log(i);
    i++;
}



let j=1;
let n=2;
while(j<=10){
    // console.log(n+"*"+j+"="+(n*j));
    console.log(`${n}*${j}=${n*j}`);
    
    j++;
}

// let k=12;
// do{
//     console.log(k); // This will run at least once even if the condition is false
//     k++;
    
// }
// while(k<=10); // This will not run because k is greater than 10

let k=1;
do{
    console.log(k);
    k++;
    
}
while(k<=10);


// let choice;
// do{
//     alert("Press 1:for option 1\nPress 2:for option 2\n 2.Exit");
//     choice=prompt("Enter your choice");

//     if(choice==1){
//         alert("You have selected option 1");
//     }
//     else if(choice==2){
//         alert("You have selected option 2");
//     }
//     else if(choice==3){
//         alert("You have selected Exit");
//     }
//     else{
//         alert("Invalid choice");
//     }
        
// } while (choice != 3);

//check number is even or odd using function

function checkEvenOdd(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(checkEvenOdd(15)); 


//find maximum of two numbers using function

function findMax(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log("Max Num is:"+findMax(10,20)); 

//Print numbers from 1 to n

function printNumbers(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}
printNumbers(5);

// find the sum of first n natural numbers using function

function findSum(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}
console.log("Sum of first n natural numbers is:"+findSum(6));


//count how many times a digit 5 appear in anumber


function countDigit(num,digit){
    let count=0;
    while(num>0) // it is used because we dont know how many digits are in the number
    {
      let rem=num%10; 
      if(rem==digit) // check if the last digit is equal to the digit we want to count
        count++;
       num=(num-(num%10))/10; // remove last digit
    //    num=Math.floor(num); // we can use this also to remove last digit
        
    }
    return count;
}
console.log("count of digit 5 is:"+countDigit(565655,5)); 

