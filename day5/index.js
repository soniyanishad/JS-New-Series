function getName(firstName, lastName,age) //parameters
{
    console.log("Hello my name is: " + firstName + "-" + lastName + " and my age is: " + age);
    
}
getName("John", "Doe", 25); //arguments
getName("Jane", "Smith", 30); //arguments
getName("Alice", "Johnson", 28); //arguments


function sum(a,b)
{
    return a + b; // after the return statement, the function stops executing
}
// console.log(sum(5, 10)); // 15
let result = sum(5, 10); 
console.log(result+2); 

let result2 = sum(20, 30);
console.log(result2);


function abc()
{
    console.log("Hello from abc function");
    return 5; // this will be the return value of the function
    
}
console.log(abc()); // undefined, because the function does not return anything


function hello()
{
    console.log("Hello from hello function");
    
}
// day6

let fullName = function(name) 
{
//    console.log("Hello" + name);
return "Hello" + name; 
   
}
let data=fullName("Soniya"); 
console.log(data); 

//arrow function

let fullName2 = ()=>{
    console.log("Hello from arrow function");
}
fullName2(); 


for(let i=1;i<=3;i++)

{
    console.log("Hello Soniya");
    
}

//1. intialize i=1
//2. check i<=3, true
//3. execute the loop body, print "Hello Soniya"
//4. increment i by 1, i=2
//5. check 2<=3, true
//6. execute the loop body, print "Hello Soniya"
//7. increment i by 1, i=3
//8. check 3<=3, true
//9. execute the loop body, print "Hello Soniya"
//10. increment i by 1, i=4
//11. check 4<=3, false
//12. exit the loop


let i=0;
for(;i<5;i++)
{
    console.log(i);
    
}


for(;;)
{
    console.log("Hello Soniya");
    break; // this will exit the loop after one iteration
    
}

//ex. wait for user input

for(;;)

    {
        let input = prompt("Enter a number  that is greater than 10:");
        if(input>10)
        {
            console.log("Thank you !" );
            break; // this will exit the loop when the condition is met
        }
        
    }


    