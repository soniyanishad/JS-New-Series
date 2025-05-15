
let day=8;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7: 
    console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
       
}

        
let a=10,b=20;
let operator='*';

switch(operator)
{
    case '+':
        console.log("Addition is:"+(a+b));
        break;
    case '-':
            console.log("Subtraction is:"+(a-b));
            break;
    case '*':
        console.log("Multiplication is:"+(a*b));
        break;
        
    case '/': 
    console.log("Division is:"+(a/b));
    break;

    default:
        console.log("Invalid operator");
}


//check if the days is weekend or weekday

let day1=4;

switch(day1){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}


// check age group

let age=58;

switch(true){
    case (age>=0 && age<=12):
        console.log("Child");
        break;
    case (age>=13 && age<=19):
        console.log("Teenager");
        break;
    case (age>=20 && age<=59):
        console.log("Adult");
        break;
    case (age>=60):
        console.log("Senior Citizen");
        break;

    default:
            console.log("Invalid age");
            
}

let num=new Array("aman","soniya",25);

console.log(num[0]);










        

        

        


    



        

        

        
        