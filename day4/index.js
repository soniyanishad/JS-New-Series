// let marks=75;

// if(marks>=90){
//     console.log("Grade A");
    
// }
// else if(marks>=75){
//      console.log("Grade B");
     
// }
// else if(marks>=60){
//     console.log("Grade C");
    
// }
// else if(marks>=50){
//     console.log("Grade D");
    
// }
// else{
//     console.log("Grade F");
    
// }


// let day =7;

// if(day==1){
//     console.log("Monday");
    
// }
// else if(day==2){
//     console.log("Tuesday");
    
// }
// else if(day==3){
//     console.log("Wednesday");
    
// }
// else if(day==4){
//     console.log("Thursday");
    
// }
// else if(day==5){
//     console.log("Friday");
    
// }
// else if(day==6){
//     console.log("Saturday");
    
// }
// else if(day==7){
//     console.log("Sunday");
    
// }
// else{
//     console.log("Invalid day");
    
// }


//ternary operator
// let number=8;

// let result = (number%2 === 0) ? "Even" : "Odd";



// let number1=5;
// let number2=10;

// let max = (number1 > number2) ? number1 : number2;
// console.log("The maximum number is: " + max);


//Functions (alert, confirm, prompt)

// alert("Hello, World!");
// let value=confirm("Are you sure you want to proceed?");

// if(value){
//     console.log("proceed with the action");
    
// }
// else{
//     console.log(" Cancel");
    
// }


// let score=prompt("Enter your score: ");

// let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F";


let amount=prompt("Enter the amount: ");
console.log("Amount: " + amount);

let discount=Number(prompt("Enter the discount percentage: "));
console.log(typeof discount);

// console.log("Discount: " + discount);

if(isNaN(amount) || isNaN(discount)){
    console.log("Invalid input. Please enter numeric values.");
}
else
{let totalDiscount = amount * (discount / 100);
    console.log("Total discount: " + totalDiscount);
    
    let finalAmount = amount - (amount * (discount / 100));
    // console.log("The final amount after discount is: " + amount+"-"+totalDiscount+"="+finalAmount);
    
    // console.log(`The final amount after discount is: ${amount} - ${totalDiscount} = ${finalAmount}`);
    
    
    // NaN(Not a number)
    
    alert("Thanks for visiting.....\n"+"discount value:"+" "+discount+"\n"+"total discount:"+totalDiscount+"\n"+"final amount:"+finalAmount);
    
    } 
    
    

    
