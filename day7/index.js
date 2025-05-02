//reversing a number

function reverseNumber(num)
{
    let rev=0;
    while(num>0)
    {
        let digit=num%10;
        rev=rev*10+digit;
        num=(num-(num%10))/10;
    }
    return rev;
}
console.log(reverseNumber(12345));  // Output: 54321

// palindrome number

function isPalindrome(num)
{
    let rev=0;
    let originalNum=num;
    while(num>0)
    {
        let digit=num%10;
        rev=rev*10+digit;
        num=(num-(num%10))/10;
    }
   
   if(originalNum==rev)
   {
       return true;
   }
   else
    {
         return false;
    }
    return rev;

}
console.log(isPalindrome(12121)); 
 
//Find Armstrong number


function isArmstrong(num)
{
    let sum=0;
    let originalNum=num;
    while(num>0)
    {
        rem=num%10;
        sum=sum+(rem*rem*rem);
        num=(num-(num%10))/10;
    }
    if(sum==originalNum)
    {
        console.log("Number is Armstrong number");
    }
    else
    {
        console.log("Not an Armstrong number");
    }

}
console.log(isArmstrong(153)); 


//swapping two numbers without using third variable

function swap(a,b)
{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("a=",a,"b=",b);

}
swap(10,20);

//find even number from numbers and return the sum of even numbers without using array

function sumEvenNumbers(num)
{
    let sum=0;
    for(let i=1;i<=num;i++)
    {
        if(i%2==0)
        {
            sum=sum+i;
        }
    }
    return sum;
}

console.log(sumEvenNumbers(5));

// count the number of digits in a number

function countDigits(num)
{
    let count=0;
    while(num>0)
    {
        num=(num-(num%10))/10;
        count++;
    }
    return count;
}

console.log(countDigits(56788877666776)); 
