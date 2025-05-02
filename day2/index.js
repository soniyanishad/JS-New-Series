var name="soniya"     //string data type
 var age=19;         //number
 var female=true      //boolean
 var data=null         //null
 var getName;          //undefined


 var arr=[1,2,3,4];      //Array

 var obj={                     //object
    name:"soniya",
    age:21
 }


 console.log(typeof(name));
 console.log(typeof(age));
 console.log(typeof(female));
 console.log(typeof(data));
 console.log(typeof(getName));
 console.log(typeof(arr));
 console.log(typeof(obj));

//  Arithmetic Operators

let a=10;
let b=2;

let c=a+b;
console.log(c);

let c1=a-b;
console.log(c1);

let c2=a*b;
console.log(c2);

let c3=a/b;
console.log(c3);

let c4=a%b;
console.log(c4);

let p=10;
let q=2;
console.log(p**q);

let p1=11;
console.log(p1++);
console.log(p1);

let p2=12;
console.log(++p2);
console.log(p2);



let d=10;
let e=20;
console.log(d+=e); //d=d+e
console.log(d-=e); //d=d-e
console.log(d*=e); //d=d*e
console.log(d/=e); //d=d/e
console.log(d%=e); //d=d%e
console.log(d**=e); //d=d**e


//  Comparison Operators

let x=10;
let y=10;

console.log(x==y); //equal to 
console.log(x===y); //strict equal to
console.log(x!=y); //not equal to
console.log(x!==y); //strict not equal to
console.log(x>y); //greater than
console.log(x<y); //less than
console.log(x>=y); //greater than or equal to
console.log(x<=y); //less than or equal to


//  Logical Operators

let a1=20
let b1=10;

console.log(a1>b1 && a1<b1); //and operator
console.log(a1>b1 || a1<b1); //or operator
console.log(!(a1>b1)); //not operator


let a2=20;
 if(a2<18){
    console.log("Statement is false");
    }
    else{
        console.log("Statement is true");
        
    }

let name1="soniya";
let gender="female";
if(gender=="female"){
    console.log("hello"+" "+name1);   
}
else{
    console.log("Not valid gender");
    
}
     













 
 
 